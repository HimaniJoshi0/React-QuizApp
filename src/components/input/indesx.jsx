import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Input = ({
  id,
  label,
  validations,
  error,
  helperText,
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      error={error}
      helperText={helperText}
      id={id}
      label={label}
      variant="standard"
      {...validations}
      type={type === "password" ? (showPassword ? "text" : "password") : type}
      sx={{
        background: "",
        "& .MuiInputBase-input": {
          color: "white",
        },
        "& .MuiInputLabel-root": {
          color: "white",
        },
        "& .MuiInput-underline:before": {
          borderBottomColor: "rgba(255, 255, 255, 0.6)",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottomColor: "white", // White underline on hover
        },
        "& .MuiFormHelperText-root": {
          color: "rgba(255, 255, 255, 0.7)",
        },
      }}
      InputProps={{
        endAdornment: type === "password" && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              sx={{ color: 'white' }} // Style the icon color
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Input;
