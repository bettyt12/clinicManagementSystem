import React from 'react';

import { green, grey } from '@mui/material/colors'
import { Typography, Box } from "@mui/material";

const Header = ({ title, subtitle }) => {
  return (
    <div>
        <Box mb="10px">
            <Typography
                variant="h4"
                color={grey}
                fontWeight="bold"
                sx={{ m: "0 0 5px 2em" }}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={green}
                sx={{ m: "0 0 5px 3em" }}
            >
                {subtitle}
            </Typography>
        </Box>
    </div>
  )
}

export default Header;