import * as api from '../api';
import { CREATE, FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes';

//Action Creator

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getPostsBySearch = (serachQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchPostsBySearch(serachQuery);
    // dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const ceratePosts = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPosts(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePosts(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePosts(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
export const likePost = (id) => async (dispatch) => {
  try {
    console.log('masuk');
    const { data } = await api.likePosts(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// api.fetchPosts
