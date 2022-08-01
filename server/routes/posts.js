import express from 'express';
const router = express.Router();

import auth from './../middleware/auth.js';

import { getPostsBySearch, getPosts, updatePosts, createPosts, deletePosts, likePost, getPost, commentPost } from '../controllers/posts.js';
router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, createPosts);
router.patch('/:id', auth, updatePosts);
router.delete('/:id', auth, deletePosts);
router.patch('/:id/like-post', auth, likePost);
router.post('/:id/comment-post', auth, commentPost);
export default router;
