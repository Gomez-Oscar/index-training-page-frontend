import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import './RecordingItem.css';

const RecordingItem = (props) => {
  return (
    <li className="recording-item">
      <Card className="recording-item__content">
        <h3 className="recording-item__title">{props.title}</h3>
        <div className="recording-item__image">
          <img src={props.image} alt="" />
        </div>
        <Button to={`/recordings/${props.id}`} view>
          View
        </Button>
        {/* <Button to={`/recordings`} view>
          Update
        </Button>
        <Button to={`/recordings`} view>
          Delete
        </Button> */}
      </Card>
    </li>
  );
};

export default RecordingItem;
