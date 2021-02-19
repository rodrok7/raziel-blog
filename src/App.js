import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import MainNav from './Components/MainNav/index'
import Home from './Pages/Home/Home'
import WriteAPost from './Pages/WriteAPost/WriteAPost'
import PostPage from './Pages/PostPage/PostPage';
import PostDetail from './Pages/PostDetail';
import LoginForm from './Pages/LoginForm/LoginForm'

import api from './lib/api'

function App() {


  let token = localStorage.getItem("token")
  console.log(token)
  return (
    <div className="App">
      <Router>
        <MainNav />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Container fluid>
          <Switch>
            <Route path="/posts">
              <PostPage />
            </Route>
            <Route path="/post-detail">
              <PostDetail />
            </Route>
            <Route path="/write-post">
              { token ? <WriteAPost /> : <LoginForm /> }
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <LoginForm />
            </Route>


          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
