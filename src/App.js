import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

import ImagesProvider from './context/images';
import HomePage from './pages/HomePage';
import ImageSearchPage from './pages/ImageSearchPage';
import ImagePage from './pages/ImagePage';
import TopBar from './components/TopBar';

import './App.css';

const history = createHistory();

function App() {
  return (
    <ImagesProvider>
      <div className="App">
        <Router history={history}>
          <TopBar />
          <Route exact path="/">
            <Redirect to="/pixabay-app" />
          </Route>
          <Route path="/pixabay-app" exact component={HomePage} />
          <Route
            path="/pixabay-app/imagesearch"
            exact
            component={ImageSearchPage}
          />
          <Route
            path="/pixabay-app/image/:imageId"
            exact
            component={ImagePage}
          />
        </Router>
      </div>
    </ImagesProvider>
  );
}

export default App;
