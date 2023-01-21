import {
  Box,
  Typography,
  Card,
  FormControl,
  TextField,
  Paper,
  InputBase,
  Divider,
  Button,
  IconButton,
  Link,
} from '@mui/material';

import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'mui-image';

/* root: ({ bgColor = 'rgba(0, 0, 0, 0.08)', bgPosition = 'center' }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundColor: bgColor,
    backgroundPosition: bgPosition,
  }), */

const HomePage = () => {
  const styles = {
    root: ({ bgColor = 'rgba(0, 0, 0, 0.08)', bgPosition = 'center' }) => ({
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: 0,
      backgroundColor: bgColor,
      backgroundPosition: bgPosition,
    }),
  };

  return (
    <Box sx={{ margin: '1.5rem' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          position={'relative'}
          width={'100%'}
          height={'100%'}
          p={2}
          sx={{ width: '45rem', display: 'inline-block', textAlign: 'center' }}
        >
          {/* <CardMedia
            component='img' // add this line to use <img />
            height='140'
            image='../../assets/g17.JPG'
            sx={{
              position: 'absolute',
              width: '100%',
              height: '50%',
              top: 0,
              left: 0,
              zIndex: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.08)',
              backgroundPosition: 'center',
            }}
          /> */}
          <Typography
            variant='h4'
            sx={{
              margin: '0.5rem',
              display: 'flex',
              justifyContent: 'center',
              fontWeight: '800',
            }}
          >
            Track Your Package
          </Typography>

          <Paper
            component='form'
            sx={{
              p: '2px 4px',
              display: 'flex',
              justifyContent: 'center',
              width: '30rem',
              margin: '1rem auto',
              boxShadow: '1px',
            }}
          >
            {/* <TextField
              id='filled-search'
              // fullWidth
              label='Search field'
              type='search'
              helperText={
                'NOTE: Please enter your tracking number in the box provided'
              }
              sx={{ width: '30rem' }}
            /> */}
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                margin: 'auto',
              }}
              placeholder='Enter Tracking Number'
              inputProps={{ 'aria-label': 'enter tracking number' }}
            />
            <Divider
              sx={{ height: 28, m: 0.5 }}
              orientation='vertical'
            />
            <Button>TRACK</Button>
          </Paper>
        </Card>
      </Box>
      {/* END TRACKING */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          '@media (max-width:1024px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridColumnGap: '0.1rem',
          },
          '@media (max-width:767px)': {
            gridTemplateColumns: 'repeat(1, 1fr)',
          },
        }}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 500,
            margin: '20px auto',
            borderRadius: '10px',
            width: '340px',
          }}
        >
          <IconButton>
            <LanguageIcon />
          </IconButton>
          <Typography variant='h4'>Express Shipping with UPC</Typography>
          <Typography variant='subtitle1'>
            Get expert shipping advice and customs support to prepare and manage
            your express shipments!
          </Typography>
        </Card>

        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 500,
            margin: '20px auto',
            borderRadius: '10px',
            width: '340px',
          }}
        >
          <IconButton>
            <PersonIcon />
          </IconButton>
          <Typography variant='h4'>Can We Help?</Typography>
          <Typography variant='subtitle1'>
            Having trouble arranging a shipment online or tracking a package?
            Our UPC Express Customer Service agents are here to help you!
          </Typography>
          <Link
            href='mailto:info@upcxpress.com'
            underline='none'
          >
            UPC Express customer service
          </Link>
        </Card>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 500,
            margin: '20px auto',
            borderRadius: '10px',
            width: '340px',
          }}
        >
          <Typography variant='h4'>Contact</Typography>
          <Typography variant='subtitle1'>Email Customer Service</Typography>
          <FormControl>
            {/* <InputLabel>Email Address</InputLabel> */}
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                margin: 'auto',
                backgroundColor: 'grey',
              }}
              placeholder='Email Address'
              inputProps={{ 'aria-label': 'email address' }}
            />
            <TextField
              id='outlined-multiline-flexible'
              // label='Multiline'
              multiline
              maxRows={4}
              placeholder='Message'
            />
            <Button
              gap='0.25rem'
              // disabled={!post}
              // onClick={handlePost}
              sx={{
                // color: palette.background.alt,
                // backgroundColor: palette.primary.main,
                borderRadius: '0.25rem',
                '&:hover': {
                  cursor: 'pointer',
                  borderStyle: 'solid',
                  // borderColor: palette.primary.main,
                  // color: palette.primary.main,
                  // backgroundColor: palette.background.alt,
                },
              }}
            >
              POST
            </Button>
          </FormControl>
        </Card>
      </Box>

      {/*  */}
      <Box sx={{ display: 'grid', gridTemplateColumns: '50% 1fr' }}>
        <Box>
          <Typography
            variant='h4'
            sx={{ fontWeight: '800' }}
          >
            Specialty Moves? We’re a company up to the challenge!
          </Typography>
          <Typography variant='subtitle1'>
            Get expert shipping/delivery advice and customs support to prepare
            and manage your express shipments! As an expert in international
            shipping and freight delivery, United Parcel Courier is a worldwide
            delivery express that understands the needs of small and medium
            businesses. United Parcel Courier is the largest
            consumer-to-consumer package transportation company from the United
            States to Europe. With over 60 years of experience handing ocean and
            air shipments, Sky Delivery and our operating companies have earned
            our reputation as a consistent, trusted, carrier that is relied upon
            to cost effectively handle shipments to 43 countries.
          </Typography>
          <Typography
            variant='subtitle1'
            mt='0.5rem'
          >
            United Parcel Courier – you’re shipping with specialists in
            international shipping and courier delivery services! With our wide
            range of express parcel and package services, along with shipping
            and tracking solutions to fit your needs – learn how United Parcel
            Courier can deliver!
          </Typography>
        </Box>
        <Image src='images/2.png' />
      </Box>

      {/* <!-- testimonials --> */}
      <Box sx={{ display: 'block' }}>
        <Typography
          variant='h2'
          sx={{ display: 'flex', justifyContent: 'center', fontWeight: '1000' }}
        >
          Express Delivery Services & International Shipping
        </Typography>
        <Typography
          variant='subtitle1'
          sx={{
            display: 'flex',
            textAlign: 'center',
          }}
        >
          When you ship with UPC Express – you’re shipping with specialists in
          international shipping and courier delivery services! With our wide
          range of express parcel and package services, along with shipping and
          tracking solutions to fit your needs – learn how UPC Express can
          deliver!
        </Typography>
      </Box>

      <Divider />

      <Box sx={{ display: 'block' }}>
        <Typography
          variant='h2'
          sx={{ display: 'flex', justifyContent: 'center', fontWeight: '1000' }}
        >
          How UPC is responding to the Coronavirus
        </Typography>
        <Typography
          variant='subtitle1'
          sx={{
            display: 'flex',
            textAlign: 'center',
            margin: 'auto',
            maxWidth: '750px',
          }}
        >
          UPC continues to deliver worldwide. In the U.S., UPC is designated
          among the government’s critical infrastructure and, therefore,
          operations continue as normal. We also continue to deliver to
          locations around the world, where permitted. As always, our highest
          priority is to help ensure the health and safety of our employees,
          customers, and suppliers while meeting our service commitments.
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            '@media (max-width:1024px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridColumnGap: '0.1rem',
            },
            '@media (max-width:767px)': {
              gridTemplateColumns: 'repeat(1, 1fr)',
            },
          }}
        >
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: 500,
              margin: '20px auto',
              borderRadius: '10px',
              width: '340px',
            }}
          >
            <Divider />
            <img
              src='images/g1.jpg'
              className='img-fluid'
              alt='Card'
            />
            <div className='card-body w3ls-card'>
              <h5 className='card-title'>
                Small and Medium Business Solutions
              </h5>
              <p className='card-text mb-3 '>
                As an expert in international shipping, UPC Express understands
                the needs of small and medium businesses.
              </p>
            </div>
          </Card>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: 500,
              margin: '20px auto',
              borderRadius: '10px',
              width: '340px',
            }}
          >
            <img
              src='images/g2.jpg'
              className='img-fluid'
              alt='Card'
            />
            <Divider />
            <div className='card-body w3ls-card'>
              <h5 className='card-title'>
                How we’re responding to Coronavirus
              </h5>
              <p className='card-text mb-3 '>
                In the wake of the Coronavirus virus, our highest priority is to
                do our part the help ensure the health and safety of our
                employees, customers, and suppliers while meeting our service
                commitments.
              </p>
            </div>
          </Card>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: 500,
              margin: '20px auto',
              borderRadius: '10px',
              width: '340px',
            }}
          >
            <img
              src='images/g3.jpg'
              className='img-fluid'
              alt='Card'
            />
            <Divider />
            <div className='card-body w3ls-card'>
              <h5 className='card-title'>UPC Integration Solutions</h5>
              <p className='card-text mb-3 '>
                Whether integrating our shipping functionalities into your
                applications or websites, we can help you streamline processes
                and gain efficiencies.
              </p>
            </div>
          </Card>
        </Box>
      </Box>
      <Box className='stats py-md-5'>
        <div className='container py-4 mt-2'>
          <h3 className='tittle-w3ls text-center mb-3'>Our Stats</h3>
          <p className='tit text-center mx-auto'>
            United States air hubs: Dallas, TX.; Louisville, KY. (Worldport);
            Ontario, CA.; Philadelphia, PA.; Rockford, Il. International air
            hubs: Cologne/Bonn, Germany; Hamilton, Ontario, Canada; Hong Kong
            SAR, China; Shanghai, China; Shenzhen, China
          </p>
          <div className='row inner_w3l_agile_grids-1 pt-4 mt-md-4'>
            <div className='col-sm-4 w3layouts_stats_left w3_counter_grid'>
              <p className='counter'>1,546</p>
              <h3>Satisfied Clients</h3>
              <h6>Pure satisfaction</h6>
            </div>
            <div className='col-sm-4 w3layouts_stats_left w3_counter_grid1'>
              <p className='counter'>14,345</p>
              <h3>Successful Shippings</h3>
              <h6>Shipping</h6>
            </div>
            <div className='col-sm-4 w3layouts_stats_left w3_counter_grid2'>
              <p className='counter'>563</p>
              <h3>Branches Worldwide</h3>
              <h6>Highest level of credibility</h6>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default HomePage;
