import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './SearchBar.css';

const Searchbar = (props) => {
  const [filteredData, setFilteredData] = useState([]);

  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
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

/* <a 
              className="data-item"
              href={value.link}
              target="_blank"
              rel="noreferrer"
            >
              <p>{value.title}</p>
            </a> */
