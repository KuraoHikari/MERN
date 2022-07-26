import Mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    return res.status(200).json(postMessages);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() });
  try {
    await newPost.save();
    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};
export const updatePosts = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const post = req.body;
    if (!Mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const updatePost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    return res.json(updatePost);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};
export const deletePosts = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!Mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    await PostMessage.findByIdAndRemove(_id);
    return res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};
export const likePost = async (req, res) => {
  try {
    const { id: _id } = req.params;

    if (!req.userId) return res.json({ message: 'Unauthenticated' });
    if (!Mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const post = await PostMessage.findById(_id);

    const index = post.likes.findIndex((id) => id === String(req.userId));
    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

    return res.json(updatedPost);
  } catch (error) {
    console.log(error);
    return res.status(409).json({ message: error.message });
  }
};
