import { Box, Typography } from '@mui/material';
import React from 'react';
import Form from '../HomePage/Form.jsx';

const Track = () => {
  // const result = location.state.result;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100vw',
        alignItems: 'center',
        paddingTop: '9rem',
        textAlign: 'center',
      }}
    >
      <Typography
        variant='h3'
        className='tittle-w3ls text-center mb-3'
        sx={{ m: '0rem, 0, 0' }}
      >
        TRACK YOUR PARCEL
      </Typography>
      <Form />
    </Box>
  );
};

export default Track;
