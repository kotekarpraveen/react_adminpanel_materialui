import React from 'react'
import {Box, Typography, useTheme} from '@mui/material';
import {DataGrid} from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";

import {
  AdminPanelSettingsOutlinedIcon, 
  LockOpenOutlinedIcon,
  SecurityOutlinedIcon,
} from "@mui/icons-material";


const Team = ()=>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = 
  [
    {
      field: "id", 
      headerName:"ID" 
    },
    {
      field:"name", 
      headerName:"Name",
      flex:1,
      cellClassName:"name-column--cell"
    },
    {
      field:"age", 
      headerName:"Age",
      type:"number",
      headerAlign:"left",
      align:"left"},
    {
      field:"phone", 
      headerName:"Phone",
      flex:1,
    },
    {
      field:"email", 
      headerName:"Email",
      flex:1,
    },
    {
      field:"access", 
      headerName:"Access Level",
      flex:1,
      renderCell:({row:{access}})=>{
        return(
          <Box 
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent = "center"
            backgroundColor = {
              access === "admin" 
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius = "4px" 
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon/>}
            {access === "manager" && <SecurityOutlinedIcon/>} 
            {access === "user" && <LockOpenOutlinedIcon/>} 
            <Typography color={colors.grey[100]} sx={{ml:"5px"}} >
              {access  }
            </Typography>
          </Box>
        )
      }
    },

  ]

  return (
    <Box>
      <Header title='TEAM' subtitle="Managing the Team Members">

      <Box>

      </Box>
        <DataGrid
          row={mockDataTeam}
          columns = {columns}
        />
      </Header>
    </Box>
  )
}

export default Team;