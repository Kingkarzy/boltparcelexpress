import {
  Box,
  Card,
  List,
  ListItem,
  Typography,
  useTheme,
  Modal,
  Button,
  TextField,
  Divider,
  CardContent,
  Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
// import { styled } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75vw',
    height: '300px',
    backgroundColor: '#F5F5F5',
    display: 'flex',
    justifyContent: 'center',
    color: 'black',
    padding: theme.spacing(2),
  },
  packageNumber: {
    fontWeight: 'bold',
    // color: theme.palette.primary.main,
  },
  packageDetail: {
    fontWeight: 'bold',
    // color: theme.palette.secondary.main,
  },
  packageStatus: {
    fontWeight: '900 !important',
    color: 'green',
    fontSize: '1.2rem !important',
  },
  packageWeight: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'start',
    margin: '1rem,0',
    width: '75vw',
  },
  inputField: {
    width: '80%',
    marginRight: theme.spacing(2),
  },
  submitButton: {
    backgroundColor: '#28a745 !important',
    width: '6.5rem',
    fontSize: '1rem !important',
    color: 'white',
    '&:hover': {
      backgroundColor: '#CCAF2D !important',
    },
  },
  '& label.Mui-focused': {
    color: '#28a745',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#28a745',
    },
  },
}));

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#28a745',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#28a745',
    },
  },
});

const Form = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [packageId, setPackageId] = useState(
    localStorage.getItem('packageId') || ''
  );
  const [result, setResult] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('packageId', packageId);
    axios
      .get(`http://localhost:5001/users/${packageId}`)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => console.log(error));
    // navigate(`/track/${packageId}`, { state: { result } });
    handleOpen();
    setPackageId('');
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        justifyContent: 'center',
        mb: '5rem',
        // mt: '2rem',
        placeItems: 'center center',
      }}
    >
      <Typography
        variant='subtitle1'
        sx={{
          m: '3rem !important',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        NOTE: Please enter your tracking number in the box provided
        below
      </Typography>

      <form
        onSubmit={handleSubmit}
        className={classes.form}
      >
        <CssTextField
          id='track_no'
          label='Enter Tracking Number'
          value={packageId}
          onChange={(e) => setPackageId(e.target.value)}
          className={classes.inputField}
          variant='outlined'
        />
        <Button
          type='submit'
          className={classes.submitButton}
          variant='contained'
        >
          Track
        </Button>
      </form>
      <br />
      {/**********   PACKAGE DETAILS */}
      {Object.keys(result).length !== 0 && (
        <Card
          style={{
            width: '90%',
            height: '100%',
            // backgroundColor: 'rgba(255,250,245,0.5)',
            display: 'flex',
            // justifyContent: 'center',
            // color: 'black',
          }}
        >
          <List sx={{ alignItems: 'right' }}>
            {result.map((item, index) => (
              <ListItem
                key={index}
                sx={{ display: 'grid', gap: '0' }}
              >
                <CardContent>
                  <Grid
                    container
                    spacing={2}
                  >
                    <Grid
                      item
                      xs={12}
                    >
                      <Typography className={classes.packageNumber}>
                        Tracking Code: {item.packageId}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                    >
                      <Typography
                        sx={{ maxWidth: '100%', display: 'flex' }}
                      >
                        <Typography sx={{ fontWeight: 'bold' }}>
                          Package For: &nbsp;
                        </Typography>
                        {item.recieverFirstName}{' '}
                        {item.recieverLastName}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                    >
                      <Typography>Origin: {item.origin}</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                    >
                      <Typography>
                        Package: {item.packageName}
                      </Typography>
                    </Grid>

                    <Grid
                      item
                      xs={4}
                    >
                      <Typography>
                        Sender: {item.senderFirstName}{' '}
                        {item.senderLastName}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                    >
                      <Typography>
                        Destination: {item.destination}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                    >
                      <Typography>
                        Weight: {item.packageWeight}
                      </Typography>
                    </Grid>
                  </Grid>
                  <br />

                  <Box
                    sx={{
                      width: '100%',
                      placeItems: 'center center',
                      display: 'flex',
                    }}
                  >
                    <Typography sx={{ fontWeight: 'bold' }}>
                      Origin
                    </Typography>
                    <LinearProgress
                      variant='determinate'
                      value={item.currentStatus.length * 10}
                      color='success'
                      sx={{ width: '80%', margin: 'auto' }}
                    />
                    <Typography sx={{ fontWeight: 'bold' }}>
                      Destination
                    </Typography>
                  </Box>

                  {/* STATUS UPDATE   */}
                  {item.currentStatus.map((status, index) => (
                    <div key={index}>
                      <CardContent>
                        <Grid
                          container
                          spacing={1}
                        >
                          <Grid
                            item
                            xs={12}
                          >
                            <Divider />
                            <Typography
                              variant='h3'
                              className={classes.packageStatus}
                              mt={1}
                            >
                              {status}
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={4}
                          >
                            <Typography>
                              {item.currentLocation[index]}
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={4}
                          >
                            <Typography>
                              {item.date[index]}
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={4}
                          >
                            <Typography>{item.pieces}</Typography>
                          </Grid>
                          <br />
                        </Grid>
                      </CardContent>
                    </div>
                  ))}
                </CardContent>
              </ListItem>
            ))}
          </List>
        </Card>
        /* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 900,
              height: 500,
              backgroundColor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id='modal-modal-title'
              variant='h6'
              component='h2'
            >
              Text in a modal
            </Typography>
            <Typography
              id='modal-modal-description'
              sx={{ mt: 2 }}
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula.
            </Typography>
          </Box>
        </Modal> */
      )}
    </Box>
  );
};

export default Form;
