import React, { Component } from 'react';

import Input from '../../components/Form/Input/Input';

import Button from '../../components/Button/Button';

import { required, length, email } from '../../util/validators';

import { CSSTransition } from 'react-transition-group';

import Auth from './Auth';

import './Login.css';

class Login extends Component {
  state = {
    loginForm: {
      email: {
        value: '',
        valid: false,
        touched: false,
        validators: [required, email],
      },

      password: {
        value: '',
        valid: false,
        touched: false,
        validators: [required, length({ min: 5 })],
      },
      formIsValid: false,
    },

    showForm: false,
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      showForm: true,
    });
  }

  inputChangedHandler = (input, value) => {
    this.setState((prevState) => {
      let isValid = true;
      for (const validator of prevState.loginForm[input].validators) {
        isValid = isValid && validator(value);
      }

      const updatedForm = {
        ...prevState.loginForm,
        [input]: {
          ...prevState.loginForm[input],
          valid: isValid,
          value: value,
        },
      };

      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }

      return {
        loginForm: updatedForm,
        formIsValid: formIsValid,
      };
    });
  };

  inputBlurHandler = (input) => {
    this.setState((prevState) => {
      return {
        loginForm: {
          ...prevState.loginForm,
          [input]: {
            ...prevState.loginForm[input],
            touched: true,
          },
        },
      };
    });
  };

  render() {
    return (
      <CSSTransition timeout={800} classNames="fade" in={this.state.showForm}>
        <Auth>
          <form
            onSubmit={(event) => {
              return this.props.onLogin(event, {
                email: this.state.loginForm.email.value,
                password: this.state.loginForm.password.value,
              });
            }}
          >
            <Input
              id="email"
              label="Your E-Mail (hint: exemplo@exemplo.com)"
              placeholder="exemplo@exemplo.com"
              type="email"
              control="input"
              onChange={this.inputChangedHandler}
              onBlur={this.inputBlurHandler.bind(this, 'email')}
              value={this.state.loginForm['email'].value}
              valid={this.state.loginForm['email'].valid}
              touched={this.state.loginForm['email'].touched}
            />
            <Input
              id="password"
              label="Password (hint: exemplo)"
              type="password"
              control="input"
              placeholder="exemplo"
              onChange={this.inputChangedHandler}
              onBlur={this.inputBlurHandler.bind(this, 'password')}
              value={this.state.loginForm['password'].value}
              valid={this.state.loginForm['password'].valid}
              touched={this.state.loginForm['password'].touched}
            />
            <Button design="raised" type="submit" loading={this.props.loading}>
              Login
            </Button>
          </form>
        </Auth>
      </CSSTransition>
    );
  }
}

export default Login;
