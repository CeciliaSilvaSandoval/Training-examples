//import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//********-------ESTA ES LA FORMA BASE DE NUESTRO PROYECTO -------*********
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));
// Cambio este 
const MasterLayout = ( props: any ) => {
  const classes = useStyles();
//Forma del layout : header, footer y body
  return (
    <div className={classes.root}>
      <Grid container spacing={3}  >
      <Grid item xs={12} >     {/* Grid de 12 --- Header*/}
          <p>Home | About | Contact</p>
        </Grid>
        <Grid item xs={12}>{/* Grid de 12 --- Body*/}
          {props.children}
        </Grid>
        <Grid item xs={12}>{/* Grid de 12 --- Footer*/}
          Copyright 2021
        </Grid>
      </Grid>
    </div>
  );
}

//y lo exporto aqui 
export default MasterLayout;