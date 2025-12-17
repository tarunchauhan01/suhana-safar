import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
} from "@mui/material";

const tours = [
  {
    name: "Goa Beach Tour",
    price: "₹12,999",
    duration: "4 Days / 3 Nights",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    tag: "Beach",
  },
  {
    name: "Manali Adventure Trip",
    price: "₹15,499",
    duration: "5 Days / 4 Nights",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    tag: "Adventure",
  },
  {
    name: "Dubai Luxury Tour",
    price: "₹55,999",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1526481280691-9062b16aafc8",
    tag: "Luxury",
  },
];

export default function Tours() {
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
            Our Tour Packages
          </Typography>
          <Typography color="rgba(255,255,255,0.85)" maxWidth="600px">
            Carefully curated tour packages designed for comfort, adventure,
            and unforgettable memories.
          </Typography>
        </Container>
      </Box>

      {/* Tours Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {tours.map((tour, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    height: 200,
                    backgroundImage: `url(${tour.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <CardContent>
                  <Chip
                    label={tour.tag}
                    size="small"
                    sx={{
                      mb: 1,
                      backgroundColor: "primary.main",
                      color: "#fff",
                      fontWeight: 500,
                    }}
                  />

                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {tour.name}
                  </Typography>

                  <Typography color="text.secondary">
                    {tour.duration}
                  </Typography>

                  <Typography fontWeight={700} mt={1}>
                    {tour.price}
                  </Typography>
                </CardContent>

                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ textTransform: "none", fontWeight: 600 }}
                  >
                    Book Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
