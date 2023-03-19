import * as React from 'react'

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from '../../components/Sidebar/Sidebar';

const theme = createTheme();

const LabReport = () => {

    const [VIAResult, setVIAResult] = React.useState('');

    const handleVIAResult = (event) => {
        setVIAResult(event.target.value);
      };

  return (
    <ThemeProvider theme={theme}>
      <Box flex={4} p={{ xs: 1, md: 2 }} sx={{ ml:7 }}>
        <Sidebar />
      </Box>

      <Grid container item xs={12} sm={8}>
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
                    {/* Typo-1 */}
            <Typography component="h1" variant="h5">
              CHEMISTRY
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 5 }}>
              <TextField
                margin="normal"
                required
                id="urea"
                label="Urea"
                name="urea"
                autoComplete="urea"
                autoFocus
                type="number"
              />
              <TextField
                margin="normal"
                required
                name="creatinin"
                label="Creatinin"
                id="creatinin"
                autoComplete="creatinin"
                type="number"
              />
              <TextField
                margin="normal"
                required
                name="got"
                label="GOT"
                id="got"
                type="number"
              />
              <TextField
                margin="normal"
                required
                name="ldh"
                label="LDH"
                id="ldh"
                autoComplete="ldh"
                type="number"
              />
              <TextField
                margin="normal"
                required
                name="t-billi"
                label="T.Billi / D.Billi"
                id="t-billi"
                type="number"
              />
              <TextField
                margin="normal"
                required
                name="fbs"
                label="FBS / RBS"
                id="fbs"
                type="number"
              />
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
                    {/* Typo-1 */}
            <Typography component="h1" variant="h5">
              MARKERS
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 5  }}>
                <TextField
                    margin="normal"
                    required
                    id="cea"
                    label="CEA"
                    name="cea"
                    autoFocus
                    type="number"
                />
                <TextField
                    margin="normal"
                    required
                    name="ca125"
                    label="CA125"
                    id="ca125"
                    autoComplete="ca125"
                    type="number"
                />
                <TextField
                    margin="normal"
                    required
                    name="afp"
                    label="AFP"
                    id="afp"
                    type="number"
                />
                <TextField
                    margin="normal"
                    required
                    name="hgbaic"
                    label="HGBAIc"
                    id="hgbaic"
                    autoComplete="hgbaic"
                    type="number"
                />
                <TextField
                    margin="normal"
                    required
                    name="fsh"
                    label="FSH"
                    id="fsh"
                    type="number"
                />
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
              SEROLOGY
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3  }}>

                {/*PICT FOR RVI  - Select */}
                <Box sx={{ minWidth: 160, mb: 2, mt: 3 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">PICT FOR RVI</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={VIAResult}
                      label="PICT FOR RVI"
                      onChange={handleVIAResult}
                    >
                      <MenuItem>Positive</MenuItem>
                      <MenuItem>Negative</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                {/*HCV - Select */}
                <Box sx={{ minWidth: 120, mb: 2 }}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">HCV</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={VIAResult}
                      label="HCV"
                      onChange={handleVIAResult}
                    >
                      <MenuItem>Positive</MenuItem>
                      <MenuItem>Negative</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                {/*HBsAg - Select */}
                <Box sx={{ minWidth: 120, mb: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">HBsAg</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={VIAResult}
                      label="HBsAg"
                      onChange={handleVIAResult}
                    >
                      <MenuItem>Positive</MenuItem>
                      <MenuItem>Negative</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                {/* H.PHYLORI - Select */}
                <Box sx={{ minWidth: 120, mb: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">H.PHYLORI</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={VIAResult}
                      label="H.PHYLORI"
                      onChange={handleVIAResult}
                    >
                      <MenuItem>Positive</MenuItem>
                      <MenuItem>Negative</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                {/* RPR(VDRL) - Select */}
                <Box sx={{ minWidth: 120, mb: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">RPR-VDRL</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={VIAResult}
                      label="RPR-VDRL"
                      onChange={handleVIAResult}
                    >
                      <MenuItem>Positive</MenuItem>
                      <MenuItem>Negative</MenuItem>
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
              marginLeft: 10
            }}
          >
                    {/* Typo-1 */}
            <Typography component="h1" variant="h5">
              HEMATOLOGY
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3  }}>
                <TextField
                    margin="normal"
                    required
                    id="esr"
                    label="ESR"
                    name="esr"
                    autoFocus
                    type="number"
                />
                <TextField
                    margin="normal"
                    required
                    name="cbc"
                    label="CBC"
                    id="cbc"
                    autoComplete="cbc"
                    type="number"
                />
                <TextField
                    margin="normal"
                    required
                    name="afp"
                    label="AFP"
                    id="afp"
                    type="number"
                />
                <TextField
                    margin="normal"
                    required
                    name="hct"
                    label="HCT"
                    id="hct"
                    autoComplete="hct"
                    type="number"
                />
                <TextField
                    margin="normal"
                    required
                    name="abo"
                    label="ABO & Rh(D)"
                    id="abo"
                    type="number"
                />
            </Box>
          </Box>
        </Container>
      </Grid>

      {/* Second Grid*/}

      <Grid container spacing={2}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
                    {/* Typo-1 */}
            <Typography component="h1" variant="h5">
              MALARIA
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3 }}>

            <Grid item xs={12} sm={8} >
              <TextField
                margin="normal"
                required
                fullWidth
                id="quantity"
                label="Quantity"
                name="quantity"
                autoComplete="quantity"
                autoFocus
                type="number"
              />
            </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                name="stage"
                label="Stage"
                id="stage"
                autoComplete="stage"
                type="number"
              />
            </Box>
          </Box>
        </Container>

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
                    {/* Typo-1 */}
            <Typography component="h1" variant="h5">
              MICROBIOLOGY
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3 }}>

            <Grid item xs={12} sm={8} >
              <TextField
                margin="normal"
                required
                fullWidth
                id="urineTest"
                label="Urine Chemical Test"
                name="urineTest"
                autoComplete="urineTest"
                autoFocus
                type="number"
              />
            </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                name="urineMicroscopy"
                label="Urine Microscopy"
                id="urineMicroscopy"
                autoComplete="urineMicroscopy"
                type="number"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="stoolMicroscopy"
                label="Stool Microscopy"
                id="stoolMicroscopy"
                autoComplete="stoolMicroscopy"
                type="number"
              />
            </Box>
          </Box>
        </Container>

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
                    {/* Typo-1 */}
            <Typography component="h1" variant="h5">
              ANATOMICAL PATHOLOGY
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3 }}>

            <Grid item xs={12} sm={8} >
              <TextField
                margin="normal"
                required
                fullWidth
                id="papSmear"
                label="Pap Smear"
                name="papSmear"
                autoComplete="papSmear"
                autoFocus
                type="number"
              />
            </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                name="via"
                label="VIA"
                id="via"
                autoComplete="via"
                type="number"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="koh"
                label="KOH"
                id="koh"
                autoComplete="koh"
                type="number"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="wetMount"
                label="Wet Mount"
                id="wetMount"
                autoComplete="wetMount"
                type="number"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="gramStain"
                label="Gram Stain"
                id="gramStain"
                autoComplete="gramStain"
                type="number"
              />
            </Box>
          </Box>
        </Container>
        </Grid>

        <Button
        type="submit"
        variant="contained"
          sx={{ mt: 3, mb: 2, ml: 10, alignItems: "center" }}
      >
        Add Lab Report
      </Button>
    </ThemeProvider>
  )
}

export default LabReport