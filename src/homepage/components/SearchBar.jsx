import React from 'react';
import { FaSearch } from 'react-icons/fa';

import './SearchBar.css';

const Searchbar = () => {
  return (
    /*     <div className="search-bar-container">
      <input type="text" placeholder="xml training" className="search-bar" />
      <button className="search-button"></button>
    </div> */
    <div className="search-wrap">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="xml training"
        />
        <button className="search-btn">
          <FaSearch size="25px" />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
