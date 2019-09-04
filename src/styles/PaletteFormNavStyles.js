import { makeStyles } from "@material-ui/core/styles";
import screenSize from "./screenSizes";
import { DRAWER_WIDTH } from "../constants/constants";

const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px",
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [screenSize.down("sm")] : {
      marginRight: "0px"
    }
  },
  hide: {
    display: "none"
  },
  navButtons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "10px",
    [screenSize.down("xs")]: {
      marginRight: "0px"
    }
  },
  button: {
    margin: "0 0.5rem",
    [screenSize.down("sm")]: {
      margin: "0 0.2rem",
      padding: "0.3rem",
      height: "36px",
      minWidth: "56px",
    },
  }
}));

export default useStyles;
