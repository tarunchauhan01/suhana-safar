import { Box, Container, Typography, Grid } from "@mui/material";

export default function About() {
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
            About Us
          </Typography>
          <Typography color="rgba(255,255,255,0.85)" maxWidth="600px">
            Discover who we are, what we believe in, and how we create memorable
            journeys.
          </Typography>
        </Container>
      </Box>

      {/* Content Section with Background */}
      <Box
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1526772662000-3f88f10405ff)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Light Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255,255,255,0.92)",
          }}
        />

        <Container sx={{ py: 8, position: "relative", zIndex: 1 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={7}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Suhana Safar
              </Typography>

              <Typography color="text.secondary" mb={2} lineHeight={1.7}>
                Suhana Safar is a trusted tour and travel company dedicated to
                creating memorable travel experiences. We believe travel is not
                just about destinations, but about stories, culture, and lifelong
                memories.
              </Typography>

              <Typography color="text.secondary" lineHeight={1.7}>
                Our mission is to provide affordable, well-planned, and
                comfortable journeys for individuals, families, and groups
                across India and around the world.
              </Typography>
            </Grid>

            {/* Highlight Section */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  backgroundColor: "#f8fafc",
                  borderRadius: 3,
                  p: 4,
                  height: "100%",
                  boxShadow: 1,
                }}
              >
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Why Choose Us
                </Typography>

                <Typography color="text.secondary" mb={2}>
                  ✔ Handpicked destinations
                </Typography>
                <Typography color="text.secondary" mb={2}>
                  ✔ Experienced travel experts
                </Typography>
                <Typography color="text.secondary" mb={2}>
                  ✔ Transparent pricing
                </Typography>
                <Typography color="text.secondary">
                  ✔ Customer-first approach
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
