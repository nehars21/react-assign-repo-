import React from 'react'
import { MuiResp } from './MuiResp';
import { MuiImgList } from './MuiImgList';
import { MuiGrid } from './MuiGrid';
import useMediaQuery from '@mui/material/useMediaQuery';

export const NewComp = () => {
    const matches1 = useMediaQuery('(min-width: 1000px)')

  return (
        matches1?<MuiResp/>  :<MuiGrid/>
    
  )
}
