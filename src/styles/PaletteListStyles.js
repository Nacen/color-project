import screenSize from "./screenSizes";
import background from "./background.svg";
export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 400ms ease-out"
    }
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#394bad",
    /* background by SVGBackgrounds.com */
    backgroundImage: `url(${background})`,
    overflowY: "scroll"
  },
  heading: {
    fontSize: "2rem",
    [screenSize.down("sm")]: {
      fontSize: "1.5rem"
    }
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [screenSize.down("xl")]: {
      width: "80%"
    },
    [screenSize.down("xs")]: {
      width: "75%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "#fff",
    alignItems: "center",
    "& a": {
      color: "#fff",
      textDecoration: "none"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    marginBottom: "2.5rem",
    [screenSize.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [screenSize.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem",
      marginBottom: "1rem"
    }
  }
};
