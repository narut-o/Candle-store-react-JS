import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import { clearErrors, forgotPassword } from "../../actions/userAction";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword({ email }));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (message) {
      alert.success(message);
    }
  }, [alert, dispatch, error, message]);

  return (
    <>
      <MetaData title="Forgot Password" />

      {loading ? (
        <Box
          sx={{
            minHeight: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "background.default",
          }}
        >
          <Loader />
        </Box>
      ) : (
        <Box
          sx={{
            minHeight: "80vh",
            bgcolor: "background.default",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              maxWidth: 420,
              width: "100%",
              borderRadius: 4,
              p: 4,
              boxShadow: "0 18px 45px rgba(0,0,0,0.08)",
              border: "1px solid rgba(148,163,184,0.35)",
              bgcolor: "background.paper",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 1,
                letterSpacing: 0.3,
              }}
            >
              Forgot Password
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                mb: 3,
                fontSize: 13,
              }}
            >
              Enter your email address and we&apos;ll send you a link to reset
              your password.
            </Typography>

            <Box component="form" onSubmit={forgotPasswordSubmit}>
              <TextField
                required
                fullWidth
                type="email"
                label="Email"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  borderRadius: 999,
                  textTransform: "none",
                  py: 1.1,
                  fontWeight: 500,
                  bgcolor: "#111827",
                  "&:hover": { bgcolor: "#000" },
                }}
              >
                Send reset link
              </Button>
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
};

export default ForgotPassword;