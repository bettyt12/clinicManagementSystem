import * as React from 'react'

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from '../../components/Sidebar/Sidebar';

const theme = createTheme();

const AddFamilyPlan = () => {
  const [hivResult, sethivResult] = React.useState('');
  const [VIAResult, setVIAResult] = React.useState('');
  const [contraceptive, setContraceptive] = React.useState('');

  const handlehivResult = (event) => {
    sethivResult(event.target.value);
  };

  const handleVIAResult = (event) => {
    setVIAResult(event.target.value);
  };

  const handleContraceptive = (event) => {
    setContraceptive(event.target.value);
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
              marginTop: 2,
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
            <Box component="form" noValidate sx={{ mt: 1, ml: 3 }}>

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

              {/* Date and Time Picker - Registration and Appointment*/}

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
            }}
          >
                    {/* Typo-1 */}
            <Typography component="h1" variant="h5">
              Counseling and Testing
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3  }}>
              <Grid item xs={12} sm={8}>
                <FormGroup>
                  <FormControlLabel label="HIV Test Offered" control={<Checkbox />} />
                </FormGroup>
              </Grid>

              <FormGroup>
                <FormControlLabel label="HIV Test Performed" control={<Checkbox />} />
              </FormGroup>

              {/*HIV Test Result - Select */}
              <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">HIV Test Result</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={hivResult}
                      label="HIV Test Result"
                      onChange={handlehivResult}
                    >
                      <MenuItem>Positive</MenuItem>
                      <MenuItem>Negative</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <FormGroup>
                  <FormControlLabel label="HIV specific Counseling Offerd" control={<Checkbox />} />
                </FormGroup>

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
            }}
          >
                    {/* Typo-1 */}
            <Typography component="h1" variant="h5">
              VIA Screening and Test Result
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3  }}>
              
              <Grid item xs={12} sm={8} >
                <FormGroup>
                  <FormControlLabel sx={{ mb: 1 }} label="VIA Screening - Women ages 30 - 49" control={<Checkbox />} />
                </FormGroup>
              </Grid>

                {/*VIA Test Result - Select */}
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">VIA Test Result</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={VIAResult}
                      label="VIA Test Result"
                      onChange={handleVIAResult}
                    >
                      <MenuItem>Positive</MenuItem>
                      <MenuItem>Negative</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <FormGroup>
                  <FormControlLabel label="Cryotherapy Given" control={<Checkbox />} />
                </FormGroup>
              
            </Box>
          </Box>
        </Container>
      </Grid>

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
            <Typography component="h1" variant="h5" sx={{ml: 5}}>
              Clinical Services and Contraceptive Services
            </Typography>
          </Box>

          {/* Form*/}
          <Box component="form" noValidate sx={{ mt: 1, ml: 8  }}>
              
              <Grid item xs={12} sm={8} >
                <FormGroup>
                  <FormControlLabel label="TT Status Checked" control={<Checkbox />} />
                </FormGroup>
              </Grid>

              <FormGroup>
                <FormControlLabel label="Contradiction with IUCD" control={<Checkbox />} />
              </FormGroup>

                {/* Contraceptive - Select */}
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Contraceptive</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={contraceptive}
                      label="Contraceptive"
                      onChange={handleContraceptive}
                    >
                      <MenuItem>IUCD</MenuItem>
                      <MenuItem>ING</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              
            </Box>

          </Container>
          </Grid>
      <Button
        type="submit"
        variant="contained"
          sx={{ mt: 3, mb: 2, ml: 10, alignItems: "center" }}
      >
        Add Family Plan
      </Button>

      </ThemeProvider>
  )
}

export default AddFamilyPlan