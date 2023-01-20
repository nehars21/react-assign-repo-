import React from 'react'
import { Box, Divider, Stack } from '@mui/material'
import { bgcolor } from '@mui/system'

export const MuiBox = () => {
    return (
        // sx : allows styling
        //padding p value is multiplied by 6px
        <Stack sx={{border:'3px dashed'}} direction='column-reverse'
        spacing={4}
        divider={<Divider orientation='horizontal' ></Divider>}
        p={3}>
            <Box
                sx={{
                    bgcolor: 'primary.dark',
                    color: 'white',
                    height: '100px',
                    width: '200px',
                    p: '20px',
                    '&:hover': {
                        bgcolor: 'warning.main',
                    },
                    fontFamily: 'cursive',
                }}
            >
                Welcome to Ness Digital Engineering!!
            </Box>
            <Box
            sx={{
                bgcolor: 'success.dark',
                color: 'white',
                height: '100px',
                width: '200px',
                p: '20px',
                '&:hover': {
                    bgcolor: 'error.main',
                },
                fontFamily: 'cursive',
            }}>

            </Box>
        </Stack>
    )
}
