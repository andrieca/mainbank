import { Button, Typography } from "@mui/material";
import React from "react";

const customBtnStyle = {
  backgroundColor: "#F8BB18",
  borderRadius: "10px",
  padding: "10px",
  marginTop: '5px',
  //   margin: "5px auto 5px auto",
  color: "black",
  textTransform: 'none',
  textAlign: "center",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "21px",
  width: " 100%"
};

const customSpanStyle = {
  backgroundColor: "#F8BB18",
  borderRadius: "10px",
  padding: "10px 0",
  // marginTop: '5px',
  //   margin: "5px auto 5px auto",
  color: "black",
  textTransform: 'none',
  textAlign: "center",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "5px",
  // width: " 100%"
};

const PrimaryBtnYellow = ({ text, onClick, icon = null, disabled = false, type }) => {
  return (
    <Button
      style={customBtnStyle}
      startIcon={icon}
      icon={icon}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <Typography style={customSpanStyle}>{text}</Typography>
    </Button>
  );
};

export default PrimaryBtnYellow;