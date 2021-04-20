import React, { Component } from 'react';
import { Theme, withStyles,StyleRules } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles=(theme: Theme):StyleRules=>({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      // height: theme.spacing(50),
      padding: theme.spacing(3),
    },
  },
});
interface IProps {
  classes:any;
}

class Inbox extends Component<IProps>{
  
  // constructor(){
  //   super();
  // }
  render(){
    //to fetch data from the backend
    console.log("index render")
    return (
      <div className={this.props.classes.root}>
        <Paper elevation={3}>
        <Typography variant="h5" gutterBottom>
          Inbox Content
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        </Paper>
      </div>
    );
  } 
  componentDidMount(){
    console.log('componentDidMount');
  }
}
export default  withStyles(useStyles)(Inbox);




// import React from 'react';
// import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       '& > *': {
//         margin: theme.spacing(1),
//         width: theme.spacing(100),
//         // height: theme.spacing(50),
//         padding: theme.spacing(3),
//       },
//     },
//   }),
// );

// const Inbox=()=> {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <Paper elevation={3}>
//       <Typography variant="h5" gutterBottom>
//         Inbox Content
//       </Typography>
//       <Typography variant="body1" gutterBottom>
//         body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
//         unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
//         dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
//       </Typography>
//       <Typography variant="body2" gutterBottom>
//         body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
//         unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
//         dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
//       </Typography>
//       </Paper>
//     </div>
//   );
// }
// export default  Inbox;