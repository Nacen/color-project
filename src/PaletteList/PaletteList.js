import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import styles from "../styles/PaletteListStyles";
import MiniPalette from "../MiniPalette/MiniPalette";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

class PaletteList extends Component {
  goToPalette = id => {
    return this.props.history.push(`/palette/${id}`);
  };
  state = {
    deleteDialog: false,
    idToDelete: ""
  };
  openDeleteDialog = id => {
    this.setState(st => ({ deleteDialog: true, idToDelete: id }));
  };
  closeDeleteDialog = () => {
    this.setState(st => ({ deleteDialog: false, idToDelete: "" }));
  };

  handleDelete = (id) => {
    this.props.deletePalette(id);
    this.closeDeleteDialog();
  }

  render() {
    const { palettes, classes, deletePalette } = this.props;
    const { deleteDialog, idToDelete } = this.state;
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
                  // handleDelete={() => deletePalette(palette.id)}
                  openDialog={this.openDeleteDialog}
                  key={palette.id}
                  {...palette}
                  handleClick={() => this.goToPalette(palette.id)}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={deleteDialog}
          onClose={this.closeDeleteDialog}
          ria-labelledby="delete-dialog-title"
        >
          <DialogTitle id="delete-dialog-title">
            Delete this Palette?
          </DialogTitle>
          <List>
            <ListItem button>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" onClick={() => this.handleDelete(idToDelete)}>
                Delete
              </ListItemText>
            </ListItem>
            <ListItem button onClick={this.closeDeleteDialog}>
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
  }
}

export default withStyles(styles)(PaletteList);
