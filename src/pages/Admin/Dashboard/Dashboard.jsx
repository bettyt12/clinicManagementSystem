import React from 'react'

import Sidebar from '../../../components/Sidebar/Sidebar';
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Grid from '@mui/material/Grid';
import Header from "../../../components/Header/Header";
import StatBox from '../../../components/StatBox/StatBox';

import EmailIcon from "@mui/icons-material/Email";

const Dashboard = () => {
    
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    
  return (
    <div>
        <Box flex={4} p={{ xs: 1, md: 2 }} sx={{ml:7}}>
            <Sidebar />
        </Box>

        <Box sx= {{ml:8}}>
        {/* HEADER */}

        <Box
            display={smScreen ? "flex" : "block"}
            flexDirection={smScreen ? "row" : "column"}
            justifyContent={smScreen ? "space-between" : "start"}
            alignItems={smScreen ? "center" : "start"}
            m="15px 10px"
        >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2}}>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3} sx={{ml: 3, mt: 3}}>
          <Box
            width="100%"
            backgroundColor="lightgreen"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              increase="+14%"
              icon={
                <EmailIcon
                  sx={{ color: "black", fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3} sx={{ml: 3, mt: 3}}>
          <Box
            width="100%"
            backgroundColor="lightgreen"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              increase="+14%"
              icon={
                <EmailIcon
                  sx={{ color: "black", fontSize: "26px" }}
                />
              }
            />

          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3} sx={{ml: 3, mt: 3}}>
          <Box
            width="100%"
            backgroundColor="lightgreen"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              increase="+14%"
              icon={
                <EmailIcon
                  sx={{ color: "black", fontSize: "26px" }}
                />
              }
            />

          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3} sx={{ml: 3, mt: 3}}>
          <Box
            width="100%"
            backgroundColor="lightgreen"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              increase="+14%"
              icon={
                <EmailIcon
                  sx={{ color: "black", fontSize: "26px" }}
                />
              }
            />

          </Box>
        </Grid>
        </Grid>
        </Box>
    </div>
  )
}

export default Dashboard