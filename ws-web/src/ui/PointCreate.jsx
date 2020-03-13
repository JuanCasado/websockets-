
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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
          <Grid container spacing={1}>
            <Grid item xs={12}>
              {props.name}
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField id="outlined-basic" label="Latitude" variant="outlined"
                error={!props.point.isValid()}
                value={props.point.latitude}
                onChange={(event)=>{props.point.setLatitude(event.target.value)}}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField id="outlined-basic" label="Longitude" variant="outlined"
                error={!props.point.isValid()}
                value={props.point.longitude}
                onChange={(event)=>{props.point.setLongitude(event.target.value)}}
              />
            </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}
