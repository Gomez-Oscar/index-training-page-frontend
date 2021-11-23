import React from 'react';

import SlideItem from './SlideItem';
import Carousel from 'react-elastic-carousel';
import './SlideList.css';

const SlideList = (props) => {
  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <Carousel breakPoints={breakPoints} className="slides-list">
      {props.items.map((slide) => {
        return (
          <SlideItem
            key={slide.id}
            id={slide.id}
            image={slide.image}
            title={slide.title}
          />
        );
      })}
    </Carousel>
  );
};

export default SlideList;
