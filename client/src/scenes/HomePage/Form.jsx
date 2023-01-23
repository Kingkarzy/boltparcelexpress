import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Form() {
    const navigate = useNavigate();
    const [packageId, setPackageId] = useState("");
    const [result, setResult] = useState([]);

    function handleSubmit (e) {
       e.preventDefault();
       axios
       .get(`http://localhost:5000/users/${packageId}`)
       .then((response) => {
            setResult(response.data);
        })
       .catch((error) => console.log(error));
    };
    
  return (
    <div>
        <form
            onSubmit={handleSubmit}
        >
            <input
            aria-label='.'
            type='number'
            name='parcel'
            id='track_no'
            value={packageId}
            onChange={e => setPackageId(e.target.value)}
            className='form-control mb-3'
            style={{ borderWidth: '3px', width: '100%' }}
            />
            <input
            type='submit'
            className='btn btn-success btn-lg'
            id='submit'
            name='submit'
            value='Track'
            />
        </form>

{/**********   PACKAGE DETAILS */}
        <div style={{ width: '100%', height: '300px', backgroundColor: 'gold', color:'black'} }> 
            
            <ul>
             {
                result.map((item, index) => (
                    <li key={index}> {item.packageId} {item.packageName}</li>
                ))     
             } 
            </ul>
        </div>
        
    </div>
  )
}

export default Form