import React from 'react';
import { Typography, TextField } from '@mui/material';
const AddPackage = () => {
  return (
    <div>
      {' '}
      <form
        className=''
        style={{
          width: '50%',
          display: 'grid',
          flexDirection: 'repeat(2, 1fr)',
        }}
      >
        <Typography>
          PackageId: <TextField fullWidth />
        </Typography>
        <Typography>
          packageName: <TextField fullWidth />
        </Typography>
        <Typography>
          packageType: <TextField fullWidth />
        </Typography>
        <Typography>
          packageWeight: <TextField fullWidth />
        </Typography>
        <Typography>
          senderFirstName: <TextField fullWidth />
        </Typography>
        <Typography>
          senderLastName: <TextField fullWidth />
        </Typography>
        <Typography>
          recieverFirstName: <TextField fullWidth />
        </Typography>
        <Typography>
          recieverLastName: <TextField fullWidth />
        </Typography>
        <Typography>
          recieverEmail: <TextField fullWidth />
        </Typography>
        <Typography>
          currentStatus: <TextField fullWidth />
        </Typography>
        <Typography>
          currentLocation: <TextField fullWidth />
        </Typography>
        <Typography>
          time: <TextField fullWidth />
        </Typography>
        <Typography>
          date: <TextField fullWidth />
        </Typography>
        <Typography>
          pieces: <TextField fullWidth />
        </Typography>
        <Typography>
          origin: <TextField fullWidth />
        </Typography>
        <Typography>
          destination: <TextField fullWidth />
        </Typography>
        <Typography>
          startDate: <TextField fullWidth />
        </Typography>
        <Typography>
          locationName: <TextField fullWidth />
        </Typography>
        <button
          type='submit'
          className='btn btn-success btn-lg'
          id='submit'
          name='submit'
          value='Add'
        >
          Add Package
        </button>
      </form>
    </div>
  );
};

export default AddPackage;
