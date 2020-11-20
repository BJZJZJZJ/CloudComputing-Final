import React, { useState } from "react";
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
  input: {
    display: "none",
  },
}));

const App = () => {
  const classes = useStyles();
  const [img, setImg] = useState("");

  return (
    <>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={(e) => {
          e.preventDefault();
          let reader = new FileReader();
          let file = e.target.files[0];
          reader.onloadend = () => {
            setImg({ file: file, imagePreviewUrl: reader.result });
          };
          reader.readAsDataURL(file);

          console.log(img);
        }}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <br />
      {img !== "" ? <img src={img.imagePreviewUrl} alt="" /> : null}
    </>
  );
};

export default App;
