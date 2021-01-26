import { createStore } from 'vuex'

export default createStore({
  state: {
    planetInfo: {
      sun: {
        name: 'Sun',
        desc: 'This is the Sun'
      },
      mercury: {
        name: 'Mercury',
        desc: 'This is Mercury'
      },
      venus: {
        name: 'Venus',
        desc: 'This is Venus'
      },
      earth: {
        name: 'Earth',
        desc: 'This is Earth'
      },
      mars: {
        name: 'Mars',
        desc: 'This is Mars'
      },
      jupiter: {
        name: 'Jupiter',
        desc: 'This is Jupiter'
      },
      saturn: {
        name: 'Saturn',
        desc: 'This is Saturn'
      },
      uranus: {
        name: 'Uranus',
        desc: 'This is Uranus'
      },
      neptun: {
        name: 'Neptun',
        desc: 'This is Neptun'
      },
    }
  },
  getters: {
    getPlanetInfo: (state) => (planet) => {
      return state.planetInfo[planet];
    }
  }
})
