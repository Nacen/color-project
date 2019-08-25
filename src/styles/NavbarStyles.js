export default {
  navbar: {
    display: "flex",
    height: "7vh",
    alignItems: "center"
  },

  navbarLogo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a ": {
      textDecoration: "none",
      color: "#000"
    }
  },

  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent"
    },
    "& .rc-slider-rail": {
      height: "8px"
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      marginTop: "-3px",
      marginLeft: "-7px",
      width: "13px",
      height: "13px"
    }
  },

  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem"
  }
};
