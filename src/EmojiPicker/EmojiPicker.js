import React, { useState } from "react";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const EmojiPicker = ({openEmojiDialog, handleCloseEmoji, handleSubmit}) => {
  
  const [pickedEmoji, setPickedEmoji] = useState("");
  
  const addEmoji = ({native}) => {
    setPickedEmoji(native);
  }
  
  const submitEmoji = () => {
    handleSubmit(pickedEmoji);
    handleCloseEmoji();
  }

  return (
    <Dialog
      open={openEmojiDialog}
      onClose={handleCloseEmoji}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Choose an Emoji</DialogTitle>
      <DialogContent>
        
        <Picker onSelect={addEmoji}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseEmoji} color="primary">
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={submitEmoji}>
          Save Emoji
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmojiPicker;
