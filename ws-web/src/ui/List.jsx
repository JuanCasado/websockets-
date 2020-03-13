
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      flexGrow: 1,
      textAlign: 'center',
    },
    padding: 20,
  },
}));

export default function ConfigList(props) {
  const classes = useStyles()
  const list = props.list? 
    props.list.map((element, index)=>(
      <Grid item sm ={12} md={((props.list.length%2)&&(props.list.length-1)===index)?12:6} key={index}>
        <Paper>
          <Grid container spacing={1}>
            <Grid item sm={12} md={6}>
              {element.view()}
            </Grid>
            <Grid item sm={12} md={6}>
              <Button variant="outlined" onClick={()=>{element.delete()}}>DELETE</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    )):null
  return (
    <Grid container spacing={2} className={classes.root}>
      {list}
    </Grid>
  );
}