import React from 'react';
import { FormControl, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { requestApi } from '../../actions/requestApi';
import DisplayEmployeeRequests from './DisplayEmployeeRequests'

export default function Employee(){

const dispatch= useDispatch();
  const  initialEmployeeState={
        "name":"",
        "doc":"",
        "purpose":"",
        "amount":"",
        "status":"Pending"
    }

    const [EmployeeState, setEmployeeState]= useState(initialEmployeeState)

    function handleChange(event){

        const value = event.target.value;
       // console.log(event.target.value)

        setEmployeeState({
         ...EmployeeState,
        [event.target.id]: value

  });
 // console.log(EmployeeState)
    }
    function handlebuttonClick(event){
        dispatch(requestApi(EmployeeState))
        console.log("clicked")
      
        console.log(EmployeeState)
    }
    return (
        <>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
            <h1>Employee Side</h1>
          <TextField id="name" onChange={handleChange} label="Name" variant="outlined" />
          <TextField id="doc" onChange={handleChange} label="Date of claim" variant="outlined" />
          <TextField id="purpose" onChange={handleChange} label="Purpose of the claim" variant="outlined" />
          <TextField id="amount" onChange={handleChange} label="Amount to be claimed" variant="outlined" />
          <TextField id="status" onChange={handleChange} label="status" value="Pending" variant="outlined" />

          <Button id="claim-btn" onClick={handlebuttonClick}variant="outlined">Request Claim</Button>
          
        </Box>
        <DisplayEmployeeRequests/>
        </>
      );
}