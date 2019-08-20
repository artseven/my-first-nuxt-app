/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts (state, posts) {
        state.loadedPosts = posts
      },
      addPost (state, post) {
        state.loadedPosts.push(post)
      },
      editPost (state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
        state.loadedPosts[postIndex] = editedPost
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
			  return axios.get('https://nuxt-blog-c63d2.firebaseio.com/posts.json')
          .then((res) => {
            const postsArray = []
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e));
		},
		setPosts (vuexContext, posts) {
			vuexContext.commit('setPosts', posts)
    },
    addPost (vuexContext, post) {
      const createdPost = {
        ...post,
        updatedDate: new Date()
      }
      return axios.post('https://nuxt-blog-c63d2.firebaseio.com/posts.json', createdPost)
				.then((res) => {
          vuexContext.commit('addPost', { ...createdPost, id: res.data.name })
				})
				.catch(e => console.log(e))
    },
    editPost (vuexContext, editedPost) {
    }
    },
    getters: {
      loadedPosts (state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
