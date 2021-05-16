import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        padding: theme.spacing(3),
      },
    },
  }),
);


const MyPaper =(props:any) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <Paper elevation={3}>
        <Typography variant="h5" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
        {props.body1}
        </Typography>
        <Button variant="contained" color="primary" onClick={props.clicked}>Details</Button>
        </Paper>
    </div>
  );
}
export default  MyPaper;
