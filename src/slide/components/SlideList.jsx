import React from 'react';

import SlideItem from './SlideItem';
import './SlideList.css';

const SlideList = (props) => {
  return (
    <ul className="slides-list">
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
    </ul>
  );
};

export default SlideList;
