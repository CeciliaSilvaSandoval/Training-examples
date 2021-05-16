

import Layout from '../../layouts/Layout';
import {Switch,Route} from 'react-router-dom';
import Inbox from '../../components/Inbox/Inbox'
import { Component } from 'react';
import Starred from '../../components/Starred/Starred';

class HomePage extends Component {
  list= [{text:'Inbox',path:'/home/inbox'}
    , {text:'Starred',path:'/home/starred'}
    ,{text:'Outbox',path:'/home/outbox'}];
    render(){
      return(
        <Layout  list={this.list}>
          <p> Home page Component!</p>
          <Switch>
            <Route path="/" exact render={()=><h3 >Welcome to Home page!!!</h3>}></Route> 
            {/* <Route path="/home/inbox" exact render={()=><h3 >Inbox component</h3>}></Route>  */}
            <Route path="/home/starred" exact component={Starred}></Route> 
            <Route path="/home/outbox" exact render={()=><h3 >outbox component</h3>}></Route> 
            <Route path="/home/inbox" exact component={Inbox}></Route>  
            {/* <Route path="/home/drafts" component={drafts}></Route>  */}
          </Switch>  
        </Layout>
      );
    }
  }
  export default HomePage;