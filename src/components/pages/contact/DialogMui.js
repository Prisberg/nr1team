import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

import { useState } from "react";

import "./dialog.css";

export const DialogMui = () => {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <Dialog aria-labelledby="dialog-title" aira-aria-describedby="dialog-desc" open={open}
      onClose={() => setOpen(false)}>
        <DialogTitle id="dialog-title">Thank you</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-desc">
            We are doing our best to get in touch with you.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autofocus onClick={() => setOpen(false)}>Okay</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
