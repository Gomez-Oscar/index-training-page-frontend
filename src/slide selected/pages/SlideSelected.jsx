import React from 'react';
import { useParams } from 'react-router';

import SlideSelectedItem from '../components/SlideSelectedItem';

const DUMMY_SLIDE = [
  {
    id: 's1',
    title: 'Slide 1',
    imageUrl:
      'https://a.fsdn.com/con/app/proj/talent-com.s/screenshots/img-slider-1.png/1000/auto/1',
  },
  {
    id: 's2',
    title: 'Slide 2',
    imageUrl:
      'https://hrtechfeed.com/wp-content/uploads/2019/12/talent.com_.jpg',
  },
];

const SlideSelected = () => {
  const { slideId } = useParams();
  console.log(slideId);
  const loadedSlides = DUMMY_SLIDE.filter((slide) => slide.id === slideId);
  console.log(loadedSlides);
  return <SlideSelectedItem items={loadedSlides} />;
};

export default SlideSelected;
