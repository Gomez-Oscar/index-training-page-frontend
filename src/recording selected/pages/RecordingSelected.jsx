import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import RecordingSelectedItem from '../components/RecordingSelectedItem';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const RecordingSelected = () => {
  const { recId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [loadedRec, setLoadedRec] = useState();

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

        setLoadedRec(responseData.recording);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, [recId]);

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedRec && <RecordingSelectedItem items={loadedRec} />}
    </React.Fragment>
  );
};

export default RecordingSelected;
