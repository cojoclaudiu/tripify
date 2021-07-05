import './App.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import Categories from './categories/Categories';
import MainSearch from './mainSearch/MainSearch';
import MainDestinations from './mainDestinations/MainDestinations';
import Review from './Review';
import PostsGrid from './posts/PostsGrid';
import Register from './form/Register';

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Categories />
        <MainSearch />
        <MainDestinations />
        <PostsGrid />
      </Route>
      <Switch>
        <Route exact path="/review" component={Review} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
