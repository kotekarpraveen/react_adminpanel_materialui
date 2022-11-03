import React from 'react'
import {Box, Typography, useTheme} from '@mui/material';
import {DataGrid} from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { tokens } from '../../Theme/theme';
import ContentHeader from '../../components/Contentheaders/ContentHeaders';


const Invoices = ()=>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log(mockDataInvoices);
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
      field:"cost", 
      headerName:"Cost",
      type:"number",
      headerAlign:"left",
      align:"left",
      renderCell:(params)=>(
        <Typography
            color={colors.greenAccent[500]}
        >${params.row.cost}</Typography>
      )
    },
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
      field:"date", 
      headerName:"Date",
      flex:1,
    },
   

  ]

  return (
    <Box m="20px">
      <ContentHeader title='Invoices' subtitle="List of Invoices"/>

      <Box
        m="40px 0 0 0" 
        height="75vh"
        sx={{
          "& .MuiDataGrid-root":{
            border:"none",
          },
          "& .name-column--cell":{
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders":{
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroudColor: colors.blueAccent[700]
          },
          "& .MuiDataGrid-footerContainer":{
            borderTop: "none",
            backgroundColor: colors.blueAccent[700]
           },
           "& .MuiCheckbox-root":{
                color:`${colors.greenAccent[200]} !important`
           }

        }}
      >
      <DataGrid
          rows={mockDataInvoices}
          columns = {columns}
          checkboxSelection
        />
      </Box>
     
     
  </Box>
  )
}

export default Invoices;