import React from 'react';

import './SlideSelectedItem.css';

const SlideSelectedItem = (props) => {
  return (
    <React.Fragment>
      {props.items.map((slide) => (
        <React.Fragment>
          <h2 className="slide-selected-item__title">{slide.title}</h2>
          <div className="slide-selected-item__image">
            {/* <img src={slide.imageUrl} alt={slide.title} /> */}
            <iframe
              title="title"
              src={slide.slideUrl}
              frameBorder="0"
              width="900"
              height="480"
              allowFullScreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          </div>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default SlideSelectedItem;
