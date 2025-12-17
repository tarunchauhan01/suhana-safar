import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: "20vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
          }}
        />

        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h3" color="white" fontWeight={700}>
            Contact Us
          </Typography>
          <Typography color="rgba(255,255,255,0.85)" maxWidth="600px">
            Have questions or need help planning your next journey? We’re here
            to help.
          </Typography>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={7}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
              }}
            >
              <Typography variant="h5" fontWeight={700} gutterBottom>
                Get in Touch
              </Typography>

              <Typography color="text.secondary" mb={3}>
                Fill out the form below and our team will get back to you as
                soon as possible.
              </Typography>

              <Box component="form">
                <TextField
                  label="Full Name"
                  fullWidth
                  margin="normal"
                  required
                />

                <TextField
                  label="Email Address"
                  type="email"
                  fullWidth
                  margin="normal"
                  required
                />

                <TextField
                  label="Message"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  required
                />

                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    mt: 3,
                    textTransform: "none",
                    fontWeight: 600,
                    py: 1.5,
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
