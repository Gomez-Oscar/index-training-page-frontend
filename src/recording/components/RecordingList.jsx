import React from 'react';

import RecordingItem from './RecordingItem';
import Carousel from 'react-elastic-carousel';
import './RecordingList.css';

const RecordingList = (props) => {
  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <Carousel breakPoints={breakPoints} className="recordings-list">
      {props.items.map((rec) => {
        return (
          <RecordingItem
            key={rec.id}
            id={rec.id}
            image={rec.image}
            title={rec.title}
            onDelete={props.onDeleteRecording}
          />
        );
      })}
    </Carousel>
  );
};

export default RecordingList;
