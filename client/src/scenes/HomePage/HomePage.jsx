import React from 'react';

const HomePage = () => {
  return (
    <div>
      <>
        <section class='banner-silder'>
          <div class='banner-top banner-top1'>
            <div class='container'>
              <div class='banner-info info2'>
                <h3>
                  <b class='text-success'> UPC - EXPRESS </b>
                </h3>
                <h2>Track Package</h2>
                <p>
                  NOTE: Please enter your tracking number in the box provided
                  below
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRACKING */}
        <br />
        <br />
        <br />
        <section class='banner-btm'>
          <div class='container'>
            <div class='row banner-bottom-main'>
              <div class='col-md-4 banner-grid2'>
                <div class='banner-subg1'>
                  <span
                    class='fa fa-globe'
                    aria-hidden='true'
                  ></span>
                  <h3 class='mt-3'>Express Shipping with UPC</h3>
                  <p class='mt-3 mb-3'>
                    Get expert shipping advice and customs support to prepare
                    and manage your express shipments!
                  </p>
                </div>
              </div>
              <div class='col-md-4 banner-grid2'>
                <div class='banner-subg1'>
                  <span
                    class='fa fa-user'
                    aria-hidden='true'
                  ></span>
                  <h3 class='mt-3'>Can We Help?</h3>
                  <p class='mt-3 mb-3'>
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
              <div class='col-md-4 banner-btmg'>
                <div class='banner-btmg1'>
                  <div class='form-text'>
                    <h3 class='text-center'>Contact </h3>
                    <p class='text-center'>Email Customer Service</p>
                  </div>
                  <form
                    action='#'
                    method='post'
                    class='banner_form'
                  >
                    <div class='sec-left'>
                      <label class='contact-form-text'>Email Address</label>
                      <input
                        placeholder='Email Address '
                        name='email'
                        type='email'
                        required=''
                      />
                    </div>
                    <div class='sec-right'>
                      <label class='contact-form-text'>Message</label>
                      <textarea
                        class='form-control'
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
        <section class='banner_bottom'>
          <div class='container mt-2'>
            <div class='inner_sec_info_wthree_agile py-5'>
              <div class='row help_full py-sm-4'>
                <div class='col-md-6 pt-lg-5 mt-lg-5 banner_bottom_left'>
                  <h4>Specialtymoves? We’re a company up to the challenge!</h4>
                  <p class='mb-3'>
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
                  <p class='mb-3'>
                    United Parcel Courier – you’re shipping with specialists in
                    international shipping and courier delivery services! With
                    our wide range of express parcel and package services, along
                    with shipping and tracking solutions to fit your needs –
                    learn how United Parcel Courier can deliver!
                  </p>
                </div>

                <div class='col-md-6 banner_bottom_grid help'>
                  <img
                    src='images/2.png'
                    alt=' '
                    class='img-fluid'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- testimonials --> */}
        <section class='testimonials py-md-5'>
          <div class='container py-4 mt-2'>
            <h3 class='tittle-w3ls text-center mb-3 text-white'>
              Express Delivery Services & International Shipping
            </h3>
            <p class='tit text-center mx-auto text-white'>
              When you ship with UPC Express – you’re shipping with specialists
              in international shipping and courier delivery services! With our
              wide range of express parcel and package services, along with
              shipping and tracking solutions to fit your needs – learn how UPC
              Express can deliver!
            </p>
          </div>
        </section>
        <section class='wthree-row w3-about py-md-5'>
          <div class='container py-4 mt-2'>
            <h3 class='tittle-w3ls text-center mb-3'>
              How UPC is responding to the Coronavirus
            </h3>
            <p class='tit text-center mx-auto'>
              UPC continues to deliver worldwide. In the U.S., UPC is designated
              among the government’s critical infrastructure and, therefore,
              operations continue as normal. We also continue to deliver to
              locations around the world, where permitted. As always, our
              highest priority is to help ensure the health and safety of our
              employees, customers, and suppliers while meeting our service
              commitments.
            </p>
            <div class='card-deck pt-4 mt-md-4'>
              <div class='card'>
                <img
                  src='images/g1.jpg'
                  class='img-fluid'
                  alt='Card'
                />
                <div class='card-body w3ls-card'>
                  <h5 class='card-title'>
                    Small and Medium Business Solutions
                  </h5>
                  <p class='card-text mb-3 '>
                    As an expert in international shipping, UPC Express
                    understands the needs of small and medium businesses.
                  </p>
                </div>
              </div>
              <div class='card'>
                <img
                  src='images/g2.jpg'
                  class='img-fluid'
                  alt='Card'
                />
                <div class='card-body w3ls-card'>
                  <h5 class='card-title'>
                    How we’re responding to Coronavirus
                  </h5>
                  <p class='card-text mb-3 '>
                    In the wake of the Coronavirus virus, our highest priority
                    is to do our part the help ensure the health and safety of
                    our employees, customers, and suppliers while meeting our
                    service commitments.
                  </p>
                </div>
              </div>
              <div class='card'>
                <img
                  src='images/g3.jpg'
                  class='img-fluid'
                  alt='Card'
                />
                <div class='card-body w3ls-card'>
                  <h5 class='card-title'>UPC Integration Solutions</h5>
                  <p class='card-text mb-3 '>
                    Whether integrating our shipping functionalities into your
                    applications or websites, we can help you streamline
                    processes and gain efficiencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class='stats py-md-5'>
          <div class='container py-4 mt-2'>
            <h3 class='tittle-w3ls text-center mb-3'>Our Stats</h3>
            <p class='tit text-center mx-auto'>
              United States air hubs: Dallas, TX.; Louisville, KY. (Worldport);
              Ontario, CA.; Philadelphia, PA.; Rockford, Il. International air
              hubs: Cologne/Bonn, Germany; Hamilton, Ontario, Canada; Hong Kong
              SAR, China; Shanghai, China; Shenzhen, China
            </p>
            <div class='row inner_w3l_agile_grids-1 pt-4 mt-md-4'>
              <div class='col-sm-4 w3layouts_stats_left w3_counter_grid'>
                <p class='counter'>1,546</p>
                <h3>Satisfied Clients</h3>
                <h6>Pure satisfaction</h6>
              </div>
              <div class='col-sm-4 w3layouts_stats_left w3_counter_grid1'>
                <p class='counter'>14,345</p>
                <h3>Successful Shippings</h3>
                <h6>Shipping</h6>
              </div>
              <div class='col-sm-4 w3layouts_stats_left w3_counter_grid2'>
                <p class='counter'>563</p>
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
