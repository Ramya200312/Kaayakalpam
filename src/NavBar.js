import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom"; 

const NavBar = () => {
  const location = useLocation(); 

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
          
          {["home", "about", "our products", "why-us", "contact"].map((page) => (
            <Button
              key={page}
              component={Link}
              to={`/${page}`}
              sx={{
                color: location.pathname === `/${page}` ? "#556B2F" : "white", 
                fontWeight: location.pathname === `/${page}` ? "bold" : "normal",
                textDecoration: location.pathname === `/${page}` ? "underline" : "none",
                transition: "0.3s",
                "&:hover": { color: "#556B2F" } 
              }}
            >
              {page.charAt(0).toUpperCase() + page.slice(1).replace("-", " ")} 
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
