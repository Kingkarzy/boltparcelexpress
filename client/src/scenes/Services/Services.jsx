import React from 'react';

const Services = () => {
  return (
    <div>
      <section className='ser-btm py-md-5'>
        <div className='container py-4 mt-2'>
          <h3 className='tittle-w3ls text-center mb-3'>Services</h3>
          <p className='tit text-center mx-auto'>
            Services and technology for managing your shipping process {"-"} from
            individuals to enterprises, local to global.
          </p>
          <div className='row banner-bottom-main pt-4 mt-md-4'>
            <div className='col-md-4 banner-grid2'>
              <div className='banner-subg1'>
                <span
                  className='fa fa-globe'
                  aria-hidden='true'
                ></span>
                <h3 className='mt-3'>WAREHOUSING & DISTRIBUTION</h3>
                <p className='mt-3 mb-3'>
                  Moving products from manufacturing plants to warehouses,
                  between international, national, and regional facilities and
                  to distributors, can represent more than half of your total
                  logistics costs.
                </p>
              </div>
            </div>
            <div className='col-md-4 banner-grid2'>
              <div className='banner-subg1'>
                <span
                  className='fa fa-user'
                  aria-hidden='true'
                ></span>
                <h3 className='mt-3'>FREIGHT TRANSPORTATION</h3>
                <p className='mt-3 mb-3'>
                  A logistics partner big enough to deliver freight of any kind,
                  to any place via air, ocean, road or rail, but capable of
                  giving its customers the personal attention they need. Welcome
                  to Bolt Parcel Express.
                </p>
                <div className='read-btn'></div>
              </div>
            </div>
            <div className='col-md-4 banner-grid2'>
              <div className='banner-subg1'>
                <span
                  className='fa fa-globe'
                  aria-hidden='true'
                ></span>
                <h3 className='mt-3'>WORLDWIDE TRANSPORT</h3>
                <p className='mt-3 mb-3'>
                  Whether we're managing your carriers, creating a dedicated
                  fleet or a mix of the two, we deliver high levels of service,
                  reliability and control over your product movement to your
                  customers.
                </p>
                <div className='read-btn'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='wthree-row w3-about py-md-5'>
        <div className='container py-4 mt-2'>
          <h3 className='tittle-w3ls text-center mb-3'>Smooth Shipping.</h3>
          <div className='card-deck pt-4 mt-md-4'>
            <div className='card'>
              <img
                src='../../assets/g1.jpg'
                className='img-fluid'
                alt='Card'
              />
              <div className='card-body w3ls-card'>
                <h5 className='card-title'>WAREHOUSE & STORAGE</h5>
                <p className='card-text mb-3 '>
                  By understanding your issues and anticipating your business
                  and logistics needs, Bolt Parcel Express provide robust
                  solutions that will drive value for your business.
                </p>
                <div className='ab_button'></div>
              </div>
            </div>
            <div className='card'>
              <img
                src='../../assets/g2.jpg'
                className='img-fluid'
                alt='Card'
              />
              <div className='card-body w3ls-card'>
                <h5 className='card-title'>LEAD LOGISTICS PROVIDER (LLP)</h5>
                <p className='card-text mb-3 '>
                  At Bolt Parcel Express , being LLP means instigating and
                  managing change across your entire supply chain, to meet
                  changing business and customer demands.
                </p>
                <div className='ab_button'></div>
              </div>
            </div>
            <div className='card'>
              <img
                src='../../assets/g3.jpg'
                className='img-fluid'
                alt='Card'
              />
              <div className='card-body w3ls-card'>
                <h5 className='card-title'>EXPRESS DELIVERY SERVICES</h5>
                <p className='card-text mb-3 '>
                  When you ship with Bolt Parcel Express you’re shipping
                  with specialists in international shipping and courier
                  delivery services! With our wide range of express parcel and
                  package services, along with shipping and tracking solutions
                  to fit your needs learn how Bolt Parcel Express can
                  deliver!
                </p>
                <div className='ab_button'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
