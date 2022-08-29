import { Button, TextField, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { FormCheck } from "./FormCheck";
import "./contact.css";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#F06449",
    },
    error: {
      main: "#FF0004",
    },
  },
});

const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name",
  },
  {
    name: "email",
    label: "Email",
    id: "my-email",
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 10,
  },
];

export const ContactForm = () => {
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    FormCheck();

  return (
    <ThemeProvider theme={theme}>
      <form autoComplete="off" onSubmit={handleFormSubmit} sx={{ margin: 2 }}>
        {inputFieldValues.map((inputFieldValue, index) => {
          return (
            <div className="input">
              <TextField
                key={index}
                onChange={handleInputValue}
                onBlur={handleInputValue}
                name={inputFieldValue.name}
                label={inputFieldValue.label}
                error={errors[inputFieldValue.name]}
                multiline={inputFieldValue.multiline ?? false}
                fullWidth
                rows={inputFieldValue.rows ?? 1}
                autoComplete="none"
                {...(errors[inputFieldValue.name] && {
                  error: true,
                  helperText: errors[inputFieldValue.name],
                })}
              />
            </div>
          );
        })}
        <div className="button">
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            disabled={!formIsValid()}
          >
            Send Message
          </Button>
        </div>
      </form>
    </ThemeProvider>
  );
};
