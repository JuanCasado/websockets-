
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import { storage as Storage, ws } from '../Global'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      flexGrow: 1,
      textAlign: 'center',
    },
  },
}));

export default function Configuration() {
  const classes = useStyles();

  const [, setConfiguration] = React.useState(ws)
  ws.onChange(setConfiguration)

  return (
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12}>
          <Paper>
            <Container maxWidth="sm">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField id="outlined-basic" label="Port" variant="outlined" 
                    onChange={(event)=>{ws.setPort(event.target.value)}}
                    value={ws.port}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="outlined-basic" label="URL" variant="outlined" 
                    onChange={(event)=>{ws.setUrl(event.target.value)}}
                    value={ws.url}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" onClick={()=>{ws.send(Storage.msg())}}>SEND</Button>
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </Grid>
      </Grid>
  );
}

