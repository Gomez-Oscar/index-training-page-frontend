import React from 'react';
import Button from '../../shared/components/FormElements/Button';
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
        <Button search>
          <FaSearch size="22px" />
        </Button>
      </div>
    </div>
  );
};

export default Searchbar;
