
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Configuration from './Configuration'
import ConfigList from './ConfigList';
import AntennaCreate from './AntennaCreate';
import AreaCreate from './AreaCreate';
import Output from './Output'

import { storage as Storage, antenna, area } from '../Global'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.paper} >
          <Typography variant="h1" gutterBottom>
            Propagation Map
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Configuration/>
        </Grid>
        <Grid item xs={12}>
          <Output/>
        </Grid>
        <Grid item xs={6}>
          <ConfigList name={'Antennas'} creator={<AntennaCreate/>} list={Storage.antennas} update={()=>{Storage.addAntenna(antenna)}}/>
        </Grid>
        <Grid item xs={6}>
          <ConfigList name={'Areas'} creator={<AreaCreate/>} list={Storage.areas} update={()=>{Storage.addArea(area)}}/>
        </Grid>
      </Grid>
    </div>
  );
}
