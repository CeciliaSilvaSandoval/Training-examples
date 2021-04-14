import React, { Component } from 'react';// 7.2k (gzipped: 3k)

import MasterLayout from '../layouts/MasterLayout';
import HomePage from '../containers/HomePage/HomePage';

class App extends Component {

  render() {
    return (
      <MasterLayout>
        <HomePage/>       {/*  <HomePage/>  Se convierte en props.children  */}
      </MasterLayout>
      
    );
  }
}

export default App;
