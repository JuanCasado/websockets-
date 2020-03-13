
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import List from './List'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      flexGrow: 1,
      textAlign: 'center',
      margin: theme.spacing(1),
    },
  },
}));

export default function ConfigList(props) {
  const classes = useStyles()

  const [list, setList] = React.useState(props.list)
  props.list.onChange(setList)

  return (
    <Paper  className={classes.root}>
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            {props.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                {props.creator}
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" onClick={props.update}>CREATE</Button>
              </Grid>
              <Grid item xs={12} >
                <List list={list.elements}/>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}