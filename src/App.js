import React, { useState,useEffect } from 'react';
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

import api from './lib/api'

function App() {
  useEffect( () => {
    console.log(api.auth()) 
    let token = api.auth()
    /*localStorage.setItem("auth", token)
    localStorage.setItem("isAuthenticated", true)*/
  },[])

  let isAuthenticated = localStorage.getItem("isAuthenticated")
  console.log( isAuthenticated )
  return (
    <div className="App">
      <Router>
        <MainNav/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {
            isAuthenticated ? (
              <Container fluid>
                        <Switch>
                          <Route path="/posts">
                            <PostPage/>
                          </Route>
                          <Route path="/post-detail">
                            <PostDetail/>
                          </Route>
                          <Route path="/write-post">
                            <WriteAPost/>
                          </Route>
                          <Route exact path="/">
                            <Home/>
                          </Route>
                        </Switch>
                      </Container>
            ) : (
              <>
              <p>Debes iniciar sesión</p>
              <button type="button" onClick={() => {
                localStorage.setItem("isAuthenticated", true )
                window.location.reload();
              }}>Iniciar sesión</button>
              </>
            )
          
        }


      </Router>
    </div>
  );
}

export default App;
