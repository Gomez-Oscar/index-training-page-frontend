import React from 'react';

import './RecordingSelectedItem.css';

const RecordingSelectedItem = (props) => {
  return (
    <React.Fragment>
      {props.items.map((rec) => (
        <React.Fragment>
          <h2 className="recording-selected-item__title">{rec.title}</h2>
          <div className="recording-selected-item__image">
            <img src={rec.imageUrl} alt={rec.title} />
            {/* <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vT2xg78auIhsb4zBJQHuGqOMSgSLw3oWJ36lzPGJF7IwzZtKWZhXvWRJIfUWIAbU33pkiWLuqaibRo6/embed?start=false&loop=false&delayms=3000"
              frameborder="0"
              width="480"
              height="289"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe> */}
          </div>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default RecordingSelectedItem;
