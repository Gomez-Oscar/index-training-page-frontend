import React from 'react';
import { FaSearch } from 'react-icons/fa';

import './SearchBar.css';

const Searchbar = () => {
  return (
    <div className="search-wrap">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="xml training"
        />
        <button className="search-btn">
          <FaSearch size="22px" />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
