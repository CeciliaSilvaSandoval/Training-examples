import React, { Component } from 'react';// 7.2k (gzipped: 3k)
import MasterLayout from '../layouts/MasterLayout';
import HomePage from '../containers/HomePage/HomePage';
import AdminPage from '../containers/AdminPage/AdminPage';
import {Switch,Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <MasterLayout>
        <Switch>
          <Route path="/" exact component={HomePage}></Route> 
          <Route path="/Admin" component={AdminPage}></Route> 
        </Switch>     {/*  <HomePage/>  Se convierte en props.children  */}
      </MasterLayout>
      
    );
  }
}

export default App;
