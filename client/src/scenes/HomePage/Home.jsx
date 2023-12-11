import {
  Box,
  Card,
  IconButton,
  Button,
} from '@mui/material';
import $ from 'jquery';
import { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import { useParams } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
// import Form from './Form.jsx';

const Home = () => {
  const [packageDetails, setPackageDetails] = useState(null);
  const { packageId } = useParams();

  const [count, setCount] = useState(1947);
  const [count1, setCount1] = useState(3612);
  const [count2, setCount2] = useState(29);

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

            // ON SCROLL EVENT 
     
      const handleScroll = () => {
       const interval =  setInterval(() => {
                    if(count < 31425) setCount(prevCount => prevCount + 1);
                    if(count1 < 94626) setCount(prevCount => prevCount + 1);
                    if(count2 < 94) setCount(prevCount => prevCount + 1);
                    else clearInterval(interval);
                    }, 50) 
                    return () => clearInterval(interval);
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
                <b className='text-success'>  EXPRESS BOXED </b>
              </h3>
              <h6 style={{ color: 'black', margin:'auto', width:'50%', marginTop:'4rem' }}>Bolt ahead with our lightning fast delivery service</h6>

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
                  size='large'
                  sx={{
                    backgroundColor: '#28a745',
                    color: 'white',
                    margin: '10rem, 0 !important',
                    padding: '0.25rem, 0',
                    '&:hover': {
                      backgroundColor: '#dfc7aa',
                      color: 'green',
                      fontSize:'1rem',
                      border: "1px solid green",
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
                <h3 className=' mt-3'>Express Shipping with Bolt</h3>
                <p className='mt-3 mb-1'>
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
                <p className='mt-3 mb-1'>
                  Having trouble arranging a shipment online or
                  tracking a package? Our Customer Service agents are
                  here to help you!
                </p>
                <div>
                  <a href='mailto:info@boltparcelexpress.com'>
                    Customer Service
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
                    // style={{ color: 'grey' }}
                  >
                    Customer Service
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
                      // placeholder='Email Address '
                      name='email'
                      type='email'
                      required
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
                      // placeholder='Message'
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
        <div className='container mt-1'>
          <div className='inner_sec_info_wthree_agile py-5'>
            <div className='row help_full py-sm-4'>
              <div className='col-md-6 pt-lg-5 mt-lg-5 banner_bottom_left'>
                <h4>
                  Specialtymoves? We’re a company up to the challenge!
                </h4>
                <p className='mb-3'>
                  Welcome to Bolt Parcel Express! We are a parcel
                  delivery service that specializes in fast and
                  reliable shipping for both individuals and
                  businesses. With our easy-to-use online platform,
                  you can track your packages, schedule pickups, and
                  even get shipping rates in just a few clicks.
                  Whether you're sending a gift to a loved one or
                  shipping products for your business, we've got you
                  covered.
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

      <section
        className='testimonials py-md-5'
        style={{ marginTop: '2rem' }}
      >
        <div className='container mt-2'>
          <h3 className='tittle-w3ls text-center mb-3' style={{color: "black"}}>
            Express Delivery Services & International Shipping
          </h3>
          <p className='tit text-center mx-auto ' style={{color: "black"}}>
            Our platform is designed to make the shipping process as
            simple and hassle-free as possible. Our user-friendly
            interface allows you to create shipping labels and track
            your packages with just a few clicks. We also offer a
            variety of shipping options to suit your needs, including
            express shipping for time-sensitive packages, ground
            shipping for larger items, and international shipping to
            over 200 countries and territories.
          </p>
        </div>
      </section>

      <section
        className='distance-w3 py-md-5'
        style={{ paddingBottom: '2rem' }}
      >
        <div className='container mt-2'>
          <div className='row'>
            <div className='col-md-8 distance-agile-left'>
              <h4 className='mt-2'>
                The Safest Distance Between Two Points.
              </h4>
            </div>
            <div className='col-md-4 distance-agile-right'>
              <a href='mailto:info@expressboxed.com'>
                {' '}
                Contact Us{' '}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className='stats py-md-5'
        style={{ marginTop: '2rem' }}
      >
        <div className='container mt-2'>
          <h3 className='tittle-w3ls text-center mb-3 '>Our Stats</h3>
          <p className='tit text-center mx-auto'>
            United States air hubs: Dallas, TX.; Louisville, KY.
            (Worldport); Ontario, CA.; Philadelphia, PA.; Rockford,
            Il. International air hubs: Cologne/Bonn, Germany;
            Hamilton, Ontario, Canada; Hong Kong SAR, China; Shanghai,
            China; Shenzhen, China
          </p>
        
          <div className='row inner_w3l_agile_grids-1 mt-md-4' onScroll={handleScroll}>
            <div className='col-sm-4 w3layouts_stats_left w3_counter_grid'>
              <p className='counter'>{count}</p>
              <h3>Satisfied Clients</h3>
              <h6>Pure satisfaction</h6>
            </div>
            <div className='col-sm-4 w3layouts_stats_left w3_counter_grid1' >
              <p className='counter'>{count1}</p>
              <h3>Successful Shippings</h3>
              <h6>Shipping</h6>
            </div>
            <div className='col-sm-4 w3layouts_stats_left w3_counter_grid2'>
              <p className='counter'>{count2}</p>
              <h3>Branches Worldwide</h3>
              <h6>Highest level of credibility</h6>
            </div>
          </div>
        </div>
      </section>

      <script src='../../js/jquery-2.2.3.min.js'></script>
      <script src='../../js/move-top.js'></script>
      <script src='../../js/easing.js'></script>
      <script src='../../js/jquery.waypoints.min.js'></script>
      <script src='../../js/jquery.countup.js'></script>
      <script>$('.counter').countUp();</script>

      <script src='../../js/SmoothScroll.min.js'></script>

      <script src='../../js/bootstrap.js'></script>
    </Box>
  );
};

export default Home;
