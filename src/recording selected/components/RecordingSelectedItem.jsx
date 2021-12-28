import React from 'react';
import ReactPlayer from 'react-player';

import './RecordingSelectedItem.css';

const RecordingSelectedItem = (props) => {
  return (
    <React.Fragment>
      {[props.items].map((rec) => (
        <React.Fragment>
          {/* <h2 className="recording-selected-item__title">{rec.title}</h2> */}
          <div className="recording-selected-item__image">
            {/* <img src={rec.imageUrl} alt={rec.title} /> */}
            <ReactPlayer
              className="react-player"
              url={rec.video}
              controls
              width="950px"
              height="550px"
              // width="70%"
              // height="55%"
            />
          </div>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default RecordingSelectedItem;
