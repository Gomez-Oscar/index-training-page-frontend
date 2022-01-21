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

const UpdateRecording = () => {
  const { recId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedRecording, setLoadedRecording] = useState();
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
          'http://localhost:5000/api/recordings/' + recId
        );

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedRecording(responseData.recording);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, [recId]);

  useEffect(() => {
    if (loadedRecording) {
      setFormData(
        {
          title: {
            value: loadedRecording.title,
            isValid: true,
          },
          url: {
            value: loadedRecording.url,
            isValid: true,
          },
        },
        true
      );
    }
  }, [setFormData, loadedRecording]);

  const recordingUpdateSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:5000/api/recordings/${recId}`,
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
      history.push('/recordings');
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
      {!isLoading && loadedRecording && (
        <form className="new-item-form" onSubmit={recordingUpdateSubmitHandler}>
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
            Edit Recording
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default UpdateRecording;
