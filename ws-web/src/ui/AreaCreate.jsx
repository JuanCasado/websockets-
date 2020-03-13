
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import PointCreate from './PointCreate'
import { area as Storage } from '../Global'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      flexGrow: 1,
      textAlign: 'center',
    },
  },
}));

export default function AreaCreate() {
  const classes = useStyles();

  const [,setAntenna] = React.useState(Storage)
  Storage.onChange(setAntenna)

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <Container maxWidth="sm">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <PointCreate name={'Top Left:'} point={Storage.topLeft}/>
            </Grid>
            <Grid item xs={12}>
              <PointCreate name={'Bottom Right:'} point={Storage.bottomRight}/>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}