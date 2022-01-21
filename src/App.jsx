import React, { useEffect, useState, useCallback } from 'react';
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
import NewItem from './shared/components/NewItem/NewItem';
import Login from './login/components/Login';
import { AuthContenxt } from './shared/context/auth-context';
import UpdateSlide from './slide/pages/UpdateSlide';
import UpdateRecording from './recording/pages/UpdateRecording';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedSlides, setLoadedSlides] = useState();
  const [loadedRecordings, setLoadedRecordings] = useState();

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

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

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <h1 className="main-title">Index Training Resources</h1>
          {loadedSlides && loadedRecordings && (
            <Searchbar
              placeholder="inland..."
              data={loadedSlides.concat(loadedRecordings)}
            />
          )}
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
        <Route path="/slides/" exact>
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
        <Route path="/update-slide/:slideId" exact>
          <UpdateSlide />
        </Route>
        <Route path="/update-recording/:recId" exact>
          <UpdateRecording />
        </Route>
        <Route path="/new-item" exact>
          <NewItem />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <h1 className="main-title">Index Training Resources</h1>
          {loadedSlides && loadedRecordings && (
            <Searchbar
              placeholder="inland..."
              data={loadedSlides.concat(loadedRecordings)}
            />
          )}
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
        <Route path="/slides/" exact>
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
        <Route path="/login" exact>
          <Login />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <AuthContenxt.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <React.Fragment>
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && loadedSlides && loadedRecordings && (
          <Router>
            <MainHeader />
            <main>{routes}</main>
          </Router>
        )}
      </React.Fragment>
    </AuthContenxt.Provider>
  );
};

export default App;
