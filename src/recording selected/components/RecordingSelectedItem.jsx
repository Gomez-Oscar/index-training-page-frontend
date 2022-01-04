import React from 'react';
import ReactPlayer from 'react-player';

import './RecordingSelectedItem.css';

const RecordingSelectedItem = (props) => {
  return (
    <React.Fragment>
      {[props.items].map((rec) => (
        <React.Fragment>
          <div className="recording-selected-item__image">
            <ReactPlayer
              className="react-player"
              url={rec.video}
              controls
              width="950px"
              height="550px"
            />
          </div>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default RecordingSelectedItem;
