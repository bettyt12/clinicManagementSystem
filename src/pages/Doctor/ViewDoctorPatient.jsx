import React, { useState } from 'react'

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from '../../components/Sidebar/Sidebar';

const theme = createTheme();

const ViewDoctorPatient = () => {

    const [textarea, setTextarea] = useState();
    
      const handleChange = (event) => {
        setTextarea(event.target.value)
      }

  return (
    <div>
    <ThemeProvider theme={theme}>
      <Box flex={4} p={{ xs: 1, md: 2 }} sx={{ ml:7 }}>
        <Sidebar />
      </Box>

    <Grid>

      <Grid container item xs={12} sm={10}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 10
            }}
          >
                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 5 }}>
            <form>
                <textarea onChange={handleChange}>Chef Complaint</textarea>
            </form>
            </Box>
          </Box>
        </Container>

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 10
            }}
          >
                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 5 }}>
            <form>
                <textarea onChange={handleChange}>Diagnosis</textarea>
            </form>
            </Box>
          </Box>
        </Container>

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 10
            }}
          >

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 5 }}>
            <form>
                <textarea onChange={handleChange}>HPI</textarea>
            </form>
            </Box>
          </Box>
        </Container>

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 10
            }}
          >

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 5 }}>
            <form>
                <textarea onChange={handleChange}>Progress Note</textarea>
            </form>
            </Box>
          </Box>
        </Container>

       </Grid>

            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 12 }}
              >
                Add  
            </Button>

        <Grid container item xs={10} sm={12}>
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 10 }}
              >
                Request Lab Test  
            </Button>
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 10 }}
              >
                Write Prescription 
            </Button>
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 10 }}
              >
                Medical Certificate  
            </Button>
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 10 }}
              >
                Admit Patient  
            </Button>
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 10 }}
              >
                See Investigations  
            </Button>
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 10 }}
              >
                See Previous Details 
            </Button>
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 10 }}
              >
                Appointment  
            </Button>
          </Grid>
          </Grid>
  </ThemeProvider>
  </div>
  );
}

export default ViewDoctorPatient;