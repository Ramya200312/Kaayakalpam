import React from "react";
import { Container, Grid, Card, CardContent, Typography, Avatar } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Wellness Enthusiast",
    feedback: "Kaayakalpam has transformed my health! Their Ayurvedic treatments helped me regain balance and vitality naturally.",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Sneha Iyer",
    role: "Holistic Healer",
    feedback: "The herbal products are pure and effective! My skin and digestion have never felt better. A truly authentic experience.",
    image: "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    name: "Rahul Sharma",
    role: "Yoga Practitioner",
    feedback: "Kaayakalpam’s approach to holistic healing complements my yoga practice perfectly. I feel more aligned in body and mind.",
    image: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    name: "Pooja Deshmukh",
    role: "Ayurveda Advocate",
    feedback: "I trust Kaayakalpam for genuine Ayurvedic wisdom. Their therapies are rejuvenating, and the products are top-notch!",
    image: "https://randomuser.me/api/portraits/women/8.jpg"
  }
];


const images = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg"
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 600 }, items: 2 },
  mobile: { breakpoint: { max: 600, min: 0 }, items: 1 }
};

const BenefitsTestimonials = () => {
  return (
<Container sx={{ py: 5, paddingTop: "80px" }}>

      <Typography variant="h4" align="center" gutterBottom>
        What Our Clients Say
      </Typography>
      <Carousel responsive={responsive} infinite autoPlay>
        {testimonials.map((testimonial, index) => (
          <Card key={index} 
          sx={{
            p: 3,
            mx: 2,
            borderRadius: "16px",
            textAlign: "center",
            boxShadow: 3,
            backdropFilter: "blur(12px)", 
            background: "rgba(255, 255, 255, 0.15)", 
            border: "1px solid rgba(255, 255, 255, 0.2)", 
            backgroundImage: `
              radial-gradient(circle at top left, rgba(224, 253, 251, 0.23), transparent 40%),
              radial-gradient(circle at bottom right, rgba(6, 243, 192, 0.15), transparent 50%),
              radial-gradient(circle at center, rgba(239, 97, 255, 0.2), transparent 60%)
            `, 
          }}>
            <CardContent>
              <Typography variant="body1">"{testimonial.feedback}"</Typography>
              <Avatar src={testimonial.image} sx={{ width: 56, height: 56, mx: "auto", mt: 2 }} />
              <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: "bold" }}>
                {testimonial.name}
              </Typography>
              <Typography variant="caption">{testimonial.role}</Typography>
            </CardContent>
          </Card>
        ))}
      </Carousel>

      
      <Typography variant="h5" align="center" sx={{ my: 4, fontWeight: "bold" }}>
        Plus 250 medical branches all over the country!
      </Typography>

      
      <Grid container justifyContent="center" spacing={2}>
        {images.map((src, index) => (
          <Grid item key={index}>
            <Avatar src={src} sx={{ width: 80, height: 80, border: "3px solid white", boxShadow: 3 }} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BenefitsTestimonials;