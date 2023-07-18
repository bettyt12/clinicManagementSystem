import React from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import Box from '@mui/material/Box';

const theme = createTheme();

const LabInvestigation = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={4} p={{ xs: 1, md: 2 }} sx={{ ml:7 }}>
        <Sidebar />
      </Box>
    <div style={{alignItems: "center", justifyContent: "center" }}>
      <h2 style={{ marginLeft: "4em" }}>Lab Investigations</h2>

    <div style={{display: "flex", flexDirection: "row"}}>
      <form style={{ marginLeft: "10em" }}>
        <label>
            Urea
        </label>
      </form>
        <form style={{marginLeft: "10em" }}>
        <label>
            58
        </label>
        </form>
    </div>

    <div style={{display: "flex", flexDirection: "row"}}>
      <form style={{marginLeft: "10em" }}>
        <label>
            PICT FOR RVI
        </label>
        </form>
        <form style={{marginLeft: "5em" }}>
        <label>
            NEGATIVE
        </label>
        </form>
    </div>

    <div style={{display: "flex", flexDirection: "row"}}>
      <form style={{marginLeft: "10em" }}>
        <label>
            CEA: 
        </label>
        </form>
        <form style={{ marginLeft: "10em" }}>
        <label>
            123
        </label>
        </form>
    </div>
    </div>
    </ThemeProvider>
  )
}

export default LabInvestigation