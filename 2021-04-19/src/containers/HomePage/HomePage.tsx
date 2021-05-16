
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../layouts/Layout';
// import {Switch,Route} from 'react-router-dom';
// import Inbox from '../../components/Inbox/Inbox'
const useStyles = makeStyles((theme) => ({
  heightLayout: {
    height:'100%',
  },
}));
const HomePage =()=> {
  const classes = useStyles();
    return(
      // const dataJSX = '';
      <Layout className={classes.heightLayout}>
        <p> Home page Component!</p>
        {/* <Switch>
          <Route path="/home/inbox" exact component={Inbox}></Route>  
          <Route path="/home/drafts" component={drafts}></Route> 
        </Switch>   */}
      </Layout>
    );
  }
  
  export default HomePage;