import { Box } from '@mui/material';
import React from 'react';

const AdminPage = () => {
  return (
    <Box>
      <div
        style={{ padding: '20px', backgroundColor: 'lightslategrey' }}
      >
        <div>
          <h1 className='text-center'> Welcome My Admin</h1>
        </div>
        {/* ADD A NEW PACKAGE */}

        <form
          action='adminAction.php'
          method='post'
          className=''
          style={{ width: '50%' }}
        >
          <button
            type='submit'
            className='btn btn-success btn-lg'
            id='submit'
            name='submit'
            value='Add Package'
          ></button>
        </form>
        <br />
      </div>
    </Box>
  );
};

export default AdminPage;
