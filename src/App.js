import React, { Component, Fragment } from 'react';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import Backdrop from './components/Backdrop/Backdrop';

import Toolbar from './components/Toolbar/Toolbar';

import MainNavigation from './components/Navigation/MainNavigation/MainNavigation';

import MobileNavigation from './components/Navigation/MobileNavigation/MobileNavigation';

import ErrorHandler from './components/ErrorHandler/ErrorHandler';

import FeedPage from './pages/Feed/Feed';

import SinglePostPage from './pages/Feed/SinglePost/SinglePost';

import LoginPage from './pages/Auth/Login';

import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  state = {
    showBackdrop: false,
    showMobileNav: false,
    isAuth: false,
    token: null,
    userId: null,
    authLoading: false,
    error: null,
    name: '',
    showFeed: false,
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');

    if (!token || !expiryDate) {
      return;
    }

    if (new Date(expiryDate) <= new Date()) {
      this.logoutHandler();
      return;
    }

    const userId = localStorage.getItem('userId');
    const name = localStorage.getItem('name');
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    this.setState({
      showFeed: true,
      isAuth: true,
      token: token,
      name: name,
      userId: userId,
    });
    this.setAutoLogout(remainingMilliseconds);
  }

  mobileNavHandler = (isOpen) => {
    this.setState({ showMobileNav: isOpen, showBackdrop: isOpen });
  };

  backdropClickHandler = () => {
    this.setState({ showMobileNav: false, showBackdrop: false, error: null });
  };

  logoutHandler = () => {
    this.setState({ isAuth: false, token: null });
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('name');
  };

  loginHandler = (event, authData) => {
    event.preventDefault();
    this.setState({ authLoading: true });
    fetch(
      'http://localhost:8080/auth/login',

      {
        body: JSON.stringify({
          email: authData.email,
          password: authData.password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    )
      .then((res) => {
        if (res.status === 422) {
          throw new Error('Validation failed.');
        }

        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Could not authenticate you!');
        }

        return res.json();
      })
      .then((data) => {
        this.setState({
          isAuth: true,
          token: data.token,
          authLoading: false,
          userId: data.userId,
          name: data.name,
        });
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('name', data.name);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
      })
      .catch((err) => {
        let message = err;
        if (err.message === 'Failed to fetch') {
          err.message = 'Failed to log you in, please try again.';
        }

        this.setState({
          isAuth: false,
          authLoading: false,
          error: message,
        });
      });
  };

  setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };

  errorHandler = () => {
    this.setState({ error: null });
  };

  render() {
    let routes = (
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <LoginPage
              {...props}
              onLogin={this.loginHandler}
              loading={this.state.authLoading}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );

    if (this.state.isAuth) {
      routes = (
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <div>
                  <FeedPage
                    userId={this.state.userId}
                    token={this.state.token}
                    name={this.state.name}
                  />
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            path="/:postId"
            render={(props) => (
              <SinglePostPage
                {...props}
                userId={this.state.userId}
                token={this.state.token}
              />
            )}
          />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <Fragment>
        {this.state.showBackdrop && (
          <Backdrop onClick={this.backdropClickHandler} />
        )}
        <ErrorHandler error={this.state.error} onHandle={this.errorHandler} />
        <Layout
          header={
            <Toolbar>
              <MainNavigation
                onOpenMobileNav={this.mobileNavHandler.bind(this, true)}
                onLogout={this.logoutHandler}
                isAuth={this.state.isAuth}
              />
            </Toolbar>
          }
          mobileNav={
            <MobileNavigation
              open={this.state.showMobileNav}
              mobile
              onChooseItem={this.mobileNavHandler.bind(this, false)}
              onLogout={this.logoutHandler}
              isAuth={this.state.isAuth}
            />
          }
        />
        {routes}
      </Fragment>
    );
  }
}

export default withRouter(App);
