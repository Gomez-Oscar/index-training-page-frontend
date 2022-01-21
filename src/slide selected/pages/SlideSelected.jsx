import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import SlideSelectedItem from '../components/SlideSelectedItem';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const SlideSelected = () => {
  const { slideId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [loadedSlide, setLoadedSlide] = useState();

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

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedSlide && <SlideSelectedItem items={loadedSlide} />}
    </React.Fragment>
  );
};

export default SlideSelected;
