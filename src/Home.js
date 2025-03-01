import { Container, Grid, Typography, Card, TextField, Button, Box } from "@mui/material";
import React, { useState } from "react";
import img1 from "../src/Assests/con1.webp";

const Home = () => {
  const [fullName, setFullName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 

  const handleLogin = () => {
    if (!fullName || !email || !password) {
      setError(" All fields are required!");
      return;
    }

    if (!validateEmail(email)) {
      setError(" Please enter a valid email address!");
      return;
    }

    setSuccess(true);
    setError(""); 

    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);

    setFullName("");
    setEmail("");
    setPassword("");

    setTimeout(() => setSuccess(false), 3000); 
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        p: 4,
        paddingTop: "80px",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(10px)",
          zIndex: -1,
        },
      }}
    >
      <Grid container sx={{ height: "100%", overflow: "hidden" }}>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h2" sx={{ fontWeight: "bold", color: "#222" }}>
            Kaayakalpam Wellness
          </Typography>
          <Typography variant="h5" sx={{ color: "#444", mt: 1 }}>
            Traditional Healing for a Healthy Life
          </Typography>
          <Typography>Your Path to Holistic Well-Being.</Typography>

          
          <Card sx={{ mt: 3, p: 2, background: "#2e7d32", color: "#fff", maxWidth: "120px", textAlign: "center" }}>
            <Typography variant="h4">⭐ 4.8</Typography>
            <Typography variant="body2">357 Reviews</Typography>
          </Card>
        </Grid>

        
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          
          {success && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: "bold",
                textAlign: "center",
                zIndex: 2,
              }}
            >
               Login Successful!
            </Box>
          )}

          <Card sx={{ p: 3, borderRadius: "12px", boxShadow: 4, maxWidth: "400px", mx: "auto" }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Get a Consultation
            </Typography>

            
            {error && (
              <Box sx={{ color: "red", mb: 2, textAlign: "center", fontWeight: "bold" }}>
                {error}
              </Box>
            )}

            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              sx={{ mb: 2 }}
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              error={!!error && !validateEmail(email)}
              helperText={error && !validateEmail(email) ? "Invalid email format" : ""}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: "#2e7d32", 
                "&:hover": { backgroundColor: "#1b5e20" },
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
