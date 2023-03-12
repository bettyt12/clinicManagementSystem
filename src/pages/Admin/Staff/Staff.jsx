import React, { useState } from 'react'
import { Box, useMediaQuery, useTheme } from "@mui/material";

import Sidebar from '../../../components/Sidebar/Sidebar';

import Header from "../../../components/Header/Header";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const Staff = () => {

    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    
    const [position, setPosition] = useState('');

    const handleChange = (event) => {
        setPosition(event.target.value);
    };

  return (
    <div>
        <Box flex={4} p={{ xs: 1, md: 2 }} sx={{ml:7}}>
            <Sidebar />
        </Box>

        <Box m="20px">
        {/* HEADER */}
        <Box
            display={smScreen ? "flex" : "block"}
            flexDirection={smScreen ? "row" : "column"}
            justifyContent={smScreen ? "space-between" : "start"}
            alignItems={smScreen ? "center" : "start"}
            m="15px 10px"
        >
        <Header title="Staff" subtitle="Below are the Staff" />

      </Box>

      {/* ADD STAFF */}

      {/* Form */}
      <Box component="form" noValidate sx={{ mt: 2, ml: 2 }}>
        
      <Grid container spacing={2}>
        {/* ID */}
        <Grid item xs={12} sm={2} sx={{ml: 5}}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="id"
                label="ID"
                name="id"
                type="number"
                autoComplete="id"
                autoFocus
            />
        </Grid>

        <Grid item xs={12} sm={2} sx={{ml: 5}}>
        {/* Username */}
            <TextField
                margin="normal"
                required
                fullWidth
                name="username"
                label="Username"
                type="text"
                id="username"
                autoComplete="current-username"
            />
        </Grid>

        <Grid item xs={12} sm={2} sx={{ml: 5}}>
        {/* Password */}
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
        </Grid>

        <Grid item xs={12} sm={2} sx={{ml: 5}}>
        {/* First Name */}
        <TextField
            margin="normal"
            required
            fullWidth
            name="firstName"
            label="First Name"
            type="text"
            id="firstName"
            autoComplete="current-firstName"
        />
        </Grid>

        <Grid item xs={12} sm={2} sx={{ml: 5}}>
        {/* Last Name */}
        <TextField
            margin="normal"
            required
            fullWidth
            name="lastName"
            label="Last Name"
            type="text"
            id="lastName"
            autoComplete="current-lastName"
        />
        </Grid>

        <Grid item xs={12} sm={2} sx={{ml: 5}}>
        {/* Phone Number */}
        <TextField
            margin="normal"
            required
            fullWidth
            name="phoneNumber"
            label="Phone Number"
            type="number"
            id="phoneNumber"
            autoComplete="current-phoneNumber"
        />
        </Grid>

            {/* Select */}
            <Grid item xs={12} sm={2} sx={{mt: 2, ml: 5}}>
                <FormControl sx={{ minWidth: 200 }}>
                  <InputLabel id="demo-simple-select-helper-label">Position</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={position}
                    label="Position"
                    onChange={handleChange}
                  >
                    <MenuItem>Doctor</MenuItem>
                    <MenuItem>Nurse</MenuItem>
                    <MenuItem>Laboratory</MenuItem>
                    <MenuItem>Reception</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

            </Grid> 

        <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, ml: 5}}
        >
            Add Staff
        </Button>
        </Box>
      </Box>

      <div>
        {/* Staff Table */}
      </div>
    </div>
  )
}

export default Staff