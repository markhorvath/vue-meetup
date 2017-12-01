import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/IMG_2259_-_Washington_DC_-_US_Capitol.JPG',
        id: 'adkjadk123',
        title: 'Meetup DC',
        date: new Date(),
        location: 'The National Mall',
        description: 'orem ispusm facto nolta'
      },
      {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Tokyo_%2816043023330%29.jpg',
        id: 'adkjadk124',
        title: 'Meetup Tokyo',
        date: new Date(),
        location: 'Brooklyn Pizza Joint',
        description: 'orem ispusm'
      }],
    user: null
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imgUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: payload.id
      }
    // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      console.log(state)
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      console.log(state.loadedMeetups[0].id)
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    user (state) {
      return state.user
    }
  }
})
