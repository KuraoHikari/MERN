import express from 'express';
const router = express.Router();

import auth from './../middleware/auth.js';

import { getPosts, updatePosts, createPosts, deletePosts, likePost } from '../controllers/posts.js';

router.get('/', getPosts);
router.post('/', auth, createPosts);
router.patch('/:id', auth, updatePosts);
router.delete('/:id', auth, deletePosts);
router.patch('/:id/like-post', auth, likePost);
export default router;
