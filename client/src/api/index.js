import axios from 'axios';

const url = 'https://mern-project-kurao.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPosts = (newPost) => axios.post(url, newPost);
export const updatePosts = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePosts = (id) => axios.delete(`${url}/${id}`);
export const likePosts = (id) => axios.patch(`${url}/${id}/like-post`);
