import React from 'react'
import { Box, Typography } from "@mui/material";
import { green, grey } from '@mui/material/colors';

const StatBox = ({ title, subtitle, icon }) => {
  return (
    <div>
        <Box width="100%" sx={{ml: 5}}>
            <Box display="flex" justifyContent="space-between" borderRadius="10px">
              <Box>
                {icon}
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ color: grey }}
                >
                {title}
                </Typography>
              </Box>
            </Box>

            <Box display="flex" justifyContent="space-between" mt="2px">
              <Typography variant="h5" sx={{ color: green }}>
                {subtitle}
              </Typography>
            </Box>
        </Box>
    </div>
  )
}

export default StatBox