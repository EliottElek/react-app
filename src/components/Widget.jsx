import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Widget = ({ children }) => {
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ minWidth: 275, height: 250 }}>
        <CardContent>{children}</CardContent>
      </Card>
    </Grid>
  );
};

export default Widget;
