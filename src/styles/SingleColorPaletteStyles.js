export default {
  singleColorPalette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  paletteColors: {
    height: "90%"
  },

  colorBox: {
    width: "20%",
    height: props => (props.showingFullPalette ? "25%" : "40%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: "1",
      transition: "0.3s"
    }
  },
  goBack: {
    background: "black",
    width: "20%",
    height: "40%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
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
    }
  }
};