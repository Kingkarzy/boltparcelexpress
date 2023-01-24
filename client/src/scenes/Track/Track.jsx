import { Box, Typography } from '@mui/material';
import React from 'react';
import Form from 'scenes/HomePage/Form';

const Track = () => {
  // const result = location.state.result;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        width: '100vw',
        alignItems: 'center',
      }}
    >
      <Typography
        variant='h1'
        sx={{ m: '2rem, 0, 0' }}
      >
        TRACK YOUR PARCEL
      </Typography>
      <Form />
    </Box>
  );
};

export default Track;
