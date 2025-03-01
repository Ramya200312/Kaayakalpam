import React, { useState } from "react";
import { Box, Card, CardContent, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import contactimg from "../src/Assests/contact1img.jpg";
import img1 from "../src/Assests/con1.webp";

const Background = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${img1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "brightness(0.3)",
  zIndex: -1, 
});

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setSubmitted(true);

    
    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000); 
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Background />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "70px",
          paddingBottom: "40px",
          position: "relative",
        }}
      >
        
        {submitted && (
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 2,
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
              borderRadius: 3,
            }}
          >
             Thank you! Your message has been sent.
          </Box>
        )}

        
        <Card 
          sx={{ 
            width: 500, 
            maxHeight: 594,  
            zIndex: 1, 
            borderRadius: 3, 
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            transition: "filter 0.3s ease",
            filter: submitted ? "blur(3px)" : "none",
          }}
        >
          <Box
            component="img"
            src={contactimg}
            alt="Contact Us"
            sx={{ width: "100%", height: 150, objectFit: "cover" }}
          />
          <CardContent>
            <Typography variant="h6" align="center" fontWeight="bold">
              Contact Us
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary" sx={{ mb: 2 }}>
              Feel free to drop us a line below!
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                name="name"
                variant="standard"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                sx={{ mb: 2 }}
                required
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                variant="standard"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                sx={{ mb: 2 }}
                required
              />
              <TextField
                label="Phone"
                name="phone"
                variant="standard"
                fullWidth
                value={formData.phone}
                onChange={handleChange}
                sx={{ mb: 2 }}
                required
              />
              <TextField
                label="Message"
                name="message"
                variant="standard"
                fullWidth
                multiline
                rows={3}
                value={formData.message}
                onChange={handleChange}
                sx={{ mb: 2 }}
                required
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "#4CAF50", color: "white", mt: 2, borderRadius: 3 }}
              >
                Submit →
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>

      
      <Box
        component="footer"
        sx={{
          backgroundColor: "#333",
          color: "white",
          textAlign: "center",
          padding: "20px",
          width: "100%",
          position: "relative",
        }}
      >
        © 2024 Kaayakalpam Wellness. All Rights Reserved.
      </Box>
    </Box>
  );
};

export default ContactForm;
