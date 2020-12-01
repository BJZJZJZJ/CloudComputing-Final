import {
  LinearProgress,
  withStyles,
  Tab,
  Tabs,
  Box,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import PropTypes from "prop-types";

const Result = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        indicatorColor="primary"
        centered
      >
        <Tab label="표정분석결과" {...a11yProps(0)} />

        {props.filmo !== undefined ? (
          <Tab label="인물정보" {...a11yProps(1)} />
        ) : null}
      </Tabs>

      <TabPanel value={value} index={0}>
        <div>
          {props.emotion !== undefined
            ? props.emotion.map((ele, idx) => {
                return (
                  <div key={idx}>
                    <div className={"result-emotion-content"}>
                      {ele.Type} : {ele.Confidence.toFixed(3)}
                      <BorderLinearProgress
                        variant="determinate"
                        value={ele.Confidence}
                      />{" "}
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </TabPanel>

      {props.filmo !== undefined ? (
        <TabPanel value={value} index={1}>
          <>
            <div className="result-name">이름 : {props.name}</div>
            <div className="result-filmo">
              <div style={{ fontFamily: "tmoney" }}>출연작</div> <br />
              {props.filmo.map((ele, idx) => {
                return (
                  <div key={idx} className={"result-filmo-content"}>
                    {ele}
                  </div>
                );
              })}
            </div>
          </>
        </TabPanel>
      ) : null}
    </>
  );
};

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    width: "60%",
    margin: "10px auto",
    marginTop: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 6,
    backgroundColor: "primary",
  },
}))(LinearProgress);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default Result;
