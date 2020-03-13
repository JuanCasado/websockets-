
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { response } from '../Global'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      flexGrow: 1,
      textAlign: 'center',
    },
  },
  paper: {
    padding: theme.spacing(2),
  }
}));

export default function PointCreate() {
  const classes = useStyles();
  
  const [, setResponse] = React.useState(response)
  response.onChange(setResponse)

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        {response.data? 
          <Paper className={classes.paper}>
            <Typography variant="body1" gutterBottom>
              {JSON.stringify(response.data, null, 2)}
            </Typography>
          </Paper>
        : null}
      </Grid>
    </Grid>
  );
}