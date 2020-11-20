import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(4),
    },
  },
  button: {
    width: "500px",
    height: "70px",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "0 30px",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Button variant="contained" className={classes.button} href="test">
          닮은 사람 찾기
        </Button>
        <br />
        <Button variant="contained" className={classes.button}>
          얼굴 표정 분석하기
        </Button>
        <br />
        <Button variant="contained" className={classes.button}>
          사진 얼굴 비교하기
        </Button>
        <br />
      </div>
    </>
  );
}

export default App;
