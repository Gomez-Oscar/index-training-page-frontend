import React from 'react';
// import { useParams } from 'react-router';

import SlideSelectedItem from '../components/SlideSelectedItem';

const SlideSelected = () => {
  const DUMMY_SLIDES = {
    id: 's1',
    title: 'Slide 1',
    imageUrl:
      'https://a.fsdn.com/con/app/proj/talent-com.s/screenshots/img-slider-1.png/1000/auto/1',
  };
  return <SlideSelectedItem items={DUMMY_SLIDES} />;
};

export default SlideSelected;
