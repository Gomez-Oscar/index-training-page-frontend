import React from 'react';

import Carousel from 'react-elastic-carousel';

import './SlideSelectedItem.css';

import ajax from './ajax.pdf';

const SlideSelectedItem = (props) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];

  if (props.items) {
    return (
      <React.Fragment>
        {[props.items].map((slide) => (
          <React.Fragment>
            {/* <Carousel breakPoints={breakPoints} className="slides-list"> */}
            {/* <div className="slide-selected-item__image"> */}
            {/* {<img src={slide.image} alt={slide.title} />} */}
            <div className="slide-images">
              <iframe
                src={slide.pdf}
                frameborder="0"
                title="any"
                width="950px"
                height="550px"
              ></iframe>
            </div>
            {/* {slide.images.map((img) => (
              <div className="slide-images">
                <img src={img} alt={img} />
              </div>
            ))} */}
            {/* </div> */}
            {/* </Carousel> */}
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  } else {
    return <div>ERROR</div>;
  }
};

export default SlideSelectedItem;
