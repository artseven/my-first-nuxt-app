/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
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
      },
      setToken (state, token) {
        state.token = token
      },
      clearToken (state) {
        state.token = null
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        return context.app.$axios
          .$get('/posts.json')
          .then((data) => {
            const postsArray = []
            for (const key in data) {
              postsArray.push({ ...data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e))
		  },
      setPosts (vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      addPost (vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }
        return this.$axios.$post('https://nuxt-blog-c63d2.firebaseio.com/posts.json?auth=' + vuexContext.state.token, createdPost)
          .then((data) => {
            vuexContext.commit('addPost', { ...createdPost, id: data.name })
          })
          .catch(e => console.log(e))
      },
      editPost (vuexContext, editedPost) {
        return this.$axios.$put('https://nuxt-blog-c63d2.firebaseio.com/posts/' +
          editedPost.id +
          '.json?auth=' + vuexContext.state.token, editedPost)
          .then(() => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(e => console.log(e))
      },
      authenticateUser (vuexContext, authData) {
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fbApiKey
        
        if (!authData.isLogin) {
          authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.fbApiKey
        }
        return this.$axios
        .$post(authUrl, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
        ).then((result) => {
          vuexContext.commit('setToken', result.idToken)
          vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000)
        })
        .catch(e => console.log(e)) 
      },
      setLogoutTimer (vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearToken')
        }, duration)
      }
    },
    getters: {
      loadedPosts (state) {
        return state.loadedPosts
      },
      isAuthenticated (state) {
        return state.token != null
      }
    }
  })
}

export default createStore
