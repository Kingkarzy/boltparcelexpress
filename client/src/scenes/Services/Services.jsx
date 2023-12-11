import { IconButton, Card } from '@mui/material';
import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';

const Services = () => {
  return (
    <div>
      <section className='ser-btm py-md-5'>
        <div className='container py-4 mt-2'>
          <br />
          <h3 className='tittle-w3ls text-center mb-3'>Services</h3>
          <p className='tit text-center mx-auto'>
            Services and technology for managing your shipping process{' '}
            {'-'} from individuals to enterprises, local to global.
          </p>
          <div className='row banner-bottom-main mt-md-4'>
            <div className='col-md-4 banner-grid2'>
              <Card
                sx={{ height: '28.25rem', paddingTop: '2em' }}
                className='banner-subg1'
              >
                <IconButton>
                  <LanguageIcon sx={{ fontSize: '4rem' }} />
                </IconButton>
                <h3 className='mt-3'>WAREHOUSING & DISTRIBUTION</h3>
                <p className='mt-3 mb-3'>
                  Moving products from manufacturing plants to
                  warehouses, between international, national, and
                  regional facilities and to distributors, can
                  represent more than half of your total logistics
                  costs.
                </p>
              </Card>
            </div>
            <div className='col-md-4 banner-grid2'>
              <Card
                sx={{ height: '28.25rem', paddingTop: '2em' }}
                className='banner-subg1'
              >
                <IconButton>
                  <PersonIcon sx={{ fontSize: '4rem' }} />
                </IconButton>
                <h3 className='mt-3'>FREIGHT TRANSPORTATION</h3>
                <p className='mt-3 mb-3'>
                  A logistics partner big enough to deliver freight of
                  any kind, to any place via air, ocean, road or rail,
                  but capable of giving its customers the personal
                  attention they need. Welcome to Bolt Parcel Express.
                </p>
                <div className='read-btn'></div>
              </Card>
            </div>
            <div className='col-md-4 banner-grid2'>
              <Card
                sx={{ height: '28.25rem', paddingTop: '2em' }}
                className='banner-subg1'
              >
                <IconButton>
                  <LanguageIcon sx={{ fontSize: '4rem' }} />
                </IconButton>
                <h3 className='mt-3'>WORLDWIDE TRANSPORT</h3>
                <p className='mt-3 mb-3'>
                  Whether we're managing your carriers, creating a
                  dedicated fleet or a mix of the two, we deliver high
                  levels of service, reliability and control over your
                  product movement to your customers.
                </p>
                <div className='read-btn'></div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className='wthree-row w3-about py-md-5'>
        <div className='container mt-2'>
          <h3 className='tittle-w3ls text-center mb-3'>
            Smooth Shipping
          </h3>
          <div className='card-deck mt-md-4'>
            <Card className='card'>
              <img
                src='../../assets/g1.jpg'
                className='img-fluid'
                alt='Card'
              />
              <div className='card-body w3ls-card'>
                <h5 className='card-title  text-center'>WAREHOUSE & STORAGE</h5>
                <p className='card-text mb-3 text-center'>
                  By understanding your issues and anticipating your
                  business and logistics needs, Bolt Parcel Express
                  provide robust solutions that will drive value for
                  your business.
                </p>
                <div className='ab_button'></div>
              </div>
            </Card>
            <Card className='card'>
              <img
                src='../../assets/g2.jpg'
                className='img-fluid'
                alt='Card'
              />
              <div className='card-body w3ls-card'>
                <h5 className='card-title  text-center'>
                  LEAD LOGISTICS PROVIDER (LLP)
                </h5>
                <p className='card-text mb-3  text-center'>
                  At Bolt Parcel Express , being LLP means instigating
                  and managing change across your entire supply chain,
                  to meet changing business and customer demands.
                </p>
                <div className='ab_button'></div>
              </div>
            </Card>
            <Card className='card'>
              <img
                src='../../assets/g3.jpg'
                className='img-fluid'
                alt='Card'
              />
              <div className='card-body w3ls-card'>
                <h5 className='card-title  text-center'>
                  EXPRESS DELIVERY SERVICES
                </h5>
                <p className='card-text mb-3  text-center'>
                  When you ship with Bolt Parcel Express you’re
                  shipping with specialists in international shipping
                  and courier delivery services! With our wide range
                  of express parcel and package services, along with
                  shipping and tracking solutions to fit your needs
                  learn how Bolt Parcel Express can deliver!
                </p>
                <div className='ab_button'></div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
