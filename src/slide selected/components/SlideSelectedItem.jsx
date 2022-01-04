import React from 'react';

import './SlideSelectedItem.css';

const SlideSelectedItem = (props) => {
  if (props.items) {
    return (
      <React.Fragment>
        {[props.items].map((slide) => (
          <React.Fragment>
            <div className="slide-images">
              <iframe
                src={slide.pdf}
                frameborder="0"
                title="title"
                width="950px"
                height="550px"
              ></iframe>
            </div>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  } else {
    return <div>ERROR</div>;
  }
};

export default SlideSelectedItem;
