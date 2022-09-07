import { Button, TextField, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { FormCheck } from "./FormCheck";
import "./contact.css";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#000E1A",
    },
    secondary: {
      main: "#C62368",
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
  let navigate = useNavigate();
  const { handleInputValue, formIsValid, errors } = FormCheck();
  const clickButton = () => {
    document.querySelector('.submit-btn').click()
    navigate("/confirm")
  }
  return (
    <ThemeProvider theme={theme}>
      <form
        autoComplete="off"
        action="https://formsubmit.co/rchtectdev@gmail.com"
        sx={{ margin: 2 }}
        method="POST"
        target="_blank"
      >
        <Dropdown />
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
        <div className="button" onClick={clickButton}>
          <Button
            variant="contained"
            color="secondary"
            disabled={!formIsValid()}
            type="submit"
            className="submit-btn"
          >
            Send Message
          </Button>
        </div>
      </form>
    </ThemeProvider>
  );
};
