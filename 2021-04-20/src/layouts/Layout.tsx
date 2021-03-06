import React from 'react';
//import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
//  import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
//import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
//import MenuIcon from '@material-ui/icons/Menu';
//import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withRouter, RouteComponentProps} from 'react-router-dom';

const drawerWidth = 240;
////********-------ESTA ES LA FORMA APP BAR, QUEREMOS QUE LA INFORMACION APAREZCA DENTRO DE ESTE CONTENEDOR -------*********

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  //Como no los usamos los quitamos 
  // appBar: {
  //   [theme.breakpoints.up('sm')]: {
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     marginLeft: drawerWidth,
  //   },
  // },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  //   [theme.breakpoints.up('sm')]: {
  //     display: 'none',
  //   },
  // },
  // necessary for content to be below app bar
  //toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    height: 400,
    position:'static',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

interface Props extends RouteComponentProps {
    // Aqui van los datos de props, title , items etc 
    //items: {}[];
    // title: string;
    // data: any;
    children:any;
    className:any;
    list:string[];
    window?: () => Window;
}

const Layout = (props: Props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (event: any,index: number,) => {
    setSelectedIndex(index);
    switch(index){
      case 0:
        props.history.push ({pathname:'/home/inbox'});
        return;
      case 1:
        props.history.push ({pathname:'/home/starred'});
        return;
    }
  };
// ORIGINAL
  const drawer = (
    <div>
      <List>
        {props.list.map((text, index) => (
          <ListItem button key={text} selected={selectedIndex===index} onClick={(event) => handleListItemClick(event,index)}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  //  {/* <ListItem button key={'Inbox'} selected={selectedIndex===0} onClick={(event) => handleListItemClick(event, 0)}>
  //           {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
  //           <ListItemText primary={'Inbox'} />
  //     </ListItem>
  //     <ListItem button key={'Starred'} selected={selectedIndex===1} onClick={(event) => handleListItemClick(event, 1)}>
  //           {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
  //           <ListItemText primary={'Starred'} />
  //     </ListItem> */}

  // const drawer = (
  //   <div>
  //     {/* <div className={classes.toolbar} /> */}
  //     {/* <Divider /> */}
  //     <List>
  //       <ListItem button >
  //         <ListItemIcon><InboxIcon /> </ListItemIcon>
  //         <ListItemText primary="inbox" />
  //       </ListItem>
  //       <ListItem button>
  //         <ListItemIcon><MailIcon /> </ListItemIcon>
  //         <ListItemText primary="Drafts" />
  //       </ListItem>
  //     </List>
  //   </div>
  // );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
           <Typography variant="h6" noWrap>
            Hola!
          </Typography>
        </Toolbar>
      </AppBar> */}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        {props.children} {/* AQUI SE VAN A INYECTAR LOS DATOS del home page*/}
      </main>
    </div>
  );
}

export default withRouter(Layout);
