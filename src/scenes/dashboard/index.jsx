import { Box } from '@mui/material'
import React from 'react'
import ContentHeader from '../../components/Contentheaders/ContentHeaders'

const Dashboard =()=> {
  return (
    
<Box m="20px">
    <Box  display="flex" justifyContent="space-between" alignItems="center">
        <ContentHeader title="DASHBOARD" subtitle="Welcome to your dashboard"/>
    </Box>
</Box>
  )
}

export default Dashboard