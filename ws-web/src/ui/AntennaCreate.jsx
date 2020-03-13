
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import PointCreate from './PointCreate'
import { antenna as Storage } from '../Global'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      flexGrow: 1,
      textAlign: 'center',
    },
  },
  additional: {

  }
}));

export default function AntennaCreate() {
  const classes = useStyles();

  const [,setAntenna] = React.useState(Storage)
  Storage.onChange(setAntenna)

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <Container maxWidth="sm">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <PointCreate name={'Location:'} point={Storage.location}/>
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                error={!Storage.isValid()}
                label="Height" variant="outlined"
                value={Storage.height}
                onChange={(event)=>{Storage.setHeight(event.target.value)}}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField 
                error={!Storage.isValid()}
                label="Frequency" variant="outlined" 
                value={Storage.frequency}
                onChange={(event)=>{Storage.setFrequency(event.target.value)}}
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}