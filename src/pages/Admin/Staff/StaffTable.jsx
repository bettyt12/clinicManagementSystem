import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

import { userRows } from "../../../dummyData";

const StaffTable = () => {
///Add Staff Data to dummy data named staffrows
    const [data] = useState(userRows);
    
    const columns = [
      { field: "cardNum", headerName: "Card Number", width: 80 },
      {
        field: "firstName",
        headerName: "First Name",
        width: 150,
      },
      {
        field: "lastName",
        headerName: "Last Name",
        width: 150,
      },
      { field: "age", headerName: "Age", width: 80 },
      { field: "contact", headerName: "Contact", width: 150 },
      {
        field: "physician",
        headerName: "Physician",
        width: 150,
      },
      { field: "spot", headerName: "Spot", width: 150 },
  
      {
        field: "action",
        headerName: "Action",
        width: 250,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/viewPatient/" + params.row.id}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, mr: 4 }}
                >
                  View
                </Button>
              </Link>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 3 }}
              >
                Admit 
              </Button>
            </>
          );
        },
      },
    ];

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }} sx={{ml:7}}>
        
          <Box component="main" sx={{ flexGrow: 1, p:2 }}>
            <DataGrid
              rows={data}
              disableSelectionOnClick
              columns={columns}
              checkboxSelection
              autoHeight
            />
          </Box>
    </Box>
  )
}

export default StaffTable;