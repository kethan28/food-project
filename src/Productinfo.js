import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import pic from './Images/Image.jpg'
import { width } from '@mui/system';
import "./Productinfo.css";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
}));

export default function Productinfo() {
    return (
        <Box sx={{ flexGrow: 1, padding: "3rem" }}>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <Button size="medium" >
                       <div className='button'> <b>X </b></div>
                    </Button>
                </Grid>
                <Grid item xs={11}>
                    <Typography variant="h6" align='center' component="h2">
                        <b>PRODUCT INFO</b>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <img className='banner' src={pic} alt="BigCo Inc. logo" />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>
                        Simply put, biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot. It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations.
                         It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>
                        Simply put, biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot. It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations.
                         It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations.

                    </Typography>
                </Grid>

                <Grid item xs={8} >
                <Button size="medium">
                       <div className='button'> <Typography variant="h4" align='center' component="h2">
                      <b>  -</b>
                    </Typography></div> 
                    </Button>
                    <p className='text'>1</p>
                    <Button size="medium">
                       <div className='button'><Typography variant="h4" align='center' component="h2">
                       <b> +</b>
                    </Typography></div> 
                    </Button>
                    <p className='text1'>$100</p>
                </Grid>
            </Grid>
        </Box>
    );
}
