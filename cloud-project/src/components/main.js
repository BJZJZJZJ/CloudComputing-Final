import React from "react";

import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        JBJ
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(4),
    },
  },
  button: {
    width: "80%",
    minWidht: "300px",
    height: "70px",
    background:
      "linear-gradient(87deg, rgba(85,85,85,1) 0%, rgba(95,95,115,1) 35%, rgba(53,58,60,1) 100%); ",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #535a5c",
    color: "white",
    padding: "0 30px",
    fontSize: 17,
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <Button
                variant="contained"
                className={classes.button}
                href="reko"
              >
                사진 표정 분석
              </Button>
            </Typography>

            {/*
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <Button variant="contained" className={classes.button}>
                사진 얼굴 비교하기
              </Button>
            </Typography>
            */}
          </Container>
        </div>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          클라우드 컴퓨팅 텀프로젝트
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          20145339 전병준
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
