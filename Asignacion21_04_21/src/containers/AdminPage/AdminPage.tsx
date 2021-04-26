
import { Component } from 'react';
import Layout from '../../layouts/Layout';
class AdminPage extends Component {
  list= [{text:'Users',path:'/admin/users'}
  , {text:'Roles',path:'/admin/roles'}];
    render(){
      return(
        <Layout  list={this.list}>
          <p> Admin Component!</p>
        </Layout>
      );
    }
  }
  
  export default AdminPage;