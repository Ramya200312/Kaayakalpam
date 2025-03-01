import React from "react";
import { Container, Grid, Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import HealingIcon from "@mui/icons-material/Healing"; 
import spa from "../src/Assests/spa.jpg";
import medicine from "../src/Assests/medicine.jpg";
import meditation from "../src/Assests/medi.jpg";

const offerings = [
  {
    icon: <SpaIcon fontSize="large" color="primary" />, 
    title: "Ayurvedic Treatment",
    description: "Experience traditional Ayurvedic therapies tailored for your well-being.",
    image: spa 
  },
  {
    icon: <LocalPharmacyIcon fontSize="large" color="secondary" />, 
    title: "Herbal Products",
    description: "Explore a range of herbal products made from 100% natural ingredients for a healthy lifestyle.",
    image: medicine
  },
  {
    icon: <HealingIcon fontSize="large" color="success" />, 
    title: "Holistic Wellness",
    description: "Enhance your body and mind balance through Ayurveda-based wellness programs.",
    image: meditation
  }
];

const Offering = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      <Container
        sx={{
          flex: "1", 
          py: 5,
          pb: 10, 
          backgroundColor: "#f4f4f4",
          paddingTop: "80px", 
        }}
      >
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Our Offerings
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {offerings.map((offering, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  textAlign: "center", 
                  p: 2, 
                  boxShadow: 5, 
                  borderRadius: 2, 
                  backgroundColor: "#fff", 
                  display: "flex", 
                  flexDirection: "column", 
                  justifyContent: "space-between", 
                  height: "100%" 
                }}
              >
                <CardMedia
                  component="img"
                  height="250px" 
                  image={offering.image}
                  alt={offering.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>  
                  {offering.icon}
                  <Typography variant="h6" gutterBottom color="secondary">
                    {offering.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {offering.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>      
    </Box>
  );
};

export default Offering;
