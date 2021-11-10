import React from 'react';
import { Link } from 'react-router-dom';

import './MainHeader.css';

const MainHeader = (props) => {
  return (
    <header className="main-header">
      <Link to="/">Index Training</Link>
      {props.children}
    </header>
  );
};

export default MainHeader;
