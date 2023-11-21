import { Button, Typography } from "@mui/material";
import React from "react";

const customBtnStyle = {
  backgroundColor: "#1A87DD",
  borderRadius: "10px",
  padding: "10px",
  marginTop: '5px',
  color: "#FFF",
  textTransform: 'none',
  textAlign: "center",
  fontSize: "5px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "5px",
  width: "100%",

  
};

const PrimaryBtn = ({ text, onClick, icon = null, disabled = false }) => {
  return (
    <Button
      style={customBtnStyle}
      startIcon={icon}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography>{text}</Typography>
    </Button>
  );
};

export default PrimaryBtn;
