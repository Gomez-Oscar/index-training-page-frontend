import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './NewItem.css';
import Button from '../FormElements/Button';
import ErrorModal from '../UIElements/ErrorModal';
import LoadingSpinner from '../UIElements/LoadingSpinner';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_ITEM,
  VALIDATOR_MINLENGTH,
  VALIDATOR_URL,
} from '../../util/validators';
import { useForm } from '../../hooks/form-hook';
import Input from '../FormElements/Input';

const NewItem = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const history = useHistory();

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

  const submitHandler = async (event) => {
    event.preventDefault();

    let url;
    if (formState.inputs.type.value === 'slides') {
      url = 'http://localhost:5000/api/slides/new-slide';
    } else if (formState.inputs.type.value === 'recordings') {
      url = 'http://localhost:5000/api/recordings/new-recording';
    }

    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formState.inputs.title.value,
          image: 'http://localhost:5000/slides-pdf\\images\\test.jpg', // image upload
          type: formState.inputs.type.value,
          url: formState.inputs.url.value,
        }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setIsLoading(false);
      history.push('/'); //go to homepage
    } catch (err) {
      setIsLoading(false);
      setError(err.message || 'Something went wrong, please try again.');
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && <LoadingSpinner asOverlay />}
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
    </React.Fragment>
  );
};

export default NewItem;
