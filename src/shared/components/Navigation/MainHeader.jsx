import React from 'react';

import './MainHeader.css';

const MainHeader = (props) => {
  return (
    <header className="main-header">
      Index Training Resources
      {props.children}
    </header>
  );
};

export default MainHeader;
