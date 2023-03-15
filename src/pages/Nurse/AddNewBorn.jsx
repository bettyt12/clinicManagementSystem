import * as React from 'react'

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from '../../components/Sidebar/Sidebar';

const theme = createTheme();

const AddNewBorn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box flex={4} p={{ xs: 1, md: 2 }} sx={{ ml:7 }}>
        <Sidebar />
      </Box>

      <Grid container spacing={2}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
                    {/* Typo-1 */}
            <Typography component="h1" variant="h5">
              Personal Information
            </Typography>

                    {/* Form*/}
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, ml: 3 }}>

            <Grid item xs={12} sm={8} >
              <TextField
                margin="normal"
                required
                fullWidth
                id="cardNumber"
                label="Card Number"
                name="cardNumber"
                autoComplete="cardNumber"
                autoFocus
              />
            </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                name="motherName"
                label="Mother Name"
                id="motherName"
                autoComplete="motherName"
              />

              {/* Date and Time Picker */}
              

              {/* Delivery Type - Select */}
              

              {/* Maternal Status - Select */}
              
            </Box>
          </Box>
        </Container>

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

                    {/* Typo-1 */}
            <Typography component="h1" variant="h5">
              Tsedal Clinic Management System
            </Typography>

                    {/* Form*/}
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, ml: 3  }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
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
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              
            </Box>
          </Box>
        </Container>

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
                    {/* Typo-1 */}
            <Typography component="h1" variant="h5">
              Tsedal Clinic Management System
            </Typography>

                    {/* Form*/}
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, ml: 3  }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
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
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              
            </Box>
          </Box>
        </Container>
      </Grid>
    </ThemeProvider>
  )
}

export default AddNewBorn