import React, { useContext } from 'react';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContenxt } from '../../shared/context/auth-context';

import '../../shared/components/NewItem/NewItem.css';

const Login = () => {
  const auth = useContext(AuthContenxt);
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    console.log('Login');
    auth.login();
  };

  return (
    <form className="new-item-form" onSubmit={loginSubmitHandler}>
      <Input
        element="input"
        id="email"
        type="email"
        label="E-Mail"
        validators={[VALIDATOR_EMAIL()]}
        errorText="Enter a valid email"
        onInput={inputHandler}
      />
      <Input
        element="input"
        id="password"
        type="password"
        label="Password"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Enter a valid password, at least 5 characters"
        onInput={inputHandler}
      />

      <Button type="submit" disabled={!formState.isValid}>
        Log In
      </Button>
    </form>
  );
};

export default Login;
