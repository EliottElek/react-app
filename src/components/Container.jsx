import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Widget from "./Widget";
import Clock from "./Clock";

const Container = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: "140px", p: "30px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Widget></Widget>
        <Widget>
          <Clock />
        </Widget>
        <Widget />
        <Widget />
        <Widget />
        <Widget />
      </Grid>
    </Box>
  );
};

export default Container;
