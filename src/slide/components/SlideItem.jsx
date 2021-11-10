import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import './SlideItem.css';

const SlideItem = (props) => {
  return (
    <li className="slide-item">
      <Card className="slide-item__content">
        <h3 className="slide-item__title">{props.title}</h3>
        <div className="slide-item__image">
          <img src={props.image} alt="" />
        </div>
        <Button to={`/slides/${props.id}`} view>
          View
        </Button>
      </Card>
    </li>
  );
};

export default SlideItem;
