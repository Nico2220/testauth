import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const Home = () => {
  const [user, setUser] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  function logout() {
    localStorage.removeItem("user");

    navigate("/");
  }

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Hey, {user && user.user.firstName} You are log in
      </Typography>
      <Button variant="contained" size="small" onClick={() => logout()}>
        Log out{" "}
      </Button>
    </Box>
  );
};
