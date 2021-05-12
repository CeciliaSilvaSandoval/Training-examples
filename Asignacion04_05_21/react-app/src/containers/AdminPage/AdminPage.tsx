import { Component } from 'react';
import Layout from '../../UI/layouts/Layout';
import {Switch,Route} from 'react-router-dom';
import Users from '../../components/Users/users';
class AdminPage extends Component {
  list= [{text:'Users',path:'/admin/users'}
  , {text:'Roles',path:'/admin/roles'}];
    render(){
      return(
        <Layout  list={this.list}>
          <p> Admin Component!</p>
          <Switch>
            <Route path="/admin/users" exact component={Users}></Route> 
            <Route path="/admin/roles" exact render={()=><h3 >roles component</h3>}></Route> 
            {/* <Route path="/home/drafts" component={drafts}></Route>  */}
          </Switch>  
        </Layout>
      );
    }
  }
  
  export default AdminPage;