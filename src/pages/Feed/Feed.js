import React, { Component, Fragment } from 'react';

import Post from '../../components/Feed/Post/Post';

import Button from '../../components/Button/Button';

import FeedEdit from './FeedEdit/FeedEdit';

import Input from '../../components/Form/Input/Input';

import Paginator from '../../components/Paginator/Paginator';

import Loader from '../../components/Loader/Loader';

import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';

import './Feed.css';
import { CSSTransition } from 'react-transition-group';

class Feed extends Component {
  state = {
    isEditing: false,
    posts: [],
    totalPosts: 0,
    editPost: null,
    status: '',
    postPage: 1,
    showFeed: false,
    postsLoading: true,
    editLoading: false,
  };

  componentDidMount() {
    fetch(`https://postsmanager.herokuapp.com/feed/status`, {
      headers: {
        Authorization: `Bearer ${this.props.token}`,
        Name: `${this.props.name}`,
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('Failed to fetch user status.');
        }

        return res.json();
      })
      .then((data) => {
        this.setState({ status: data.userStatus });
      })
      .catch(this.catchError);
    this.loadPosts();
  }

  loadPosts = (direction) => {
    if (direction) {
      this.setState({ postsLoading: true, posts: [] });
    }

    let page = this.state.postPage;

    if (direction === 'next') {
      page++;
      this.setState({ postPage: page});
    }

    if (direction === 'previous') {
      page--;

      this.setState({ postPage: page});
    }

    fetch(`https://postsmanager.herokuapp.com/feed/posts?page=${page}`, {
      headers: {
        Authorization: `Bearer ${this.props.token}`,
        Name: `${this.props.name}`,
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('Failed to fetch posts.');
        }
        return res.json();
      })
      .then((data) => {
        this.setState({
          posts: data.posts.map((post) => {
            return {
              ...post,
              imagePath: post.imageUrl,
            };
          }),
          totalPosts: data.totalItems,
          showFeed: true,

          postsLoading: false,
        });
      })
      .catch(this.catchError);
  };

  statusUpdateHandler = (event) => {
    event.preventDefault();

    fetch(
      `https://postsmanager.herokuapp.com/feed/status`,

      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.props.token}`,
          'Content-Type': 'application/json',
          Name: `${this.props.name}`,
        },

        body: JSON.stringify({
          newStatus: this.state.status,
        }),
      }
    )
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Can't update user's status (in the database) in this demo version of the app!");
        }
        return res.json();
      })
      .then((data) => {
        window.location.reload(false); ////talvez tweakar
      })
      .catch(this.catchError);
  };

  newPostHandler = () => {
    this.setState({ isEditing: true });
  };

  startEditPostHandler = (postId) => {
    this.setState((prevState) => {
      const loadedPost = {
        ...prevState.posts.find((post) => post._id === postId),
      };

      return {
        isEditing: true,
        editPost: loadedPost,
      };
    });
  };

  cancelEditHandler = () => {
    this.setState({ isEditing: false, editPost: null });
  };

  finishEditHandler = (postData) => {
    this.setState({ editLoading: true });

    console.log(this.props.name);
    let formData = new FormData();
    formData.append('title', postData.title);
    formData.append('content', postData.content);
    formData.append('image', postData.image);
    formData.append('name', this.props.name);

    let url = 'https://postsmanager.herokuapp.com/feed/post';
    let method = 'POST';

    if (this.state.editPost) {
      url = `https://postsmanager.herokuapp.com/feed/post/${postData.id}`;
      method = 'PUT';
    }

    fetch(url, {
      method: method,
      body: formData,
      headers: {
        Authorization: `Bearer ${this.props.token}`,
        Name: `${this.props.name}`,
      },
    })
      .then((res) => {
        if (res.status === 400) {
          throw new Error(
            'Please input values that are valid and not equal to previous ones.'
          );
        }
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Creating or editing a post failed!');
        }

        return res.json();
      })
      .then((data) => {
        const post = {
          _id: data.post._id,
          title: data.post.title,
          content: data.post.content,
          creator: data.post.creator,
          createdAt: data.post.createdAt,
        };

        this.setState((prevState) => {
          let updatedPosts = [...prevState.posts];
          if (prevState.editPosts) {
            const postIndex = prevState.posts.findIndex((post) => {
              return post._id === prevState.editPost._id;
            });
            updatedPosts[postIndex] = post;
          } else if (prevState.posts.length < 2) {
            updatedPosts = prevState.posts.concat(post);
          }
          return {
            posts: updatedPosts,
            isEditing: false,
            editPost: null,
            editLoading: false,
          };
        });

        this.loadPosts();
      })
      .catch((err) => {
        this.setState({
          isEditing: false,
          editPost: null,
          editLoading: false,
          error: err,
        });
        this.loadPosts();
      });
  };

  statusInputChangedHandler = (input, value) => {
    this.setState({ status: value });
  };

  errorHandler = () => {
    this.setState({ error: null });
  };

  catchError = (error) => {
    this.setState({ error: error });
  };

  render() {
    return (
      <Fragment>
        <ErrorHandler error={this.state.error} onHandle={this.errorHandler} />
        <FeedEdit
          editing={this.state.isEditing}
          selectedPost={this.state.editPost}
          loading={this.state.editLoading}
          onCancelEdit={this.cancelEditHandler}
          onFinishEdit={this.finishEditHandler}
        />
        <section className="feed__status">
          <form onSubmit={this.statusUpdateHandler}>
            <Input
              type="text"
              placeholder="Your status"
              control="input"
              onChange={this.statusInputChangedHandler}
              value={this.state.status}
            />
            <Button mode="flat" type="submit">
              Update
            </Button>
          </form>
          <p className="text-muted">
            Obs: Updates/changes made to this input field only modify 
           the app's local state (no effect on the MongoDB database's data), which is reset on every page reload.
          </p>
        </section>
        <section className="feed__control">
          <Button mode="raised" design="accent" onClick={this.newPostHandler}>
            New Post
          </Button>
        </section>
        <CSSTransition
      timeout={800}
      classNames='fade'
      in={this.state.showFeed}
    >
        <section className="feed">
          {this.state.postsLoading && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Loader />
            </div>
          )}
          {this.state.posts.length <= 0 && !this.state.postsLoading ? (
            <p style={{ textAlign: 'center' }}>No posts found.</p>
          ) : null}
          {!this.state.postsLoading && (
           
              <Paginator
                onPrevious={this.loadPosts.bind(this, 'previous')}
                onNext={this.loadPosts.bind(this, 'next')}
                lastPage={Math.ceil(this.state.totalPosts / 5)}
                currentPage={this.state.postPage}
              >
                {this.state.posts.map((post) => (
                  <Post
                    key={post._id}
                    id={post._id}
                    author={post.creator.name}
                    date={new Date(post.createdAt).toLocaleDateString('en-US')}
                    title={post.title}
                    image={post.imageUrl}
                    content={post.content}
                   
                  />
                ))}
              </Paginator>
    
          )}
        </section>
        </CSSTransition>
      </Fragment>
    );
  }
}

export default Feed;
