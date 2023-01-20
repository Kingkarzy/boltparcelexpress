import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className='w3ls-section banner-single py-md-5'>
        <div className='container py-4 mt-2'>
          <h3 className='tittle-w3ls text-center mb-3'>GET IN TOUCH</h3>
          <div className='row about-inner-main pt-4 mt-md-4'>
            <div className='col-md-6 contact-left'>
              <div className='agile-contact-top'>
                <h4>Address </h4>
                <h6 style='color: rgb(185, 180, 180); margin: 15px;'>
                  We’d Love To Hear From You.
                </h6>
                <div style='text-align: left;'>
                  <p>
                    {' '}
                    <i className='fa fa-location-arrow'></i>&emsp; 7899
                    Cedarwood Dr. San Jose, CA 95116 California, United States.
                  </p>

                  <br />
                  <p>
                    {' '}
                    <i className='fa fa-location-arrow'></i>&emsp; 70372
                    Baden-Wurttemberg Stuttgart, Germany{' '}
                  </p>
                </div>
              </div>
              <div className='contact-bottom'>
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3060153584!2d-74.2598711799434!3d40.69714940555201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1510842846108'></iframe>
              </div>
            </div>
            <div className='col-md-6 w3layouts-reg-form contact-form-row-agileinfo'>
              <h4 className='form-con-txt'>send us a mail</h4>
              <form
                action='#'
                method='post'
                className='banner_form contact-inner-form'
              >
                <div className='contact-form-left contact-field1'>
                  <div className='sec-left'>
                    <label className='contact-form-text'>Name</label>
                    <input
                      placeholder='your name '
                      name='first name'
                      type='text'
                      required=''
                    />
                  </div>
                  <div className='sec-right'>
                    <label className='contact-form-text'>Email</label>
                    <input
                      placeholder='xxx@xx.com '
                      name='first name'
                      type='email'
                      required=''
                    />
                  </div>
                </div>
                <div className='contact-form-right contact-field2'>
                  <input
                    type='submit'
                    value='send message'
                  />
                </div>
                <div className='clearfix'></div>
                <div className='form-tx contact-field3'>
                  <label className='contact-form-text'>Message</label>
                  <textarea
                    className='form-control'
                    name='message'
                    rows='3'
                    placeholder='Message'
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
