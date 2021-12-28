import React, { useState, useEffect } from 'react';

import RecordingList from './../components/RecordingList';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

/* const DUMMY_RECORDINGS = [
  {
    id: 'r1',
    title: 'Inland Training',
    image: 
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/281/shutterstock-284374388-ringo-mizukino-thumb-1499805850.jpg'
  },
  {
    id: 'r2',
    title: 'XML Training',
    image:
      'https://tecnologia-facil.com/wp-content/uploads/2019/10/que-es-xml-1.jpg',
  },
  {
    id: 'r3',
    title: 'Button More Training',
    image:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1630782257908/ry89uIDvO.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
  },
  {
    id: 'r4',
    title: 'JSON POST Training',
    image: 'https://www.nylas.com/wp-content/uploads/JSON_Blog_Hero.png',
  },
  {
    id: 'r5',
    title: 'Tickets System Training',
    image: 'https://www.itarian.com/images/ticketing-system.png',
  },
  {
    id: 'r6',
    title: 'Scanid Overview Training',
    image:
      'https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/asana-featured-image.png',
  },
]; */

const Recordings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedRecs, setLoadedRecs] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/recordings');

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedRecs(responseData.recordings);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedRecs && (
        <RecordingList items={loadedRecs}></RecordingList>
      )}
    </React.Fragment>
  );
};

export default Recordings;
