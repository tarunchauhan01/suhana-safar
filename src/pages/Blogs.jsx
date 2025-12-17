import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

const blogs = [
  {
    title: "Exploring the Royal Heritage of Rajasthan",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5",
    excerpt:
      "From majestic forts to golden deserts, Rajasthan offers timeless royal experiences, vibrant culture, and unforgettable stories at every turn.",
  },
  {
    title: "Backwaters of Kerala – God’s Own Country",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    excerpt:
      "Glide through peaceful backwaters, lush greenery, and serene villages while experiencing the calm and beauty of Kerala.",
  },
  {
    title: "Spiritual Vibes of Varanasi",
    image:
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16",
    excerpt:
      "Witness ancient rituals, sacred ghats, and spiritual energy in one of the world’s oldest living cities.",
  },
  {
    title: "Why Slow Travel Makes India More Meaningful",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    excerpt:
      "Slow travel helps you connect deeply with local cultures, traditions, and people, making every Indian journey more enriching.",
  },
];

export default function Blogs() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: "25vh",
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
          <Typography variant="h3" color="white" fontWeight={700} gutterBottom>
            Travel Blogs & Stories
          </Typography>
          <Typography
            color="rgba(255,255,255,0.85)"
            maxWidth="600px"
          >
            Inspiring Indian destinations, travel guides, and stories crafted to
            spark your wanderlust.
          </Typography>
        </Container>
      </Box>

      {/* Blog Cards */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {blogs.map((blog, index) => (
            <Grid
              item
              xs={12} // Full width on mobile
              sm={6} // Two cards per row on tablets
              md={4} // Three cards per row on laptops
              key={index}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={blog.image}
                  alt={blog.title}
                />

                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {blog.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: 1.6 }}
                  >
                    {blog.excerpt}
                  </Typography>

                  <Button
                    size="small"
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
