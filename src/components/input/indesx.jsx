import React from 'react'
import { TextField } from '@mui/material'

const Input = ({ id, label, validations, error, helperText, type = "text" }) => {
  return (
    <TextField
      error={error}
      helperText={helperText}
      id={id}
      label={label}
      variant="standard"
      {...validations}
      type={type}
    />
  )
}

export default Input
