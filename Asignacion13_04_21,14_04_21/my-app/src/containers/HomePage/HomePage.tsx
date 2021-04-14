import React, { Component } from 'react'; 

import Layout from '../../layouts/Layout';

class HomePage extends Component {

    render() {
        const dataJSX = <p> Welcome! </p>
      return (
        <Layout title = "Home Pages" data ={dataJSX}/>
      );
    }
  }
  
  export default HomePage;