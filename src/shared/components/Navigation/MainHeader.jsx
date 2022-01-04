import React from 'react';
import { Link } from 'react-router-dom';

import icon from './../../../logo/icon2.png';
import Button from '../FormElements/Button';
import './MainHeader.css';

const MainHeader = (props) => {
  return (
    <header className="main-header">
      <div className="icon-wrapper-header">
        <img className="icon" src={icon} alt="logo" />
        <Link to="/">Index Training</Link>
      </div>
      <div>
        {/* <Button header>Insert</Button> */}
        <Button header>LogIn</Button>
        {/* <Button header>LogOut</Button> */}
      </div>
      {props.children}
    </header>
  );
};

export default MainHeader;
