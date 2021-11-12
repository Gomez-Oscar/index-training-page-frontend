import React from 'react';
import ReactPlayer from 'react-player';

import './RecordingSelectedItem.css';

const RecordingSelectedItem = (props) => {
  return (
    <React.Fragment>
      {props.items.map((rec) => (
        <React.Fragment>
          <h2 className="recording-selected-item__title">{rec.title}</h2>
          <div className="recording-selected-item__image">
            {/* <img src={rec.imageUrl} alt={rec.title} /> */}
            <ReactPlayer
              className="react-player"
              url={rec.videoUrl}
              controls
              width="854px"
              height="480px"
            />
          </div>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default RecordingSelectedItem;
