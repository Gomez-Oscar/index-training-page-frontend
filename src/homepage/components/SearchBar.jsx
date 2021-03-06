import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './SearchBar.css';

/* const data = [
  {
    id: 's1',
    title: 'Inland',
    type: 'slides',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/281/shutterstock-284374388-ringo-mizukino-thumb-1499805850.jpg',
  },
  {
    id: 's2',
    title: 'XML',
    type: 'slides',
    image:
      'https://tecnologia-facil.com/wp-content/uploads/2019/10/que-es-xml-1.jpg',
  },
  {
    id: 's3',
    title: 'Button More',
    type: 'slides',
    image:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1630782257908/ry89uIDvO.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
  },
  {
    id: 's4',
    title: 'JSON POST',
    type: 'slides',
    image: 'https://www.nylas.com/wp-content/uploads/JSON_Blog_Hero.png',
  },
  {
    id: 's5',
    title: 'Tickets System',
    type: 'slides',
    image: 'https://www.itarian.com/images/ticketing-system.png',
  },
  {
    id: 's6',
    title: 'Scanid Overview',
    type: 'slides',
    image:
      'https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/asana-featured-image.png',
  },
  {
    id: 'r1',
    title: 'Inland Training',
    type: 'recordings',
    image:
      'data:image/png;base64,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',
  },
  {
    id: 'r2',
    title: 'XML Training',
    type: 'recordings',
    image:
      'https://tecnologia-facil.com/wp-content/uploads/2019/10/que-es-xml-1.jpg',
  },
  {
    id: 'r3',
    title: 'Button More Training',
    type: 'recordings',
    image:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1630782257908/ry89uIDvO.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
  },
  {
    id: 'r4',
    title: 'JSON POST Training',
    type: 'recordings',
    image: 'https://www.nylas.com/wp-content/uploads/JSON_Blog_Hero.png',
  },
  {
    id: 'r5',
    title: 'Tickets System Training',
    type: 'recordings',
    image: 'https://www.itarian.com/images/ticketing-system.png',
  },
  {
    id: 'r6',
    title: 'Scanid Overview Training',
    type: 'recordings',
    image:
      'https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/asana-featured-image.png',
  },
]; */

const Searchbar = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    // var newFilter = data.filter((value) => {
    var newFilter = props.data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setWordEntered('');
    setFilteredData([]);
  };

  var icon;
  if (filteredData.length === 0) {
    icon = <FaSearch size="22px" id="search-icon" />;
  }
  if (wordEntered !== '') {
    icon = <FaTimes size="30px" id="close-icon" onClick={clearInput} />;
  }

  return (
    <div className="search-wrap">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder={props.placeholder}
          onChange={handleFilter}
          value={wordEntered}
        />
        <div className="icon-wrapper">{icon}</div>
      </div>

      {filteredData.length !== 0 && (
        <div className="data-result">
          {filteredData.slice(0, 10).map((value, key) => {
            return (
              <Link
                className="data-item"
                to={'/' + value.type + '/' + value.id}
                exact
              >
                <p>{value.title}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
