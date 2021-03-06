import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_URL,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import '../../shared/components/NewItem/NewItem.css';

const UpdateSlide = () => {
  const { slideId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedSlide, setLoadedSlide] = useState();
  const history = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
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

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          'http://localhost:5000/api/slides/' + slideId
        );

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedSlide(responseData.slide);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, [slideId]);

  useEffect(() => {
    if (loadedSlide) {
      setFormData(
        {
          title: {
            value: loadedSlide.title,
            isValid: true,
          },
          url: {
            value: loadedSlide.url,
            isValid: true,
          },
        },
        true
      );
    }
  }, [setFormData, loadedSlide]);

  const slideUpdateSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:5000/api/slides/${slideId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: formState.inputs.title.value,
            url: formState.inputs.url.value,
          }),
        }
      );

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setIsLoading(false);
      history.push('/slides');
    } catch (err) {
      setIsLoading(false);
      setError(err.message || 'Something went wrong, please try again.');
    }
  };

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      {!isLoading && loadedSlide && (
        <form className="new-item-form" onSubmit={slideUpdateSubmitHandler}>
          <Input
            id="title"
            type="text"
            label="title"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
            errorText="enter a valid title"
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
          />
          <Input
            id="url"
            type="url"
            label="URL"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_URL()]}
            errorText="enter a valid url"
            onInput={inputHandler}
            initialValue={formState.inputs.url.value}
            initialValid={formState.inputs.url.isValid}
          />
          <Button type="submit" disabled={!formState.isValid}>
            Edit Slide
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default UpdateSlide;
