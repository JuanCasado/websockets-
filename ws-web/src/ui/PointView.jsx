
import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function PointCreate(props) {
  
  return (
    <Typography variant="body1" gutterBottom>
      {props.name} Latitude: {props.point.latitude}; Longitude: {props.point.longitude}
    </Typography>
  );
}
