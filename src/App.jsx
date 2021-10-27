import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Card from './shared/components/UIElements/Card';
import Searchbar from './homepage/components/SearchBar';
import MainHeader from './shared/components/Navigation/MainHeader';
import './App.css';

const App = () => {
  return (
    <Router>
      <MainHeader />
      <main>
        <Switch>
          <h1 className="main-title">Index Training Resources</h1>
          <Searchbar />
          <h2 className="secondary-title">Slides</h2>

          <div className="wrapper">
            <Card title="Talent Tools" />
            <Card title="Tickets System" />
            <Card title="Pagination" />
          </div>
          <h2 className="secondary-title">Videos</h2>
          <div className="wrapper">
            <Card title="Scroll Training" />
            <Card title="XML Training" />
            <Card title="Button More Training" />
          </div>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
