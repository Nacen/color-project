import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const PaletteMetaForm = ({
  handleSave,
  setPaletteName,
  paletteName,
}) => {
  const [openDialog, setOpenDialog] = React.useState(false);

  function handleClickOpen() {
    setOpenDialog(true);
  }

  function handleClose() {
    setOpenDialog(false);
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Save Palette
      </Button>
      <Dialog open={openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Palette Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <ValidatorForm onSubmit={() => handleSave()}>
            <TextValidator
              label="Palette Name"
              value={paletteName}
              onChange={evt => setPaletteName(evt.target.value)}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Enter Palette Name",
                "Palette Name Already Exist"
              ]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </ValidatorForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PaletteMetaForm;