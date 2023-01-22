import React from 'react';
const Track = () => {
  return (
    <section className='gallery py-md-5'>
      <div className='container'>
        <div>
          <label>Enter your tracking number</label>
          <form
            action='#'
            method='GET'
            data-track-and-trace-form='utapi'
            autosubmit='true'
          >
            <div>
              <div>
                <input
                  id='tracking-input'
                  type='input'
                  name='packageId'
                />
                <label>up to 10 codes</label>
                <button type='submit'>Track</button>
              </div>
            </div>
            <p>Enter tracking number(s)</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Track;
