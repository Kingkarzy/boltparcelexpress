import {
  Box,
  Card,
  List,
  ListItem,
  Typography,
  useTheme,
  Button,
  TextField,
  Divider,
  CardContent,
  Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { useState } from 'react';

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
}));

const EditPackage = () => {
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
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        justifyContent: 'center',
        mb: '5rem',
        mt: '2rem',
      }}
    >
      <Typography
        variant='subtitle1'
        sx={{
          m: '1rem !important',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        Enter your tracking number in the box provided below
      </Typography>
      <form
        onSubmit={handleSubmit}
        className={classes.form}
      >
        <TextField
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
            width: '75vw',
            height: '300px',
            // backgroundColor: 'rgba(255,250,245,0.5)',
            display: 'flex',
            // justifyContent: 'center',
            color: 'black',
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
                      xs={6}
                    >
                      <Typography
                        sx={{ maxWidth: '100%', display: 'flex' }}
                      >
                        <Typography sx={{ fontWeight: 'bold' }}>
                          Package For:{' '}
                        </Typography>
                        {item.recieverFirstName}
                        {item.recieverLastName}
                      </Typography>
                    </Grid>
                    <Divider />
                    <Grid
                      item
                      xs={12}
                    >
                      <Typography
                        variant='h2'
                        className={classes.packageStatus}
                      >
                        {item.currentStatus}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                    >
                      <Typography>{item.origin}</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                    >
                      <Typography>{item.currentLocation}</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                    >
                      <Typography>{item.destination}</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                    >
                      <Typography>
                        {item.time} {item.date}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                    >
                      <Typography>
                        Sender: {item.senderFirstName}{' '}
                        {item.senderLastName}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </ListItem>
            ))}
          </List>
        </Card>
      )}
    </Box>
  );
};

export default EditPackage;
