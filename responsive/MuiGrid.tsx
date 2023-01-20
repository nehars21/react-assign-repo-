import { Grid, Box,Paper } from '@mui/material'
import React from 'react'

export const MuiGrid = () => {
  return (
    <Paper sx={{ padding:'20px'}} elevation={3}>
        <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={3}>
            <Box bgcolor='success.light' p={3}>
            Item1    </Box>        
        </Grid>
        <Grid item xs={6}>
        <Box bgcolor='warning.main' p={3}>
            Item2   </Box>       
        </Grid>
        <Grid item xs={9}>
        <Box bgcolor='primary.light' p={3}>
            Item3   </Box>          
        </Grid>
        <Grid item xs={3}>
        <Box bgcolor='error.light' p={3}>
            Item4   </Box>          
        </Grid>
    </Grid>
    </Paper>
    
  )
}
