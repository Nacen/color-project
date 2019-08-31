import screenSize from '../styles/screenSizes';
import chroma from 'chroma-js';
export default {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-6.5px",
    [screenSize.down("lg")] : {
      width: "25%",
      height: "20%"
    },
    [screenSize.down("md")] : {
      width: "50%",
      height: "10%"
    },
    [screenSize.down("sm")] : {
      width: "100%",
      height: "5%"
    }
  },
  boxContent: {
    position: "absolute",
    left: "0px",
    bottom: "0px",
    width: "100%",
    padding: "5px 10px",
    color: props =>
      chroma(props.color).luminance() <= 0.08
        ? "rgba(255,255,255,0.8)"
        : "rgba(0,0,0,0.6)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    [screenSize.down("sm")] : {
      padding: "0 10px"
    }
  },
  deleteIcon: {
    transition: "all .3s ease-in-out",
    "&:hover": {
      color: "white",
      transform: "scale(1.3)"
    }
  }
};
