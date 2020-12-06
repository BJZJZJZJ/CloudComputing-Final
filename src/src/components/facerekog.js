import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { Container } from "@material-ui/core";
import { AWS } from "../aws";

import Result from "./result";
import request from "request";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

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
  const [isOn, setIsOn] = useState(false);
  const [fd, setFd] = useState({});
  const [emotion, setEmotion] = useState({});

  let result = {};

  const onSubmit = async () => {
    const rekognition = new AWS.Rekognition();
    let image = "";

    // 이미지처리 base64 to byteArray
    if (img.imagePreviewUrl.indexOf("gif") !== -1) return;
    else if (img.imagePreviewUrl.indexOf("jpeg") !== -1)
      image = atob(img.imagePreviewUrl.split("data:image/jpeg;base64,")[1]);
    else if (img.imagePreviewUrl.indexOf("png") !== -1)
      image = atob(img.imagePreviewUrl.split("data:image/png;base64,")[1]);

    const imageBytes = new ArrayBuffer(image.length);
    const ua = new Uint8Array(imageBytes);
    for (var i = 0; i < image.length; i++) {
      ua[i] = image.charCodeAt(i);
    }

    // Rekognition parameter
    const params = {
      Image: {
        Bytes: imageBytes,
      },
    };

    // 얼굴인식 시작
    await rekognition.recognizeCelebrities(params, async function(err, data) {
      if (err) console.log(err, err.stack);
      else {
        if (data.CelebrityFaces.length !== 0) {
          result = { ...result, name: data.CelebrityFaces[0].Name };

          if (data.CelebrityFaces[0].Urls.length !== 0) {
            result = { ...result, url: data.CelebrityFaces[0].Urls[0] };

            const query = {
              uri: "http://localhost:5000",
              qs: {
                link: "http://" + result.url,
              },
            };

            await request(query, (err, response, body) => {
              if (err) console.log(err);
              else {
                const tmp = JSON.parse(body);
                result = { ...result, filmo: tmp.filmo };
                setFd(result);
              }
            });
          }
        }
      }
    });

    await rekognition.detectFaces(
      { ...params, Attributes: ["ALL"] },
      await function(err, data) {
        if (err) console.log(err, err.stack);
        else {
          setEmotion({ emotion: data.FaceDetails[0].Emotions });
          setIsOn(true);
        }
      }
    );
  };

  // Render
  return (
    <>
      <Container maxWidth="lg" className="text-center">
        <input
          accept="image/jpg,image/png,image/jpeg"
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
            setIsOn(false);
            setFd({});
            setEmotion({});
          }}
        />
        <br />
        {img !== "" ? (
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="default" component="span">
              <div className="image-source">
                <img src={img.imagePreviewUrl} className="image-in" alt="" />
              </div>
            </Button>
          </label>
        ) : (
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="default" component="span">
              <div className="image-source">
                이곳을 눌러
                <br />
                사진을 업로드 해주세요
                <br />
                <br />
                <FontAwesomeIcon
                  icon={faFileAlt}
                  style={{ fontSize: "170px" }}
                />
              </div>
            </Button>
          </label>
        )}
        <br />
        <br /> <br />
        {img !== "" ? (
          <>
            {isOn ? null : (
              <Button
                variant="contained"
                color="default"
                component="span"
                onClick={onSubmit}
              >
                결과 확인
              </Button>
            )}
          </>
        ) : null}
        {isOn ? (
          <Result filmo={fd.filmo} name={fd.name} emotion={emotion.emotion} />
        ) : null}
      </Container>
    </>
  );
};

export default App;
