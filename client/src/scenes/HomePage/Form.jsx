import React, { useState } from 'react';
import {
    Box,
    Typography,
    Card,
    CardMedia,
    FormControl,
    TextField,
    Paper,
    InputBase,
    Divider,
    Button,
    IconButton,
    Link,
    InputLabel,
  } from '@mui/material';
//   import * as yup from "yup"
  import { Formik } from "formik";
  import { useNavigate, useParams } from "react-router-dom";
import Read from './Read.jsx'

//   const packageSchema = yup.object().shape({
//     packageId: yup.number().packageId("invalid track id").required("required"),
//   });

const Form = () => {
    const navigate = useNavigate();;
    const [packageId, setPackageId] = useState([]); 


    const handleSubmit = async ({packageId}) => {

        const packageResponse  = await fetch(`http://localhost:5000/users/${packageId}`, {
            method: "GET", 
            headers: { "Content-Type": "application/json" },
            // body: JSON.stringify(packageId),
          });

        const packageData = await packageResponse.json();

        alert("packageResponse");
            if (packageData) {
            navigate("./Read");
             }
             else{
                alert("Enter a valid tracking number ")
             }
         }
    



    return (
            <form>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                position={'relative'}
                width={'100%'}
                height={'100%'}
                p={2}
                sx={{ width: '45rem', display: 'inline-block', textAlign: 'center' }}
                >
                <Typography
                    variant='h4'
                    sx={{
                    margin: '0.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: '800',
                    }}
                >
                    Track Your Package
                </Typography>
                <Paper
                    component='form'
                    sx={{
                    p: '2px 4px',
                    display: 'flex',
                    justifyContent: 'center',
                    width: '30rem',
                    margin: '1rem auto',
                    boxShadow: '1px',
                    }}
                >   
                <TextField
                    label="Enter Tracking Number"
                     type="number"
                    // onBlur={handleBlur}
                    onChange={(e) => setPackageId(e.target.value)}
                    value={packageId}
                    name="packageID"
                    placeholder='Enter Tracking Number'
                    // error={Boolean(touched.packageId) && Boolean(errors.packageId)}
                    // helperText={touched.packageId && errors.packageId}
                    sx={{  }}
                    />
                    <Divider
                    sx={{ height: 28, m: 0.5 }}
                    orientation='vertical'
                    />

                    <Button type="submit" onClick={handleSubmit}>TRACK</Button>
                </Paper>
                </Card>
            </Box>
            </form>
    )
}

export default Form;
