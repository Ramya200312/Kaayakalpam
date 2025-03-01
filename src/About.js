import React, { useState } from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system"; 
import auyrveda from "../src/Assests/auyrveda.webp";

const AboutContainer = styled(Box)({
  background: "linear-gradient(135deg, #d4a373, #8d6e63)",
  color: "white",
  padding: "20px 15px",
  borderRadius: "10px",
  textAlign: "center",
  maxWidth: "1100px",
  margin: "auto",
  minHeight: "300px",
  paddingTop: "30px",
});

const CustomButton = styled(Button)({
  backgroundColor: "#6c4f3d",  
  color: "white",
  fontWeight: "bold",
  marginTop: "10px",
  "&:hover": {
    backgroundColor: "#8d6e63",
  },
});

const ImageContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        marginTop: "72px", 
        paddingBottom: "70px", 
      }}
    >
      <AboutContainer>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <img
                src={auyrveda}
                alt="Ayurveda"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </ImageContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Discover Ayurveda
            </Typography>
            <Typography variant="body1" paragraph>
              Ayurveda, the ancient science of life, offers a holistic approach to well-being. Rooted in nature, it emphasizes balance in mind, body, and spirit through herbal remedies, mindful nutrition, and therapeutic practices.
            </Typography>
            <Typography variant="body1" paragraph>
              Experience the timeless wisdom of Ayurveda and embark on a journey towards natural healing and rejuvenation.
            </Typography>

            {showMore && (
              <Typography variant="body1" paragraph>
                Ayurveda provides a holistic approach to health by balancing the body's natural energies. It incorporates practices like yoga, meditation, and herbal remedies to promote physical, mental, and emotional well-being. 
                Following Ayurvedic principles can lead to a more harmonious and healthy lifestyle.
              </Typography>
            )}

            <CustomButton size="large" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less" : "Learn More"}
            </CustomButton>
          </Grid>
        </Grid>
      </AboutContainer>
    </Container>
  );
};

export default About;
