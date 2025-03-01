import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        top: "auto",
        bottom: 0,
        left: 0,
        width: "100%", 
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        backdropFilter: "blur(10px)", 
        boxShadow: "none",
        zIndex: 1000, 
      }}
    >
      <Toolbar sx={{ justifyContent: "center", minHeight: "60px", px: 2 }}>
        <Typography variant="body1" color="white">
          © 2025 Kaayakalpam | All Rights Reserved | Contact
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
