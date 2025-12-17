import { Box, Button, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <Container>
        <Typography
          variant="overline"
          sx={{ letterSpacing: 2, opacity: 0.8 }}
        >
          Journey
        </Typography>

        <Typography
          variant="h2"
          fontWeight={700}
          sx={{ maxWidth: "600px", mb: 2 }}
        >
          Exploring The World
        </Typography>

        <Typography
          sx={{
            maxWidth: "500px",
            mb: 4,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Discover breathtaking destinations, carefully crafted travel
          experiences, and unforgettable journeys with Suhana Safar.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: 600,
            px: 4,
            py: 1.5,
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          Learn More
        </Button>
      </Container>
    </Box>
  );
}
