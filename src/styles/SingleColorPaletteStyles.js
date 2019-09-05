import screenSize from "./screenSizes";
export default {
  singleColorPalette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  paletteColors: {
    height: "90%"
  },

  goBack: {
    background: "black",
    width: "20%",
    height: "40%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4.5px",
    "& a": {
      textDecoration: "none",
      color: "white",
      position: "absolute",
      width: "100px",
      height: "30px",
      display: "inline-block",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      lineHeight: "30px",
      textAlign: "center",
      background: "rgba(255, 255, 255, 0.3)",
      outline: "none",
      border: "none",
      textTransform: "uppercase",
      cursor: "pointer"
    },
    [screenSize.down("lg")]: {
      width: "25%",
      height: "33.333%"
    },
    [screenSize.down("md")]: {
      width: "50%",
      height: "20%"
    },
    [screenSize.down("xs")]: {
      width: "100%",
      height: "10%"
    }
  }
};
