import React from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const theme = createTheme();

const LabRequest = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={4} p={{ xs: 1, md: 2 }} sx={{ ml:7 }}>
        <Sidebar />
      </Box>
    <div style={{alignItems: "center", justifyContent: "center" }}>
      <h2 style={{ marginLeft: "4em" }}>Lab Request</h2>

    <div style={{display: "flex", flexDirection: "row"}}>
      <form style={{ marginLeft: "10em" }}>
        <label>
            Chemistry
        </label>
      </form>
        <form style={{marginLeft: "10em" }}>
        <label>
            Urea
        </label>
        </form>
    </div>

    <div style={{display: "flex", flexDirection: "row"}}>
      <form style={{ marginLeft: "10em" }}>
        <label>
            Anatomical Pathology
        </label>
      </form>
    </div>

    <div style={{display: "flex", flexDirection: "row"}}>
      <form style={{ marginLeft: "10em" }}>
        <label>
            Hematology
        </label>
      </form>
    </div>

    <div style={{display: "flex", flexDirection: "row"}}>
      <form style={{ marginLeft: "10em" }}>
        <label>
            Imaging
        </label>
      </form>
    </div>

    <div style={{display: "flex", flexDirection: "row"}}>
      <form style={{marginLeft: "10em" }}>
        <label>
            Markers
        </label>
        </form>
        <form style={{marginLeft: "10em" }}>
        <label>
            CEA
        </label>
        </form>
    </div>

    <div style={{display: "flex", flexDirection: "row"}}>
      <form style={{ marginLeft: "10em" }}>
        <label>
              MICROBIOLOGY
        </label>
      </form>
    </div>

    <div style={{display: "flex", flexDirection: "row"}}>
      <form style={{marginLeft: "10em" }}>
        <label>
            SEROLOGY
        </label>
        </form>
        <form style={{ marginLeft: "10em" }}>
        <label>
            PICT FOR DIV
        </label>
        </form>
    </div>
                <Box component="form" noValidate sx={{ mt: 1, ml: 10, mr: 85 }}>
                  {/* RPR(VDRL) - Select */}
                  <Box sx={{ minWidth: 190, mb: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Change Spot</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="RPR-VDRL"
                    >
                      <MenuItem>Positive</MenuItem>
                      <MenuItem>Negative</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                </Box>

                <Button
                    type="submit"
                    variant="contained"
                      sx={{ mt: 3, mb: 2, ml: 10, alignItems: "center" }}
                  >
                Add Results
                </Button>
    </div>
    </ThemeProvider>
  )
}

export default LabRequest