import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './style.js';
const Posts = () => {
  const posts = useSelector((state) => state.posts);

  const classes = useStyles();

  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post}></Post>
        </Grid>
      ))}
    </Grid>
  );
};
export default Posts;
