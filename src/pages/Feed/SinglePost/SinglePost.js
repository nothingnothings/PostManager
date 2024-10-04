import React, { Component } from 'react';

import Image from '../../../components/Image/Image';

import './SinglePost.css';

import SinglePostPaginator from '../../../components/SinglePostPaginator/SinglePostPaginator';

class SinglePost extends Component {
  state = {
    title: '',
    author: '',
    date: '',
    image: '',
    content: '',
    error: '',
  };

  redirectToHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    const postId = this.props.match.params.postId;
    fetch(
      `https://postmanager-production-872c.up.railway.app/feed/post/${postId}`,

      {
        headers: {
          Authorization: `Bearer ${this.props.token}`,
        },
      }
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('Failed to fetch status');
        }

        return res.json();
      })
      .then((data) => {
        this.setState({
          title: data.post.title,
          author: data.post.creator.name,
          date: new Date(data.post.createdAt).toLocaleDateString('en-US'),
          image: data.post.imageUrl,
          content: data.post.content,
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
      });
  }

  render() {
    return (
      <section className="single-post">
        <h1>{this.state.title}</h1>
        <h2>
          Created by {this.state.author} on {this.state.date}
        </h2>
        <div className="single-post__image">
          <Image
            contain
            imageUrl={`https://postmanager-production-872c.up.railway.app/${this.state.image}`}
          />
        </div>
        <p>{this.state.content}</p>
        <SinglePostPaginator onRedirectTohome={this.redirectToHome.bind(this)}
        ></SinglePostPaginator>
      </section>
    );
  }
}

export default SinglePost;
