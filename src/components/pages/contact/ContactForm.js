import { Button, TextField, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { FormCheck } from "./FormCheck";
import "./contact.css";
import Dropdown from "./Dropdown";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#000E1A",
    },
    secondary: {
      main: '#C62368',
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
  const { handleInputValue, formIsValid, errors } = FormCheck();

  return (
    <ThemeProvider theme={theme}>
      <form
        autoComplete="off"
        action="https://formsubmit.co/rchtectdev@gmail.com"
        sx={{ margin: 2 }}
        method="POST"
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
        <div className="button">
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            disabled={!formIsValid()}
            name="_next"
            value="https://nr1team.netlify.app/confirm"
          >
            Send Message
          </Button>
        </div>
      </form>
    </ThemeProvider>
  );
};
