import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Stack,
} from "@mui/material";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <MetaData title="Admin Dashboard" />

      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Box sx={{ maxWidth: 1100, mx: "auto" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, mb: 2, letterSpacing: 0.3 }}
          >
            Dashboard
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "text.secondary", mb: 4 }}
          >
            Welcome back{user ? `, ${user.name}` : ""}. Here&apos;s a quick
            overview of your store.
          </Typography>

          {/* Top summary cards */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: "1px solid rgba(148,163,184,0.35)",
                  bgcolor: "background.paper",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ textTransform: "uppercase", color: "text.secondary" }}
                >
                  Total Orders
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mt: 1, fontWeight: 600 }}
                >
                  128
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: "1px solid rgba(148,163,184,0.35)",
                  bgcolor: "background.paper",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ textTransform: "uppercase", color: "text.secondary" }}
                >
                  Products
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mt: 1, fontWeight: 600 }}
                >
                  42
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: "1px solid rgba(148,163,184,0.35)",
                  bgcolor: "background.paper",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ textTransform: "uppercase", color: "text.secondary" }}
                >
                  Customers
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mt: 1, fontWeight: 600 }}
                >
                  89
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Placeholder for future tables / charts */}
          <Box sx={{ mt: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                border: "1px solid rgba(148,163,184,0.35)",
                bgcolor: "background.paper",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, mb: 1.5 }}
              >
                Recent Activity
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontSize: 13 }}
              >
                You can add charts, recent orders list, or analytics here later.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;