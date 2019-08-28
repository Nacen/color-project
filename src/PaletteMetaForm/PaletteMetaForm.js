import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import EmojiPicker from "../EmojiPicker/EmojiPicker";

const PaletteMetaForm = ({
  handleSave,
  setPaletteName,
  paletteName,
  openDialog,
  handleCloseDialog
}) => {
  const [openEmojiDialog, setOpenEmojiDialog] = useState(false);

  function handleOpenEmojiDialog() {
    setOpenEmojiDialog(true);
  }

  function handleCloseEmojiDialog() {
    setOpenEmojiDialog(false);
  }

  const handleSubmit = () => {
    handleCloseDialog();
    setTimeout(() => {
      handleOpenEmojiDialog();
    }, 1000);
  };

  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful new palette. Make sure
              it's unique
            </DialogContentText>
            <TextValidator
              fullWidth
              margin="normal"
              label="Palette Name"
              value={paletteName}
              onChange={evt => setPaletteName(evt.target.value)}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Enter Palette Name",
                "Palette Name Already Exist"
              ]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
      <EmojiPicker
        handleSubmit={handleSave}
        openEmojiDialog={openEmojiDialog}
        handleCloseEmoji={handleCloseEmojiDialog}
      />
    </div>
  );
};

export default PaletteMetaForm;
