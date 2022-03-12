import React from "react";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./style.js";
const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" color="inherit">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={Memories}
          alt="memories images"
          height={60}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts></Posts>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
