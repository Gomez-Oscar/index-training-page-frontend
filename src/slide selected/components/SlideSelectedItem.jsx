import React, { Fragment } from 'react';

import './SlideSelectedItem.css';

const SlideSelectedItem = (props) => {
  return (
    <Fragment>
      <h2 className="slide-selected-item__title">{props.items.title}</h2>
      <div className="slide-selected-item__image">
        <img src={props.items.imageUrl} alt={props.items.title} />
      </div>
    </Fragment>
  );
};

export default SlideSelectedItem;
