import React from 'react'
import { Button } from '@mui/material'

const CommonButton = ({ title, onclick = () => {}, classes = '', variant = 'contained', type = 'button' }) => {
  return (
    <Button variant={variant} className={classes} onClick={onclick} type={type}>
      {title}
    </Button>
  )
}

export default CommonButton
