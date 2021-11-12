import React from 'react';
import { useParams } from 'react-router';

import SlideSelectedItem from '../components/SlideSelectedItem';

const DUMMY_SLIDE = [
  {
    id: 's1',
    title: 'Slide 1',
    imageUrl:
      'https://a.fsdn.com/con/app/proj/talent-com.s/screenshots/img-slider-1.png/1000/auto/1',
    slideUrl:
      'https://docs.google.com/presentation/d/e/2PACX-1vT2xg78auIhsb4zBJQHuGqOMSgSLw3oWJ36lzPGJF7IwzZtKWZhXvWRJIfUWIAbU33pkiWLuqaibRo6/embed?start=false&loop=false&delayms=3000',
  },
  {
    id: 's2',
    title: 'Slide 2',
    imageUrl:
      'https://hrtechfeed.com/wp-content/uploads/2019/12/talent.com_.jpg',
    slideUrl:
      'https://docs.google.com/presentation/d/e/2PACX-1vRlSoW6nt91h1Fxy4OkZZHjRGIVAJ7VMuJwUKt8G4a6xRxHYNRV4kSgpnVVXG363MP0MDuocCzRz-8M/embed?start=false&loop=false&delayms=3000',
  },
];

const SlideSelected = () => {
  const { slideId } = useParams();
  const loadedSlides = DUMMY_SLIDE.filter((slide) => slide.id === slideId);
  return <SlideSelectedItem items={loadedSlides} />;
};

export default SlideSelected;
