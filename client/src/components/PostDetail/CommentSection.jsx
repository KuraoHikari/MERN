import React, { useEffect, useRef, useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './style.js';
import { commentPost } from '../../actions/posts';

export const CommentSection = ({ post }) => {
  const classess = useStyles();
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState('');
  const user = JSON.parse(localStorage.getItem('profile'));
  const commentsRef = useRef();

  const handleClick = async () => {
    const finalComment = `${user.result.name}: ${comment}`;
    const newComments = await dispatch(commentPost(finalComment, post._id));
    setComments(newComments);
    setComment('');

    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <div className={classess.commentsOuterContainer}>
        <div className={classess.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments.map((commentPost, index) => (
            <Typography key={index} gutterBottom variant="subtitle1">
              <strong>{comments.split(': ')[0]}</strong>
              {comments.split(': ')[1]}
            </Typography>
          ))}
          <div ref={commentsRef}></div>
        </div>
        {user?.result?.name && (
          <div style={{ width: '70%' }}>
            <Typography gutterBottom variant="h6">
              Write a Comments
            </Typography>
            <TextField fullWidth rows={4} variant="outlined" multiline value={comment} onChange={(e) => setComment(e.target.value)} />
            <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment} variant="contained" color="primary" onClick={handleClick}>
              {' '}
              Comment{' '}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
