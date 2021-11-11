import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Slides from './slide/pages/Slides';
import Carousel from 'react-elastic-carousel';
import Searchbar from './homepage/components/SearchBar';
import MainHeader from './shared/components/Navigation/MainHeader';
import SlideSelected from './slide selected/pages/SlideSelected';
import Button from './shared/components/FormElements/Button';
import Recordings from './recording/pages/Recordings';
import RecordingSelected from './recording selected/pages/RecordingSelected';
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
          <Route path="/" exact>
            <h1 className="main-title">Index Training Resources</h1>
            <Searchbar />
            <Button to="/slides" view_homepage>
              Slides
            </Button>
            <Button to="/recordings" view_homepage>
              Recordings
            </Button>
          </Route>
          <Route path="/slides/:slideId" exact>
            <SlideSelected />
          </Route>
          <Route path="/slides" exact>
            <h2 className="secondary-title">Slides</h2>
            {/* <div className="wrapper"></div> */}
            <Carousel breakPoints={breakPoints}>
              <Slides />
            </Carousel>
          </Route>
          <Route path="/recordings/:recId" exact>
            <RecordingSelected />
          </Route>
          <Route path="/recordings" exact>
            <h2 className="secondary-title">Recordings</h2>
            {/* <div className="wrapper"></div> */}
            <Carousel breakPoints={breakPoints}>
              <Recordings />
            </Carousel>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
