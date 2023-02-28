import React from 'react'

import { styled } from '@mui/material/styles';
import { Box } from "@mui/material";
import { InputBase } from '@mui/material';
import Sidebar from '../../components/Sidebar/Sidebar';
//call Navbar 

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "lightgray",
  padding: "0 15px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Reception = () => {

  return (
    <div>
      <Box flex={4} p={{ xs: 1, md: 2 }} sx={{ml:7}}>
        <Sidebar />
      </Box>
      <div style={{marginLeft: "5rem", marginTop: "0rem"}}>
        <Search>
          <InputBase placeholder="search..." />
        </Search>

        <h1>Welcome to Reception page</h1>
      </div>
      
    </div>
  )
}

export default Reception