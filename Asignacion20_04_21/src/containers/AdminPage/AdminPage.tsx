import { Component } from 'react';
import Layout from '../../layouts/Layout';

class AdminPage extends Component{
    render(){
      return(
        // const dataJSX = '';
        <Layout  list={['Users', 'Admin']}>
          <p> Admin Component!</p>
        </Layout>
      );
    }
  }
  
  export default AdminPage;