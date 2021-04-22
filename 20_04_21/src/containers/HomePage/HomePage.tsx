
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../layouts/Layout';
import {Switch,Route} from 'react-router-dom';
import Inbox from '../../components/Inbox/Inbox'
const useStyles = makeStyles((theme) => ({
  heightLayout: {
    height:'100%',
  },
}));
const HomePage =(props:any)=> {
  const classes = useStyles();
  console.log('HomePage: ', props);
    return(
      // const dataJSX = '';
      <Layout className={classes.heightLayout} list={['Inbox', 'Starred','OtherFile']}>
        <p> Home page Component!</p>
        <Switch>
          <Route path="/" exact render={()=><h3 >Welcome to Home page!!!</h3>}></Route> 
          {/* <Route path="/home/inbox" exact render={()=><h3 >Inbox component</h3>}></Route>  */}
          <Route path="/home/starred" exact render={()=><h3 >starred component</h3>}></Route> 
          <Route path="/home/inbox" exact component={Inbox}></Route>  
          {/* <Route path="/home/drafts" component={drafts}></Route>  */}
        </Switch>  
      </Layout>
    );
  }
  export default HomePage;