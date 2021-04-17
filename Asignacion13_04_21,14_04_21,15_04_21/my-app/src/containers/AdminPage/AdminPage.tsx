import { makeStyles } from '@material-ui/core/styles';
import Layout2 from '../../layouts/Layout2';
const useStyles = makeStyles((theme) => ({
  heightLayout: {
    height:'100%',
  },
}));
const AdminPage =()=> {
  const classes = useStyles();
    return(
      // const dataJSX = '';
      <Layout2 className={classes.heightLayout}>
        <p> Admin Component!</p>
      </Layout2>
    );
  }
  
  export default AdminPage;