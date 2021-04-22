import React, { Component } from 'react';// 7.2k (gzipped: 3k)
import MasterLayout from '../layouts/MasterLayout';
import HomePage from '../containers/HomePage/HomePage';
import AdminPage from '../containers/AdminPage/AdminPage';
import NotFoundPage from '../containers/NotFoundPage/NotFoundPage';
import {Switch,Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <MasterLayout>
        <Switch>
        <Route path="/" exact component={HomePage}></Route> 
          <Route path="/home" component={HomePage}></Route> 
          <Route path="/Admin" component={AdminPage}></Route> 
          {/* <Route component={NotFoundPage}></Route>  */}
          <Route render={()=><NotFoundPage title="Page NotFound!!"/>}></Route> 
        </Switch>   
      </MasterLayout>
      
    );
  }
}

export default App;
