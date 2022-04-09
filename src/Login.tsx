import React, { FormEvent, useState } from "react";
import "./App.css";
import { Box, Button, TextField } from "@mui/material";
import { login } from "./auth.service";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const user = await login({ email, password });
    console.log("use=", user);

    if (user.success) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home");
    }
  }
  return (
    <Box sx={{ textAlign: "center" }}>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mt: 2, mb: 2 }}
          />

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Login;
