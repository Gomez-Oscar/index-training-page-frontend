import React from 'react';

import './NewItem.css';
import Button from '../FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_ITEM,
  VALIDATOR_MINLENGTH,
  VALIDATOR_URL,
} from '../../util/validators';
import { useForm } from '../../hooks/form-hook';
import Input from '../FormElements/Input';

const NewItem = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      type: {
        value: '',
        isValid: false,
      },
      url: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); //send this to the backend
  };

  return (
    <form className="new-item-form" onSubmit={submitHandler}>
      <Input
        id="title"
        type="text"
        label="Title"
        errorText="Enter a valid title"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
      />
      <Input
        id="type"
        type="text"
        label="Type"
        placeholder="slides or recordings"
        errorText="Enter a valid type"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_ITEM()]}
        onInput={inputHandler}
      />
      <Input
        id="url"
        type="text"
        label="URL"
        errorText="Enter a valid url"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_URL()]}
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Add Item
      </Button>
    </form>
  );
};

export default NewItem;
