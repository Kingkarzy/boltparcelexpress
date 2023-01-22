<<<<<<< Updated upstream
import Navbar from 'components/NavBar/NavBar';
import React from 'react';
=======
import {
  Box,
  Typography,
  Card,
  CardMedia,
  FormControl,
  TextField,
  Paper,
  InputBase,
  Divider,
  Button,
  IconButton,
  Link,
  InputLabel,
} from '@mui/material';

import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'mui-image';
import Form from './Form.jsx';
/** kama  */


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
>>>>>>> Stashed changes

const HomePage = () => {
  return (
<<<<<<< Updated upstream
    <div>
      <>
        <Navbar />
        <section className='banner-silder'>
          <div className='banner-top banner-top1'>
            <div className='container'>
              <div className='banner-info info2'>
                <h3>
                  <b className='text-success'> UPC - EXPRESS </b>
                </h3>
                <h2>Track Package</h2>
                <p>
                  NOTE: Please enter your tracking number in the box provided
                  below
                </p>
              </div>
=======
    <Box sx={{ margin: '1.5rem' }}>
      <Form />
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
>>>>>>> Stashed changes
            </div>
          </div>
        </section>

        {/* TRACKING */}
        <br />
        <br />
        <br />
        <section className='banner-btm'>
          <div className='container'>
            <div className='row banner-bottom-main'>
              <div className='col-md-4 banner-grid2'>
                <div className='banner-subg1'>
                  <span
                    className='fa fa-globe'
                    aria-hidden='true'
                  ></span>
                  <h3 className='mt-3'>Express Shipping with UPC</h3>
                  <p className='mt-3 mb-3'>
                    Get expert shipping advice and customs support to prepare
                    and manage your express shipments!
                  </p>
                </div>
              </div>
              <div className='col-md-4 banner-grid2'>
                <div className='banner-subg1'>
                  <span
                    className='fa fa-user'
                    aria-hidden='true'
                  ></span>
                  <h3 className='mt-3'>Can We Help?</h3>
                  <p className='mt-3 mb-3'>
                    Having trouble arranging a shipment online or tracking a
                    package? Our UPC Express Customer Service agents are here to
                    help you!
                  </p>
                  <div>
                    <a href='mailto:info@upcxpress.com'>
                      UPC Express customer service
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-4 banner-btmg'>
                <div className='banner-btmg1'>
                  <div className='form-text'>
                    <h3 className='text-center'>Contact </h3>
                    <p className='text-center'>Email Customer Service</p>
                  </div>
                  <form
                    action='#'
                    method='post'
                    className='banner_form'
                  >
                    <div className='sec-left'>
                      <label className='contact-form-text'>Email Address</label>
                      <input
                        placeholder='Email Address '
                        name='email'
                        type='email'
                        required=''
                      />
                    </div>
                    <div className='sec-right'>
                      <label className='contact-form-text'>Message</label>
                      <textarea
                        className='form-control'
                        name='message'
                        id='exampleFormControlTextarea1'
                        rows='3'
                        placeholder='Message'
                      ></textarea>
                    </div>
                    <input
                      type='submit'
                      value='Send Message'
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='banner_bottom'>
          <div className='container mt-2'>
            <div className='inner_sec_info_wthree_agile py-5'>
              <div className='row help_full py-sm-4'>
                <div className='col-md-6 pt-lg-5 mt-lg-5 banner_bottom_left'>
                  <h4>Specialtymoves? We’re a company up to the challenge!</h4>
                  <p className='mb-3'>
                    Get expert shipping/delivery advice and customs support to
                    prepare and manage your express shipments! As an expert in
                    international shipping and freight delivery, United Parcel
                    Courier is a worldwide delivery express that understands the
                    needs of small and medium businesses. United Parcel Courier
                    is the largest consumer-to-consumer package transportation
                    company from the United States to Europe. With over 60 years
                    of experience handing ocean and air shipments, Sky Delivery
                    and our operating companies have earned our reputation as a
                    consistent, trusted, carrier that is relied upon to cost
                    effectively handle shipments to 43 countries.
                  </p>
                  <p className='mb-3'>
                    United Parcel Courier – you’re shipping with specialists in
                    international shipping and courier delivery services! With
                    our wide range of express parcel and package services, along
                    with shipping and tracking solutions to fit your needs –
                    learn how United Parcel Courier can deliver!
                  </p>
                </div>

                <div className='col-md-6 banner_bottom_grid help'>
                  <img
                    src='images/2.png'
                    alt=' '
                    className='img-fluid'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- testimonials --> */}
        <section className='testimonials py-md-5'>
          <div className='container py-4 mt-2'>
            <h3 className='tittle-w3ls text-center mb-3 text-white'>
              Express Delivery Services & International Shipping
            </h3>
            <p className='tit text-center mx-auto text-white'>
              When you ship with UPC Express – you’re shipping with specialists
              in international shipping and courier delivery services! With our
              wide range of express parcel and package services, along with
              shipping and tracking solutions to fit your needs – learn how UPC
              Express can deliver!
            </p>
          </div>
        </section>
        <section className='wthree-row w3-about py-md-5'>
          <div className='container py-4 mt-2'>
            <h3 className='tittle-w3ls text-center mb-3'>
              How UPC is responding to the Coronavirus
            </h3>
            <p className='tit text-center mx-auto'>
              UPC continues to deliver worldwide. In the U.S., UPC is designated
              among the government’s critical infrastructure and, therefore,
              operations continue as normal. We also continue to deliver to
              locations around the world, where permitted. As always, our
              highest priority is to help ensure the health and safety of our
              employees, customers, and suppliers while meeting our service
              commitments.
            </p>
            <div className='card-deck pt-4 mt-md-4'>
              <div className='card'>
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
                    As an expert in international shipping, UPC Express
                    understands the needs of small and medium businesses.
                  </p>
                </div>
              </div>
              <div className='card'>
                <img
                  src='images/g2.jpg'
                  className='img-fluid'
                  alt='Card'
                />
                <div className='card-body w3ls-card'>
                  <h5 className='card-title'>
                    How we’re responding to Coronavirus
                  </h5>
                  <p className='card-text mb-3 '>
                    In the wake of the Coronavirus virus, our highest priority
                    is to do our part the help ensure the health and safety of
                    our employees, customers, and suppliers while meeting our
                    service commitments.
                  </p>
                </div>
              </div>
              <div className='card'>
                <img
                  src='images/g3.jpg'
                  className='img-fluid'
                  alt='Card'
                />
                <div className='card-body w3ls-card'>
                  <h5 className='card-title'>UPC Integration Solutions</h5>
                  <p className='card-text mb-3 '>
                    Whether integrating our shipping functionalities into your
                    applications or websites, we can help you streamline
                    processes and gain efficiencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='stats py-md-5'>
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
        </section>
      </>
    </div>
  );
};

export default HomePage;
