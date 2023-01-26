import {
  Card,
  CardContent,
  Divider,
  IconButton,
} from '@mui/material';
import NearMeIcon from '@mui/icons-material/NearMe';

const Contact = () => {
  return (
    <div>
      <div className='w3ls-section banner-single py-md-5'>
        <div className='container py-4 mt-2'>
          <h3 className='tittle-w3ls text-center mb-3'>
            Get In Touch
          </h3>
          <div className='row about-inner-main mt-md-4'>
            <Card className='col-md-6 contact-left'>
              <CardContent className='agile-contact-top'>
                <h3>Address </h3>
                <h6
                  style={{
                    // color: 'rgb(185, 180, 180)',
                    margin: '15px',
                  }}
                >
                  We’d Love To Hear From You.
                </h6>
                <div style={{ textAlign: 'left' }}>
                  <p>
                    <IconButton sx={{ padding: '0' }}>
                      <NearMeIcon />
                    </IconButton>
                    &emsp; 7899 Cedarwood Dr. San Jose, CA 95116
                    California, United States.
                  </p>

                  <br />
                  <p>
                    <IconButton sx={{ padding: '0' }}>
                      <NearMeIcon />
                    </IconButton>
                    &emsp; 70372 Baden-Wurttemberg Stuttgart, Germany{' '}
                  </p>
                </div>
              </CardContent>
              <div className='contact-bottom'>
                <iframe
                  style={{ borderWidth: 0 }}
                  title='map'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3060153584!2d-74.2598711799434!3d40.69714940555201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1510842846108'
                ></iframe>
              </div>
            </Card>
            {/* <Divider orientation='vertical' flexItem/> */}
            <Card className='col-md-6 w3layouts-reg-form contact-form-row-agileinfo'>
              <h4 className='form-con-txt text-center mb-2'>
                Contact Us
              </h4>
              <form
                action='#'
                method='post'
                className='banner_form '
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
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
