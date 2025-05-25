import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { apiRequest } from "../../api"; // Assuming apiRequest is exported from here
import { useNavigate } from "react-router-dom"; // Assuming you are using react-router-dom

const CreateQuizModal = ({ open, handleClose }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      topic: "",
      level: "",
      timeLimit: "",
      numberOfQuestions: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    setLoading(true);
    try {
      const resp = await apiRequest({
        method: "POST",
        path: "/quiz/create",
        data: {
          ...data,
          numberOfQuestions: +data.numberOfQuestions,
          timeLimit: +data.timeLimit,
        },
      });
      setLoading(false);
      if (resp.quiz && resp.quiz.id) {
        navigate(`/quiz/${resp.quiz.id}`);
        handleClose(); // Close modal after successful creation and navigation
      } else {
        console.error("API response did not contain quiz ID:", resp);
        // Optionally show an error message to the user
      }
    } catch (error) {
      console.error("Failed to create quiz:", error);
      setLoading(false);
      // Optionally show an error message to the user
    }
  };

  React.useEffect(() => {
    if (!open) {
      reset();
      setLoading(false); // Reset loading state when modal closes
    }
  }, [open, reset]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={handleClose} // Add click handler to close modal on background click
    >
      <div
        className="bg-[#0A0F1C] p-8 rounded-2xl max-w-md w-full mx-4 border border-white/10 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        {/* Background glow effects */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#00A3FF] rounded-full filter blur-[100px] opacity-20" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#00FFB2] rounded-full filter blur-[100px] opacity-20" />

        <div className="text-center relative z-10">
          <Typography
            id="create-quiz-modal-title"
            variant="h6"
            component="h2"
            className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] bg-clip-text text-transparent"
          >
            Create New Quiz
          </Typography>
          {loading ? (
            // Attractive AI loading indicator (replace with your actual component/styling)
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
              }}
            >
              <Typography variant="h6" className="text-white">
                Creating Quiz...
              </Typography>
              {/* Add your loading spinner or animation here */}
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit(handleFormSubmit)}
              sx={{ mt: 2 }}
            >
              <Controller
                name="topic"
                control={control}
                rules={{ required: "Topic is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Topic"
                    fullWidth
                    margin="normal"
                    error={!!errors.topic}
                    helperText={errors.topic?.message}
                    // Add dark theme styling overrides
                    sx={{
                      "& .MuiInputBase-root": { color: "white" },
                      "& .MuiInputLabel-root": {
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.6)",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#00A3FF",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                      "& .Mui-error": { color: "#f44336" }, // Default MUI error color
                      "& .Mui-error .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#f44336",
                      },
                    }}
                  />
                )}
              />

              <FormControl
                fullWidth
                margin="normal"
                error={!!errors.level}
                // Add dark theme styling overrides
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "rgba(255, 255, 255, 0.7)",
                  },
                  "& .MuiInputBase-root": { color: "white" },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.6)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00A3FF",
                  },
                  "& .MuiSvgIcon-root": { color: "rgba(255, 255, 255, 0.7)" }, // Dropdown arrow color
                  // Ensure error text color is correct
                  "& .MuiFormHelperText-root": { color: "#f44336" }, // Default MUI error color
                  "& .Mui-error .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f44336",
                  },
                }}
              >
                <InputLabel id="level-select-label">Level</InputLabel>
                <Controller
                  name="level"
                  control={control}
                  rules={{ required: "Level is required" }}
                  render={({ field }) => (
                    <Select
                      labelId="level-select-label"
                      id="level-select"
                      label="Level"
                      {...field}
                      // Ensure selected value is left-aligned (default behavior, but can be explicitly set if needed)
                      sx={{
                        textAlign: "left",
                      }}
                    >
                      <MenuItem value="beginner">Beginner</MenuItem>
                      <MenuItem value="intermediate">Intermediate</MenuItem>
                      <MenuItem value="expert">Expert</MenuItem>
                    </Select>
                  )}
                />
                {/* Error text is handled by Typography component below FormControl */}
                <div className=" text-left pl-4">
                  {errors.level && (
                    <Typography color="error" variant="caption">
                      {errors.level.message}
                    </Typography>
                  )}
                </div>
              </FormControl>

              <Controller
                name="timeLimit"
                control={control}
                rules={{
                  required: "Time Limit is required",
                  min: { value: 1, message: "Time Limit must be at least 1" },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Time Limit must be a number",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Time Limit (minutes)"
                    type="number"
                    fullWidth
                    margin="normal"
                    error={!!errors.timeLimit}
                    helperText={errors.timeLimit?.message}
                    inputProps={{ min: 1 }}
                    // Add dark theme styling overrides
                    sx={{
                      "& .MuiInputBase-root": { color: "white" },
                      "& .MuiInputLabel-root": {
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.6)",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#00A3FF",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                      "& .Mui-error": { color: "#f44336" }, // Default MUI error color
                      "& .Mui-error .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#f44336",
                      },
                    }}
                  />
                )}
              />

              <Controller
                name="numberOfQuestions"
                control={control}
                rules={{
                  required: "Number of Questions is required",
                  min: {
                    value: 1,
                    message: "Number of Questions must be at least 1",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Number of Questions must be a number",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Number of Questions"
                    type="number"
                    fullWidth
                    margin="normal"
                    error={!!errors.numberOfQuestions}
                    helperText={errors.numberOfQuestions?.message}
                    inputProps={{ min: 1 }}
                    // Add dark theme styling overrides
                    sx={{
                      "& .MuiInputBase-root": { color: "white" },
                      "& .MuiInputLabel-root": {
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.6)",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#00A3FF",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                      "& .Mui-error": { color: "#f44336" }, // Default MUI error color
                      "& .Mui-error .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#f44336",
                      },
                    }}
                  />
                )}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  py: 1.5,
                  borderRadius: "12px",
                  background: "linear-gradient(to right, #00A3FF, #00FFB2)",
                  color: "#ffffff",
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": {
                    background: "linear-gradient(to right, #00A3FF, #00FFB2)",
                    opacity: 0.9,
                  },
                }}
              >
                Create Quiz
              </Button>
            </Box>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateQuizModal;
