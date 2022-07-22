import express from 'express';
const router = express.Router();

import { getPosts, updatePosts, createPosts, deletePosts, likePost } from '../controllers/posts.js';

router.get('/', getPosts);
router.post('/', createPosts);
router.patch('/:id', updatePosts);
router.delete('/:id', deletePosts);
router.patch('/:id/like-post', likePost);
export default router;
