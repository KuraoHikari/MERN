import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000' });
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});
export const fetchPosts = () => API.get('/posts');
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPosts = (newPost) => API.post('/posts', newPost);
export const updatePosts = (id, updatedPost) => API.patch(`${'/posts'}/${id}`, updatedPost);
export const deletePosts = (id) => API.delete(`/posts/${id}`);
export const likePosts = (id) => API.patch(`/posts/${id}/like-post`);

export const signIn = (formData) => API.post(`/users/signin`, formData);
export const signUp = (formData) => API.post(`/users/signup`, formData);
