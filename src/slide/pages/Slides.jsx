import React, { useEffect, useState } from 'react';

import SlideList from '../components/SlideList';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const Slides = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedSlides, setLoadedSlides] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/slides');

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedSlides(responseData.slides);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  const slideDeletedHandler = (deletedSlideId) => {
    setLoadedSlides((prevSlides) =>
      prevSlides.filter((slide) => slide.id !== deletedSlideId)
    );
  };

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedSlides && (
        <SlideList items={loadedSlides} onDeleteSlide={slideDeletedHandler} />
      )}
    </React.Fragment>
  );
};

export default Slides;
