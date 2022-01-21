import React, { useState, useEffect } from 'react';

import RecordingList from './../components/RecordingList';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const Recordings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedRecs, setLoadedRecs] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/recordings');

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedRecs(responseData.recordings);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  const RecordingDeletedHandler = (deletedRecordingId) => {
    setLoadedRecs((prevRecordings) =>
      prevRecordings.filter((recording) => recording.id !== deletedRecordingId)
    );
  };

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedRecs && (
        <RecordingList
          items={loadedRecs}
          onDeleteRecording={RecordingDeletedHandler}
        />
      )}
    </React.Fragment>
  );
};

export default Recordings;
