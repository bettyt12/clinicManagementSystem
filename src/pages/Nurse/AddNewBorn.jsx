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

const AddNewBorn = () => {

  const [deliveryType, setdeliveryType] = React.useState('');
  const [maternalStatus, setmaternalStatus] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [hivResult, sethivResult] = React.useState('');

  const handleDelivery = (event) => {
    setdeliveryType(event.target.value);
  };

  const handleMaternal = (event) => {
    setmaternalStatus(event.target.value);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handlehivResult = (event) => {
    sethivResult(event.target.value);
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

              {/* Date and Time Picker */}
              

              {/* Delivery Type - Select */}
               <Box sx={{ minWidth: 120, marginBottom:1 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Delivery Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={deliveryType}
                      label="Delivery Type"
                      onChange={handleDelivery}
                    >
                      <MenuItem>Delivered</MenuItem>
                      <MenuItem>Not Delivered</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

              {/* Maternal Status - Select */}
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Maternal Status</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={maternalStatus}
                      label="Maternal Status"
                      onChange={handleMaternal}
                    >
                      <MenuItem>Maternal</MenuItem>
                      <MenuItem>Not Delivered</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

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
              New Born
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3  }}>
              <Grid item xs={12} sm={8} >
                <FormGroup>
                  <FormControlLabel label="Alive" control={<Checkbox />} />
                </FormGroup>
              </Grid>

              <TextField
                margin="normal"
                required
                fullWidth
                name="agparScore"
                label="Agpar score"
                type="number"
                id="agparScore"
              />
              
              {/* Sex - Select */}
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={gender}
                      label="Sex"
                      onChange={handleGender}
                    >
                      <MenuItem>Male</MenuItem>
                      <MenuItem>Female</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <FormGroup>
                  <FormControlLabel label="Still Birth" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="Live Birth - Died Before Arrival" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="Live Birth - Died After Arrival" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="Alive" control={<Checkbox />} />
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
              Complications
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3  }}>
              
              <Grid item xs={12} sm={8} >
                <FormGroup>
                  <FormControlLabel label="Eclampsia" control={<Checkbox />} />
                </FormGroup>
              </Grid>

                <FormGroup>
                  <FormControlLabel label="APH" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="PPH" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="Other Obsticties" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="Complication Referd" control={<Checkbox />} />
                </FormGroup>
              
              
            </Box>
          </Box>
        </Container>
      </Grid>

      {/* Second Grid */}

      <Grid container spacing={4}>
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
              Maternal
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3  }}>
                <FormGroup>
                  <FormControlLabel label="Vitamin A" control={<Checkbox />} />
                </FormGroup>
            </Box>
          </Box>
        </Container>

        {/* New Born*/}
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
              New Born
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3  }}>
              
              <Grid item xs={12} sm={8} >
                <FormGroup>
                  <FormControlLabel label="BCG Given" control={<Checkbox />} />
                </FormGroup>
              </Grid>

                <FormGroup>
                  <FormControlLabel label="OPV0 Given" control={<Checkbox />} />
                </FormGroup>

                <TextField
                margin="normal"
                required
                fullWidth
                name="newBornMRN"
                label="New Borns MRN"
                type="text"
                id="newBornMRN"
              />
              
            </Box>
          </Box>
        </Container>

        {/* HIV Assessment */}
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
            <Typography component="h1" variant="h5" style={{marginLeft: "4em"}}>
              HIV Assessment and Services
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3  }}>
              
              <Grid item xs={12} sm={8} >
                <FormGroup>
                  <FormControlLabel label="HIV Testing Accepted" control={<Checkbox />} />
                </FormGroup>
              </Grid>

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
              
            </Box>
          </Box>
        </Container>

        {/* HIV Assessment */}
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
            <Typography component="h1" variant="h5" sx={{ml: 8}}>
              HIV+ Care and FollowUp
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 8  }}>
              
              <Grid item xs={12} sm={8} >
                <FormGroup>
                  <FormControlLabel label="HIV+ FollowUp" control={<Checkbox />} />
                </FormGroup>
              </Grid>

              <FormGroup>
                <FormControlLabel label="HIV+ FollowUp" control={<Checkbox />} />
              </FormGroup>

              <FormGroup>
                <FormControlLabel label="Counseled on Feeding Option" control={<Checkbox />} />
              </FormGroup>

              <FormGroup>
                <FormControlLabel label="Mother and Child care" control={<Checkbox />} />
              </FormGroup>
              
            </Box>
          </Box>
        </Container>

      </Grid>

      <Button
        type="submit"
        variant="contained"
          sx={{ mt: 3, mb: 3, ml: 10, alignItems: "center" }}
      >
        Add New Born
      </Button>
    </ThemeProvider>
  )
}

export default AddNewBorn