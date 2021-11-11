import React from 'react';
import { useParams } from 'react-router';

import RecordingSelectedItem from '../components/RecordingSelectedItem';

const DUMMY_RECORDING = [
  {
    id: 'r1',
    title: 'Recording 1',
    imageUrl:
      'https://a.fsdn.com/con/app/proj/talent-com.s/screenshots/img-slider-1.png/1000/auto/1',
  },
  {
    id: 'r2',
    title: 'Recording 2',
    imageUrl:
      'https://hrtechfeed.com/wp-content/uploads/2019/12/talent.com_.jpg',
  },
];

const RecordingSelected = () => {
  const { recId } = useParams();
  const loadedRecordings = DUMMY_RECORDING.filter((rec) => rec.id === recId);
  return <RecordingSelectedItem items={loadedRecordings} />;
};

export default RecordingSelected;
