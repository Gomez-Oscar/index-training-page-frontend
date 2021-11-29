import React from 'react';
import { Link } from 'react-router-dom';

import icon from './../../../logo/icon2.png';
import './MainHeader.css';

const MainHeader = (props) => {
  return (
    <header className="main-header">
      <img className="icon" src={icon} alt="logo" />
      <Link to="/">Index Training</Link>
      {props.children}
    </header>
  );
};

export default MainHeader;
