import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = (props) => {
  if (props.href) {
    return (
      <a
        className={`${props.view && 'view-button'} ${
          props.danger && 'button--danger'
        } ${props.search && 'search-button'} ${
          props.view_slides && 'view-slides-button'
        }`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`${props.view && 'view-button'} ${
          props.danger && 'button--danger'
        } ${props.search && 'search-button'} ${
          props.view_slides && 'view-slides-button'
        }`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`${props.view && 'view-button'} ${
        props.danger && 'button--danger'
      } ${props.search && 'search-button'} ${
        props.view_slides && 'view-slides-button'
      }`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
