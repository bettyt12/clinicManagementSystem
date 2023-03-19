import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Sidebar from "../../components/Sidebar/Sidebar"
import { staffRows } from "../../dummyData";

const PatientRecord = () => {
///Add Doctor Patient Data to dummy data named staffrows
    const [data] = useState(staffRows);
    
    const columns = [
      { field: "idNum", headerName: "ID Number", width: 110 },
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
      {
        field: "userName",
        headerName: "User Name",
        width: 150,
      },
      {
        field: "position",
        headerName: "Position",
        width: 150,
      },
  
      {
        field: "action",
        headerName: "Action",
        width: 250,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/viewdoctorPatient/" + params.row.id}>
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
                Remove 
              </Button>

            </>
          );
        },
      },
    ];

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }} sx={{ml:7}}>
        <Sidebar />
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

export default PatientRecord;