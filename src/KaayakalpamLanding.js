import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; 

const KaayakalpamLanding = () => {
  return (
    <>
      <AppBar
  position="fixed" 
  sx={{
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    backdropFilter: "blur(10px)", 
    boxShadow: "none",
    zIndex: 10, 
  }}
>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kaayakalpam
          </Typography>
          <Button color="inherit" component={Link} to="/home">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/ourproducts">Our Products</Button>
          <Button color="inherit" component={Link} to="/why-us">Why Us</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default KaayakalpamLanding;
