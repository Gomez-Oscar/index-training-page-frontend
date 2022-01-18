import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContenxt } from '../../context/auth-context';
import icon from './../../../logo/icon2.png';
import Button from '../FormElements/Button';

import './MainHeader.css';

const MainHeader = (props) => {
  const auth = useContext(AuthContenxt);

  return (
    <header className="main-header">
      <div className="icon-wrapper-header">
        <img className="icon" src={icon} alt="logo" />
        <Link to="/">Index Training</Link>
      </div>
      <div>
        {auth.isLoggedIn && (
          <Button header to="/new-item">
            Insert
          </Button>
        )}
        {!auth.isLoggedIn && (
          <Button header to="/login">
            LogIn
          </Button>
        )}
        {auth.isLoggedIn && (
          <Button header onClick={auth.logout}>
            LogOut
          </Button>
        )}
      </div>
      {props.children}
    </header>
  );
};

export default MainHeader;
