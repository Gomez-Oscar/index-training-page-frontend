import React, { useEffect, useState } from 'react';
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Slides from './slide/pages/Slides';
import Searchbar from './homepage/components/SearchBar';
import MainHeader from './shared/components/Navigation/MainHeader';
import SlideSelected from './slide selected/pages/SlideSelected';
import Button from './shared/components/FormElements/Button';
import Recordings from './recording/pages/Recordings';
import RecordingSelected from './recording selected/pages/RecordingSelected';
// import Info from './homepage/info.json';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedSlides, setLoadedSlides] = useState();
  const [loadedRecordings, setLoadedRecordings] = useState();

  // let Info = [];

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/slides');
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedSlides(responseData.slides);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/recordings');
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedRecordings(responseData.recordings);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  if (loadedRecordings) console.log(loadedRecordings);
  if (loadedSlides) console.log(loadedSlides);

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedSlides && loadedRecordings && (
        <Router>
          <MainHeader />
          <main>
            <Switch>
              <Route path="/" exact>
                <h1 className="main-title">Index Training Resources</h1>
                <Searchbar
                  placeholder="talent tools"
                  data={loadedSlides.concat(loadedRecordings)}
                />
                {/* <Searchbar placeholder="talent tools" /> */}
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
                <Slides />
              </Route>
              <Route path="/recordings/:recId" exact>
                <RecordingSelected />
              </Route>
              <Route path="/recordings" exact>
                <h2 className="secondary-title">Recordings</h2>
                <Recordings />
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
        </Router>
      )}
    </React.Fragment>
  );
};

export default App;
