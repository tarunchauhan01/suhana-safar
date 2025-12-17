import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Divider,
  Link,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TerrainIcon from "@mui/icons-material/Terrain";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0b1220",
        color: "#e5e7eb",
        mt: 10,
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" gap={1.2} mb={2}>
              <TerrainIcon sx={{ color: "#38bdf8", fontSize: 30 }} />
              <Typography
                variant="h6"
                fontWeight={700}
                letterSpacing={0.5}
              >
                Suhana Safar
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "rgba(229,231,235,0.75)",
                maxWidth: "320px",
                lineHeight: 1.7,
              }}
            >
              Curating meaningful journeys and unforgettable travel experiences
              across the world with comfort, care, and confidence.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              fontWeight={600}
              mb={2}
              sx={{ letterSpacing: 0.3 }}
            >
              Quick Links
            </Typography>

            {["Home", "Tours", "Blogs", "About", "Contact"].map((item) => (
              <Link
                key={item}
                underline="none"
                sx={{
                  display: "block",
                  mb: 1.2,
                  fontSize: "14px",
                  color: "rgba(229,231,235,0.75)",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#38bdf8",
                    textDecoration: "underline",
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              fontWeight={600}
              mb={2}
              sx={{ letterSpacing: 0.3 }}
            >
              Contact
            </Typography>

            <Typography
              sx={{ mb: 1.2, color: "rgba(229,231,235,0.75)", fontSize: "14px" }}
            >
              New Delhi, India
            </Typography>
            <Typography
              sx={{ mb: 1.2, color: "rgba(229,231,235,0.75)", fontSize: "14px" }}
            >
              +91 98765 43210
            </Typography>
            <Typography
              sx={{ color: "rgba(229,231,235,0.75)", fontSize: "14px" }}
            >
              info@suhanasafar.com
            </Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={3}>
            <Typography
              fontWeight={600}
              mb={2}
              sx={{ letterSpacing: 0.3 }}
            >
              Follow Us
            </Typography>

            <Box>
              {[FacebookIcon, InstagramIcon, TwitterIcon].map(
                (Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      color: "#e5e7eb",
                      mr: 1,
                      border: "1px solid rgba(255,255,255,0.15)",
                      "&:hover": {
                        color: "#38bdf8",
                        borderColor: "#38bdf8",
                        backgroundColor: "rgba(56,189,248,0.08)",
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                )
              )}
            </Box>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 5,
            borderColor: "rgba(255,255,255,0.12)",
          }}
        />

        {/* Copyright */}
        <Typography
          align="center"
          sx={{
            fontSize: "13px",
            color: "rgba(229,231,235,0.6)",
            letterSpacing: 0.3,
          }}
        >
          © {new Date().getFullYear()} Suhana Safar. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
