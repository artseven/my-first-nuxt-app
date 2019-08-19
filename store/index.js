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
      }
    },
    actions: {
      	nuxtServerInit (vuexContext, context) {
			return axios.get('https://nuxt-blog-c63d2.firebaseio.com/posts.json')
				.then(res => {
					const postsArray = []
					for (const key in res.data) {
						postsArray.push({ ...res.data[key] })
					}
					vuexContext.commit('setPosts')
				})
				.catch(e => context.error(e));
		},
		setPosts (vuexContext, posts) {
			vuexContext.commit('setPosts', posts)
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
