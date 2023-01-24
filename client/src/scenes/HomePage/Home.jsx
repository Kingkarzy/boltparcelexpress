import { Box, Card, IconButton, Button } from '@mui/material';
import $ from 'jquery';
import { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import { useParams } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
// import Form from './Form.jsx';

const Home = () => {
  const [packageDetails, setPackageDetails] = useState(null);
  const { packageId } = useParams();

  const handleSubmit = async (values) => {
    console.log(values);
    const response = await fetch(
      `http://localhost:5001/users/${packageId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }
    );
    console.log(values);
    const data = await response.json();
    setPackageDetails(data);
  };
  /*   const handleSubmit = async (values) => {
    await getPackageDetails(values);
  }; */

  /*   useEffect(() => {
    getPackageDetails();
  }, []); */ // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <section className='banner-silder'>
        <div className='banner-top banner-top1'>
          <div
            className='container'
            style={{ padding: '3rem 0 0 0' }}
          >
            <div className='banner-info info2'>
              <h3>
                <b className='text-success'> BOLT FLASH EXPRESS </b>
              </h3>
              <h2 style={{ color: 'white' }}>Track Package</h2>

              <div
                style={{
                  width: '50%',
                  margin: 'auto',
                  color: 'white',
                }}
                className='input-group-lg'
              >
                {/* FORM  */}
                {/* <Form /> */}
                <br />
                <Button
                  href='/track'
                  size='medium'
                  sx={{
                    backgroundColor: '#28a745',
                    color: 'white',
                    margin: '10rem, 0 !important',
                    padding: '0.25rem, 0',
                    '&:hover': {
                      backgroundColor: '#CCAF2D',
                      color: 'white',
                    },
                  }}
                >
                  Track Your Package
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className='banner-btm'>
        <div className='container'>
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
            className='row banner-bottom-main'
          >
            <div className='col-md-4 banner-grid2'>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  maxWidth: 500,
                  margin: '20px auto',
                  borderRadius: '10px',
                  width: '18rem',
                  minHeight: '25.5rem',
                }}
                className='banner-subg1'
              >
                <IconButton>
                  <LanguageIcon sx={{ fontSize: '4rem' }} />
                </IconButton>
                <h3 className='mt-3'>Express Shipping with UPC</h3>
                <p className='mt-3 mb-3'>
                  Get expert shipping advice and customs support to
                  prepare and manage your express shipments!
                </p>
              </Card>
            </div>
            <div className='col-md-4 banner-grid2'>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  maxWidth: 500,
                  margin: '20px auto',
                  borderRadius: '10px',
                  width: '18rem',
                  minHeight: '25.5rem',
                  maxHeight: '25.5rem',
                }}
                className='banner-subg1'
              >
                <IconButton>
                  <PersonIcon sx={{ fontSize: '4rem' }} />
                </IconButton>
                <h3 className='mt-3'>Can We Help?</h3>
                <p className='mt-3 mb-3'>
                  Having trouble arranging a shipment online or
                  tracking a package? Our UPC Express Customer Service
                  agents are here to help you!
                </p>
                <div>
                  <a href='mailto:info@upcxpress.com'>
                    UPC Express customer service
                  </a>
                </div>
              </Card>
            </div>
            <div className='col-md-4 banner-btmg'>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  maxWidth: '20rem',
                  margin: '20px auto',
                  borderRadius: '10px',
                  width: '18rem',
                  minHeight: '25.5rem',
                  //   maxHeight: '25.5rem',
                }}
                className='banner-btmg1'
              >
                <div className='form-text'>
                  <h3 className='text-center'>Contact </h3>
                  <p
                    className='text-center'
                    style={{ color: 'grey' }}
                  >
                    Email Customer Service
                  </p>
                </div>
                <form
                  action='#'
                  method='post'
                  className='banner_form'
                >
                  <div className='sec-left'>
                    <label className='contact-form-text'>
                      Email Address
                    </label>
                    <input
                      placeholder='Email Address '
                      name='email'
                      type='email'
                      required=''
                    />
                  </div>
                  <div className='sec-right'>
                    <label className='contact-form-text'>
                      Message
                    </label>
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
              </Card>
            </div>
          </Box>
        </div>
      </section>
      <section className='banner_bottom'>
        <div className='container mt-2'>
          <div className='inner_sec_info_wthree_agile py-5'>
            <div className='row help_full py-sm-4'>
              <div className='col-md-6 pt-lg-5 mt-lg-5 banner_bottom_left'>
                <h4>
                  Specialtymoves? We’re a company up to the challenge!
                </h4>
                <p className='mb-3'>
                  Get expert shipping/delivery advice and customs
                  support to prepare and manage your express
                  shipments! As an expert in international shipping
                  and freight delivery, United Parcel Courier is a
                  worldwide delivery express that understands the
                  needs of small and medium businesses. United Parcel
                  Courier is the largest consumer-to-consumer package
                  transportation company from the United States to
                  Europe. With over 60 years of experience handing
                  ocean and air shipments, Sky Delivery and our
                  operating companies have earned our reputation as a
                  consistent, trusted, carrier that is relied upon to
                  cost effectively handle shipments to 43 countries.
                </p>
                <p className='mb-3'>
                  United Parcel Courier – you’re shipping with
                  specialists in international shipping and courier
                  delivery services! With our wide range of express
                  parcel and package services, along with shipping and
                  tracking solutions to fit your needs – learn how
                  United Parcel Courier can deliver!
                </p>
              </div>

              <div className='col-md-6 banner_bottom_grid help'>
                <img
                  src='../assets/2.png'
                  alt='Bolt Parcel'
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='testimonials py-md-5'>
        <div className='container py-4 mt-2'>
          <h3 className='tittle-w3ls text-center mb-3 text-white'>
            Express Delivery Services & International Shipping
          </h3>
          <p className='tit text-center mx-auto text-white'>
            When you ship with UPC Express – you’re shipping with
            specialists in international shipping and courier delivery
            services! With our wide range of express parcel and
            package services, along with shipping and tracking
            solutions to fit your needs – learn how UPC Express can
            deliver!
          </p>
        </div>
      </section>
      <section className='wthree-row w3-about py-md-5'>
        <div className='container py-4 mt-2'>
          <h3 className='tittle-w3ls text-center mb-3'>
            How UPC is responding to the Coronavirus
          </h3>
          <p className='tit text-center mx-auto'>
            UPC continues to deliver worldwide. In the U.S., UPC is
            designated among the government’s critical infrastructure
            and, therefore, operations continue as normal. We also
            continue to deliver to locations around the world, where
            permitted. As always, our highest priority is to help
            ensure the health and safety of our employees, customers,
            and suppliers while meeting our service commitments.
          </p>
          <div className='card-deck pt-4 mt-md-4'>
            <div className='card'>
              <img
                src='../assets/g1.jpg'
                className='img-fluid'
                alt='Card'
              />
              <div className='card-body w3ls-card'>
                <h5 className='card-title'>
                  Small and Medium Business Solutions
                </h5>
                <p className='card-text mb-3 '>
                  As an expert in international shipping, UPC Express
                  understands the needs of small and medium
                  businesses.
                </p>
              </div>
            </div>
            <div className='card'>
              <img
                src='../assets/g2.jpg'
                className='img-fluid'
                alt='Card'
              />
              <div className='card-body w3ls-card'>
                <h5 className='card-title'>
                  How we’re responding to Coronavirus
                </h5>
                <p className='card-text mb-3 '>
                  In the wake of the Coronavirus virus, our highest
                  priority is to do our part the help ensure the
                  health and safety of our employees, customers, and
                  suppliers while meeting our service commitments.
                </p>
              </div>
            </div>
            <div className='card'>
              <img
                src='../assets/g3.jpg'
                className='img-fluid'
                alt='Card'
              />
              <div className='card-body w3ls-card'>
                <h5 className='card-title'>
                  UPC Integration Solutions
                </h5>
                <p className='card-text mb-3 '>
                  Whether integrating our shipping functionalities
                  into your applications or websites, we can help you
                  streamline processes and gain efficiencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='distance-w3 py-md-5'>
        <div className='container py-4 mt-2'>
          <div className='row'>
            <div className='col-md-8 distance-agile-left'>
              <h4 className='mt-2'>
                The Safest Distance Between Two Points.
              </h4>
            </div>
            <div className='col-md-4 distance-agile-right'>
              <a href='mailto:info@upcxpress.com'> Contact Us </a>
            </div>
          </div>
        </div>
      </section>
      <section className='stats py-md-5'>
        <div className='container py-4 mt-2'>
          <h3 className='tittle-w3ls text-center mb-3'>Our Stats</h3>
          <p className='tit text-center mx-auto'>
            United States air hubs: Dallas, TX.; Louisville, KY.
            (Worldport); Ontario, CA.; Philadelphia, PA.; Rockford,
            Il. International air hubs: Cologne/Bonn, Germany;
            Hamilton, Ontario, Canada; Hong Kong SAR, China; Shanghai,
            China; Shenzhen, China
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

      <div
        className='modal fade'
        id='myModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalCenterTitle'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-dialog-centered'
          role='document'
        >
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Shipping</h4>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <div className='agileits-w3layouts-info'>
                <img
                  src='../assets/g1.jpg'
                  className='img-fluid'
                  alt=''
                />
                <p>
                  When you ship with UPC Express – you’re shipping
                  with specialists in international shipping and
                  courier delivery services! With our wide range of
                  express parcel and package services, along with
                  shipping and tracking solutions to fit your needs –
                  learn how UPC Express can deliver!{' '}
                </p>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <script src='../../js/jquery-2.2.3.min.js'></script>
      <script src='../../js/move-top.js'></script>
      <script src='../../js/easing.js'></script>
      <script>
        jQuery(document).ready(function ($){' '}
        {$('.scroll').click(function (event) {
          event.preventDefault();

          $('html,body').animate(
            {
              scrollTop: $(this.hash).offset().top,
            },
            1000
          );
        })}
        )
      </script>
      <script src='../../js/jquery.waypoints.min.js'></script>
      <script src='../../js/jquery.countup.js'></script>
      <script>$('.counter').countUp();</script>

      <script src='../../js/SmoothScroll.min.js'></script>

      <script src='../../js/bootstrap.js'></script>
    </Box>
  );
};

export default Home;
