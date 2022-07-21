import * as api from '../api';

//Action Creator

export const getPosts = () => async (dispatch) => {
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  try {
    const { data } = await api.fetchPosts();
    console.log(data, 'aaaaaaaaaaaa');

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const ceratePosts = (post) => async (dispatch) => {
  try {
    console.log(post, 'ini di actions');
    const { data } = await api.createPosts(post);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// api.fetchPosts
