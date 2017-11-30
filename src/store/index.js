import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/IMG_2259_-_Washington_DC_-_US_Capitol.JPG',
        id: 'adkjadk123',
        title: 'Meetup DC',
        date: '2017-07-18',
        location: 'The National Mall',
        description: 'orem ispusm facto nolta'
      },
      {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Tokyo_%2816043023330%29.jpg',
        id: 'adkjadk124',
        title: 'Meetup Tokyo',
        date: '2017-07-20',
        location: 'Brooklyn Pizza Joint',
        description: 'orem ispusm'
      }],
    user: {
      id: 'adk1235',
      registeredMeetups: ['adkjadk124']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
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
    }
  }
})
