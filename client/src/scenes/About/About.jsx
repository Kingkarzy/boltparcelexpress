import { Box } from '@mui/material';

const About = () => {
  return (
    <Box>
      <section className='banner-1'></section>
      <section className='banner_bottom py-md-5'>
        <div className='container py-4 mt-2'>
          <h3 className='tittle-w3ls text-center mb-3'>About Us</h3>
          <p className='tit text-center mx-auto'>
            United Parcel Courier is the largest consumer-to-consumer package
            transportation company from the United States to Europe. With over
            60 years of experience handing ocean and air shipments, Sky Delivery
            and our operating companies have earned our reputation as a
            consistent, trusted, carrier that is relied upon to cost effectively
            handle shipments to 43 countries.
          </p>
          <div className='inner_sec_info_wthree_agile pt-4 mt-md-4'>
            <div className='row help_full'>
              <div className='col-md-6 banner_bottom_grid help'>
                <img
                  src='../assets/g1.jpg'
                  alt=' '
                  className='img-fluid'
                />
              </div>
              <div className='col-md-6 banner_bottom_left'>
                <h4>
                  When you ship with UPC Express – you’re shipping with
                  specialists in international shipping and courier delivery
                  services! With our wide range of express parcel and package
                  services, along with shipping and tracking solutions to fit
                  your needs – learn how UPC Express can deliver!
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='team py-md-5'>
        <div className='container py-4 mt-2'>
          <h3 className='tittle-w3ls text-center mb-3'>Our Team</h3>
          <p className='tit text-center mx-auto'>
            Learn about the management personnel leading and growing UPC Supply
            Chain today.!
          </p>
          <div className='row inner-sec-w3layouts-agileinfo pt-4 mt-md-4'>
            <div
              className='col-md-3 col-sm-6 team-grids'
              style={{ height: '15rem' }}
            >
              <img
                src='../assets/t1.jpg'
                className='img-fluid'
                alt=''
              />
              <div className='team-info'>
                <div className='caption'>
                  <h4>Patrick Kelleher, CEO, UPC Supply Chain</h4>
                  <h6>
                    Patrick is responsible for driving the global growth agenda
                    of UPC Supply Chain. Joining UPC in 1992, Patrick has held
                    various roles in Marketing, Solutions Design, Operations,
                    Account Management and Business Development. Patrick was CEO
                    of the Americas for the UPC division of Williams Lea Tag.
                  </h6>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6 team-grids'>
              <img
                src='../assets/t2.JPG'
                className='img-fluid'
                alt=''
              />
              <div className='team-info'>
                <div className='caption'>
                  <h4>Javier Bilbao, CEO, Latin America, UPC Supply Chain</h4>
                  <h6>
                    Javier is a member of the UPC Supply Chain Divisional Board
                    and Global Transport Lead for UPC Supply Chain. He is
                    responsible for more than 22,000 associates across 11
                    countries including Argentina, Brazil, Colombia, Chile,
                    India and Mexico. Javier joined UPC in 2000, starting in the
                    audit department.{' '}
                  </h6>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6 team-grids'>
              <img
                src='../assets/t3.jpg'
                className='img-fluid'
                alt=''
              />
              <div className='team-info'>
                <div className='caption'>
                  <h4>
                    Hendrik Venter, CEO Europe, Middle East and Africa, UPC
                    Supply Chain
                  </h4>
                  <h6>
                    Hendrik provides leadership to employees across 25
                    countries, using more than 20 years’ experience in
                    logistics. He was previously CEO for Central & Eastern
                    Europe based in Poland. Before moving to Europe in 2013, he
                    held senior supply chain positions in South Africa.{' '}
                  </h6>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6 team-grids'>
              <img
                src='../assets/t4.jpg'
                className='img-fluid'
                alt=''
              />
              <div className='team-info'>
                <div className='caption'>
                  <h4>Terry Ryan, CEO Asia Pacific, UPC Supply Chain </h4>
                  <h6>
                    Terry has responsibility for accelerating profitable growth,
                    delivering world-className supply chain solutions and
                    leading more than 30,000 employees in 12 countries in Asia
                    Pacific, overseeing operations across multiple sectors. Key
                    achievements include launching a ‘start-up’ contract
                    logistics enterprise in Australia.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default About;
