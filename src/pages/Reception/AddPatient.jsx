import * as React from 'react'

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

const AddPatient = () => {
  const [gender, setGender] = React.useState('');
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleType = (event) => {
    setType(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>

      <Box flex={4} p={{ xs: 1, md: 2 }} sx={{ml:7}}>
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
            Add Patient
          </Typography>

                {/* Form */}
          <Box component="form" noValidate  sx={{ mt: 2, ml: 2 }}>
            <Grid container spacing={2}>

              {/* Card Num*/}
              <Grid item xs={12} sx={{ml: 5}}>
                <TextField
                  autoComplete="cardnumber"
                  name="Card Number"
                  required
                  id="cardNum"
                  label="Card Number"
                  type="number"
                  autoFocus
                />
              </Grid>

              {/* Names */}
              <Grid item xs={12} sm={4} sx={{ml: 5}}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="firstName"
                />
              </Grid>

              <Grid item xs={12} sm={4} sx={{ml: 5}}>
                <TextField
                  required
                  fullWidth
                  id="middleName"
                  label="Middle Name"
                  name="middleName"
                  autoComplete="middleName"
                />
              </Grid>

              <Grid item xs={12} sm={4} sx={{ml: 5}}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lastName"
                />
              </Grid>

              <Grid item xs={12} sm={4} sx={{ml: 5}}>
                <TextField sx={{ minWidth: 120 }}
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  type="number"
                  name="age"
                  autoComplete="age"
                />
              </Grid>

              <Grid item xs={12} sm={6} sx={{ml: 5}}>
                <FormControl sx={{ minWidth: 200 }}>
                  <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={gender}
                    label="Gender"
                    onChange={handleChange}
                  >
                    <MenuItem>Male</MenuItem>
                    <MenuItem>Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

            {/* Contact Info */}
            <Grid item xs={12} sm={2} sx={{ml: 5}}>
                <TextField
                  required
                  fullWidth
                  id="kebele"
                  label="Kebele"
                  name="kebele"
                  autoComplete="kebele"
                  type="number"
                />
              </Grid>

              <Grid item xs={12} sm={4} sx={{ml: 5}}>
                <TextField
                  required
                  fullWidth
                  id="wereda"
                  label="Wereda"
                  name="wereda"
                  autoComplete="wereda"
                  type="number"
                />
              </Grid>

              <Grid item xs={12} sm={4} sx={{ml: 5}}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  type="number"
                />
              </Grid>

              <Grid item xs={12} sm={6} sx={{ml: 5}}>
                <FormControl sx={{ minWidth: 200 }}>
                  <InputLabel id="demo-simple-select-helper-label">Card Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={type}
                    label="Card Type"
                    onChange={handleType}
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
              Add Patient
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default AddPatient