import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../layouts/Layout';
const useStyles = makeStyles((theme) => ({
  heightLayout: {
    height:'100%',
  },
}));
const AdminPage =()=> {
  const classes = useStyles();
    return(
      // const dataJSX = '';
      <Layout className={classes.heightLayout} list={['Users', 'Admin']}>
        <p> Admin Component!</p>
      </Layout>
    );
  }
  
  export default AdminPage;