
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withRouter, RouteComponentProps} from 'react-router-dom';


// function addProps (component: any){
//   //Adding extra props to injected component
//   return component;
// }
// const modCom = addProps( MyAppBar );
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);
interface Props extends RouteComponentProps{

}

const MyAppBar = (props:Props)=> {
    const classes = useStyles();
    console.log('MyAppBar : ',props);

    const homeButtonClickHandler=()=>{
      console.log('My AppBar homeButtonClickHandler')
      props.history.push({pathname: '/'})
    };
    const adminButtonClickHandler=()=>{
      console.log('My AppBar adminButtonClickHandler')
      props.history.push({pathname: '/Admin'})
    };
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              AppBar Component
            </Typography>
            <Button color="inherit" onClick={homeButtonClickHandler}>Home</Button>
            <Button color="inherit" onClick={adminButtonClickHandler}>Admin</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
}
export default withRouter(MyAppBar);//Ads some extra props to the component , and give it to us 