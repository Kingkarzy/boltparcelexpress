const Footer = () => {
  return (
    <footer>
      <section className='footer py-md-5'>
        <div className='container py-4 mt-2'>
          <div className='row footer_inner_info_w3ls_agileits'>
            <div className='col-md-3 footer-left'>
              <h2>
                <a href='/'> Shipping</a>
              </h2>
              <p className='mb-3 mt-3'>
                From packages to pallets, and local to global, get flexible,
                reliable, and afforable shipping solutions that fit your
                business.
              </p>
              <ul className='social-nav footer-social social two'>
                <li>
                  <a href='#'>
                    <i
                      className='fab fa-facebook-f'
                      aria-hidden='true'
                    ></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i
                      className='fab fa-twitter'
                      aria-hidden='true'
                    ></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i
                      className='fab fa-instagram'
                      aria-hidden='true'
                    ></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-md-2 sign-gd'>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/about'>About</a>
                </li>
                <li>
                  <a href='/services'>Services</a>
                </li>
                <li>
                  <a href='/contact'>Contact</a>
                </li>
                <li>
                  <a href='/track'>Tracking</a>
                </li>
              </ul>
            </div>
            <div className='col-md-4 sign-gd flickr-post'>
              <h4>Gallery</h4>
              <ul>
                <li>
                  <a href='#'>
                    <img
                      src='../assets/g10.JPG'
                      alt=''
                      className='img-fluid'
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src='../assets/g11.JPG'
                      alt=''
                      className='img-fluid'
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src='../assets/g12.JPG'
                      alt=''
                      className='img-fluid'
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src='../assets/g13.JPG'
                      alt=''
                      className='img-fluid'
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src='../assets/g14.JPG'
                      alt=''
                      className='img-fluid'
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src='../assets/g15.JPG'
                      alt=''
                      className='img-fluid'
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src='../assets/g17.JPG'
                      alt=''
                      className='img-fluid'
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src='../assets/g18.JPG'
                      alt=''
                      className='img-fluid'
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src='../assets/g19.JPG'
                      alt=''
                      className='img-fluid'
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-3 sign-gd-two'>
              <h4>Contact Information</h4>
              <div className='address'>
                <div className='address-grid'>
                  <div className='address-left'>
                    <i
                      className='fa fa-envelope'
                      aria-hidden='true'
                    ></i>
                  </div>
                  <div className='address-right'>
                    <h6>Email Address</h6>
                    <p>
                      <a href='mailto:info@upcxpress.com' >
                        {' '}
                        info@boltparcelexpress.com{' '}
                      </a>
                    </p>
                  </div>
                  <div className='clearfix'> </div>
                </div>
                <div className='address-grid'>
                  <div className='address-left'>
                    <i
                      className='fa fa-map-marker'
                      aria-hidden='true'
                    ></i>
                  </div>
                  <div className='address-right'>
                    <h6>Location</h6>
                    <p>
                      7899 Cedarwood Dr. San Jose, CA 95116 California, United
                      States.
                    </p>

                    <p>70372 Baden-Wurttemberg Stuttgart, Germany </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <br/>
            <br/>
          <div style={{ textAlign: 'center', color: 'grey' }}>
            Copyright&copy; 2023 Bolt Parcel Express, Inc. All rights reserved
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
