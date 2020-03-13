

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

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
        <Container maxWidth="sm">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <PointView name={'Location:'} point={props.antenna.location}/>
              <Typography variant="body1" gutterBottom>
                Height: {props.antenna.height} Frequency: {props.antenna.frequency}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}