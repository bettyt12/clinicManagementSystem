import * as React from 'react'

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from '../../components/Sidebar/Sidebar';

const theme = createTheme();

const DoctorLabRequest = () => {

  return (
    <ThemeProvider theme={theme}>
      <Box flex={4} p={{ xs: 1, md: 2 }} sx={{ ml:7 }}>
        <Sidebar />
      </Box>

      <Grid container item xs={10} sm={12}>
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
              CHEMISTRY
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3 }}>
                <FormGroup>
                  <FormControlLabel label="Urea" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="Creatinin" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="GOT" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="LDH" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="T.Billi / D.Billi" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="FBS / RBS" control={<Checkbox />} />
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
              MARKERS
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3 }}>
                <FormGroup>
                  <FormControlLabel label="CEA" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="CA-125" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="AFP" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="HGBAIc" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="Prolactin" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="FSH" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="LH" control={<Checkbox />} />
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
              SEROLOGY
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3  }}>
              
              <Grid item xs={12} sm={8} >
                <FormGroup>
                  <FormControlLabel label="PICT FOR RVI" control={<Checkbox />} />
                </FormGroup>
              </Grid>

                <FormGroup>
                  <FormControlLabel label="HCV" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="HBsAg" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="H.PHYLORI" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="RPR(VDRL)" control={<Checkbox />} />
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
              HEMATOLOGY
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3  }}>
                <FormGroup>
                  <FormControlLabel label="ESR" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="CBC" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="HCT" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="ABO & Rh(D)" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="MALARIA" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="PARASITES" control={<Checkbox />} />
                </FormGroup>
            </Box>
          </Box>
        </Container>

        {/* Microbiology */}
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
              MICROBIOLOGY
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3  }}>
                <FormGroup>
                  <FormControlLabel label="Urine Chemical" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="Urine Microscopy" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="Stool Microscopy" control={<Checkbox />} />
                </FormGroup>

            </Box>
          </Box>
        </Container>

        {/* Anatomical Pathology */}
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
              ANATOMICAL PATHOLOGY
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3  }}>
                <FormGroup>
                  <FormControlLabel label="Pap Smear" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="VIA" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="KOH" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="WETMOUNT" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="GRAM STAIN" control={<Checkbox />} />
                </FormGroup>

            </Box>
          </Box>
        </Container>

        {/* IMAGING */}
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
              IMAGING
            </Typography>

                    {/* Form*/}
            <Box component="form" noValidate sx={{ mt: 1, ml: 3  }}>
                <FormGroup>
                  <FormControlLabel label="X-RAY" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="ABDOMIN PELVIC US" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="PELVIC US" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="OBS US" control={<Checkbox />} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel label="SEMEN" control={<Checkbox />} />
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
        Add Request
      </Button>
    </ThemeProvider>
  )
}

export default DoctorLabRequest;