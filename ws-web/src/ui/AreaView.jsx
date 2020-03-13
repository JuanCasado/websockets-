
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PointView from './PointView'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      flexGrow: 1,
      textAlign: 'center',
    },
  },
}));

export default function PointCreate(props) {
  const classes = useStyles();
  
  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <PointView name={'Top Left:'} point={props.area.topLeft}/>
        <PointView name={'Bottom Right:'} point={props.area.bottomRight}/>
      </Grid>
    </Grid>
  );
}