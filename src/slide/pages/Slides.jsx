import React from 'react';

import SlideList from '../components/SlideList';

const Slides = () => {
  const SLIDES = [
    {
      id: 's1',
      title: 'Talent Tools',
      image:
        'https://a.fsdn.com/con/app/proj/talent-com.s/screenshots/img-slider-1.png/1000/auto/1',
      // 'https://hrtechfeed.com/wp-content/uploads/2019/12/talent.com_.jpg',
    },
  ];

  return <SlideList items={SLIDES}></SlideList>;
};

export default Slides;
