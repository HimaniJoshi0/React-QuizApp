import React from "react";
import { TextField } from "@mui/material";

const Input = ({
  id,
  label,
  validations,
  error,
  helperText,
  type = "text",
}) => {
  return (
    <TextField
      error={error}
      helperText={helperText}
      id={id}
      label={label}
      variant="standard"
      {...validations}
      type={type}
      sx={{
        background: "",
        "& .MuiInputBase-input": {
          // Style for the input text
          color: "white", // Set input text color to white
        },
        "& .MuiInputLabel-root": {
          // Style for the label
          color: "white", // Set label color to white
        },
        "& .MuiInput-underline:before": {
          // Style for the standard variant underline before focus
          borderBottomColor: "rgba(255, 255, 255, 0.6)", // Light grey underline
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          // Style for the underline on hover
          borderBottomColor: "white", // White underline on hover
        },
        "& .MuiFormHelperText-root": {
          color: "rgba(255, 255, 255, 0.7)",
        },
      }}
    />
  );
};

export default Input;
