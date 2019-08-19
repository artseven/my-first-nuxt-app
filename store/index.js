/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import Vuex from 'vuex'

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
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
                {
                  id: '5',
                  title: 'Bearrusia',
                  thumbnail: 'https://media.giphy.com/media/Zd11ZERqDyA6CA8vxO/giphy.gif',
                  previewText: 'Tfw your bear is waiting at home'
                }
            ])
            resolve()
		  }, 2000)
        })
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
