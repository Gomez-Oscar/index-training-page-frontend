import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Carousel from 'react-elastic-carousel';
import Card from './shared/components/UIElements/Card';
import Searchbar from './homepage/components/SearchBar';
import MainHeader from './shared/components/Navigation/MainHeader';
import './App.css';

const App = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <Router>
      <MainHeader />
      <main>
        <Switch>
          <Route to="/" exact>
            <h1 className="main-title">Index Training Resources</h1>
            <Searchbar />
            <h2 className="secondary-title">Slides</h2>
            <div className="wrapper">
              <Carousel breakPoints={breakPoints}>
                <Card title="Talent Tools" />
                <Card title="Tickets System" />
                <Card title="Pagination" />
                <Card title="Talent Tools" />
                <Card title="Tickets System" />
                <Card title="Pagination" />
              </Carousel>
            </div>
            <h2 className="secondary-title">Videos</h2>
            <div className="wrapper">
              <Carousel breakPoints={breakPoints}>
                <Card title="Scroll Training" />
                <Card title="XML Training" />
                <Card title="Button More Training" />
                <Card title="Scroll Training" />
                <Card title="XML Training" />
                <Card title="Button More Training" />
              </Carousel>
            </div>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
