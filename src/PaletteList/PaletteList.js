import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import styles from "../styles/PaletteListStyles";
import MiniPalette from "../MiniPalette/MiniPalette";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

const PaletteList = ({ deletePalette, classes, palettes, history }) => {
  const goToPalette = id => {
    return history.push(`/palette/${id}`);
  };

  const [deleteDialog, setDeleteDialog] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");

  const openDeleteDialog = id => {
    setDeleteDialog(true);
    setIdToDelete(id);
  };
  const closeDeleteDialog = () => {
    setDeleteDialog(false);
    setIdToDelete("");
  };

  const handleDelete = () => {
    deletePalette(idToDelete);
    closeDeleteDialog();
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Colors</h1>
          <Link to="/palette/new">Create A Palette</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map(palette => (
            <CSSTransition key={palette.id} classNames="fade" timeout={400}>
              <MiniPalette
                openDialog={openDeleteDialog}
                key={palette.id}
                {...palette}
                goToPalette={goToPalette}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <Dialog
        open={deleteDialog}
        onClose={closeDeleteDialog}
        ria-labelledby="delete-dialog-title"
      >
        <DialogTitle id="delete-dialog-title">Delete this Palette?</DialogTitle>
        <List>
          <ListItem button>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Delete"
              onClick={handleDelete}
            >
              Delete
            </ListItemText>
          </ListItem>
          <ListItem button onClick={closeDeleteDialog}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Close">Close</ListItemText>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(PaletteList);
