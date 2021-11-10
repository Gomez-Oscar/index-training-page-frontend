import React from 'react';

import SlideList from '../components/SlideList';

const Slides = () => {
  const DUMMY_SLIDES = [
    {
      id: 's1',
      title: 'Talent Tools',
      image:
        'https://a.fsdn.com/con/app/proj/talent-com.s/screenshots/img-slider-1.png/1000/auto/1',
    },
    {
      id: 's2',
      title: 'Talent Test',
      image:
        'https://hrtechfeed.com/wp-content/uploads/2019/12/talent.com_.jpg',
    },
  ];

  return <SlideList items={DUMMY_SLIDES}></SlideList>;
};

export default Slides;
