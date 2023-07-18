import React from 'react'

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Sidebar from '../../components/Sidebar/Sidebar';

const theme = createTheme();

const AddVitalSign = () => {

  const [physician, setPhysician] = React.useState('');
  const [changeSpot, setChangeSpot] = React.useState('');

  const handlePhysician = (event) => {
    setPhysician(event.target.value);
  };

  const handleChangeSpot = (event) => {
    setChangeSpot(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box flex={4} p={{ xs: 1, md: 2 }} sx={{ ml:7 }}>
      <Sidebar />
    </Box>

    <Container component="main"> 
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
              {/* Add Patient */}
        <Typography component="h1" variant="h5">
          Add Vital Signs
        </Typography>

              {/* Form */}
        <Box component="form" noValidate  sx={{ mt: 2, ml: 2 }}>
          <Grid container spacing={2}>

            {/* Card Num*/}
            <Grid item xs={12} sx={{ml: 5}}>
              <TextField
                autoComplete="bloodPressure"
                name="Blood Pressure"
                required
                id="bloodPressure"
                label="Blood Pressure"
                type="number"
                autoFocus
              />
            </Grid>

            {/* Names */}
            <Grid item xs={12} sm={4} sx={{ ml: 5 }}>
              <TextField
                required
                fullWidth
                id="temperature"
                label="Temperature"
                name="temperature"
                autoComplete="temperature"
                type="number"
              />
            </Grid>

            <Grid item xs={12} sm={4} sx={{ ml: 5 }}>
              <TextField
                required
                fullWidth
                id="weight"
                label="Weight"
                name="weight"
                autoComplete="weight"
              />
            </Grid>

            <Grid item xs={12} sm={4} sx={{ml: 5}}>
              <TextField
                required
                fullWidth
                id="height"
                label="Height"
                name="height"
                autoComplete="height"
                type="number"
              />
            </Grid>

            <Grid item xs={12} sm={4} sx={{ml: 5}}>
              <TextField
                required
                fullWidth
                id="pulse"
                label="Pulse"
                type="number"
                name="pulse"
                autoComplete="pulse"
              />
            </Grid>

            <Grid item xs={12} sm={4} sx={{ml: 5}}>
              <TextField
                required
                fullWidth
                id="oxygen"
                label="Oxygen Saturation"
                type="number"
                name="oxygen"
                autoComplete="oxygen"
              />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ml: 5}}>
              <FormControl sx={{ minWidth: 200 }}>
                <InputLabel id="demo-simple-select-helper-label">Physician</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={physician}
                  label="Physician"
                  onChange={handlePhysician}
                >
                  <MenuItem>Doctor</MenuItem>
                  <MenuItem>Laboratory</MenuItem>
                  <MenuItem>Nurse</MenuItem>
                  <MenuItem>Reception</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ml: 5}}>
              <FormControl sx={{ minWidth: 200 }}>
                <InputLabel id="demo-simple-select-helper-label">Change Spot to</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={changeSpot}
                  label="Change Spot"
                  onChange={handleChangeSpot}
                >
                  <MenuItem >Working Hours</MenuItem>
                  <MenuItem >Emergency</MenuItem>
                </Select>
              </FormControl>
            </Grid>

          </Grid>

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 3, ml: 5}}
          >
            Add Vital Sign
          </Button>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  )
}

export default AddVitalSign