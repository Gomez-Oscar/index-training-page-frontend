import React from 'react';

import RecordingItem from './RecordingItem';
import './RecordingList.css';

const RecordingList = (props) => {
  return (
    <ul className="recordings-list">
      {props.items.map((rec) => {
        return (
          <RecordingItem
            key={rec.id}
            id={rec.id}
            image={rec.image}
            title={rec.title}
          />
        );
      })}
    </ul>
  );
};

export default RecordingList;
