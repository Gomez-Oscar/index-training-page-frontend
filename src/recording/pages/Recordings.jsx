import React from 'react';

import RecordingList from './../components/RecordingList';

const DUMMY_RECORDINGS = [
  {
    id: 'r1',
    title: 'Talent Tools Recording',
    image:
      'https://a.fsdn.com/con/app/proj/talent-com.s/screenshots/img-slider-1.png/1000/auto/1',
  },
  {
    id: 'r2',
    title: 'Talent Test Recording',
    image: 'https://hrtechfeed.com/wp-content/uploads/2019/12/talent.com_.jpg',
  },
];

const Recordings = () => {
  return <RecordingList items={DUMMY_RECORDINGS}></RecordingList>;
};

export default Recordings;
