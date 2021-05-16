
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../layouts/Layout';
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
      </Layout>
    );
  }
  
  export default HomePage;