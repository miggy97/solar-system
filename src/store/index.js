import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    planetInfo: {
      sun: {
        name: 'Sun',
        desc: 'This is the Sun'
      },
      mercury: {
        name: 'Mercury',
        distanceToSun: '58M km',
        distanceToEarth: '222M km',
        temperature: [
          { tem: '430ºC during the day' },
          { tem: '-180ºC at night' }
        ],
        diameter: '4.879 km',
        dayDuration: '58d 15h 30m',
        yearDuration: '88 days',
        curiosities: [
          { curi: 'Mercury is the closest to de Sun'},
          { curi: 'Most extreame temperature fluctuations'},
          { curi: 'Is the smallest planet in the Solar System'},
          { curi: 'Mercury has Ice'},
          { curi: 'It has thinnest atmosphere'},
        ],
      },
      venus: {
        name: 'Venus',
        distanceToSun: '108M km',
        distanceToEarth: '107M km',
        temperature: [
          { tem: '462ºC average temperature' },
        ],
        diameter: '12.104 km',
        dayDuration: '116d 18h 0m',
        yearDuration: '225 days',
        curiosities: [
          { curi: 'Venus is the hottest planet in the Solar System (even more than Mercury)'},
          { curi: 'Unlike the other planets Venus spins clockwise on its axis' },
          { curi: 'Venus has 90 times the atmospheric pressure of Earth' },
          { curi: 'Venus is the second brightest natural object in the night sky after the Moon' },
        ],
      },
      earth: {
        name: 'Earth',
        distanceToSun: '147M km',
        distanceToEarth: '0',
        temperature: [
          { tem: '16ºC average temperature' }
        ],
        diameter: '12.742 km',
        dayDuration: '0d 23h 56m',
        yearDuration: '365 days',
        curiosities: [
          { curi: 'The Earth was once believed to be the centre of the universe'},
          { curi: 'The Earth is the densest planet in the Solar System'},
          { curi: 'The Earth’s rotation is gradually slowing'},
          { curi: 'There is only one natural satellite of the planet Earth (Moon)'},
        ],
      },
      mars: {
        name: 'Mars',
        distanceToSun: '228M km',
        distanceToEarth: '55M km',
        temperature: [
          { tem: '-28ºC average temperature' }
        ],
        diameter: '6.779 km',
        dayDuration: '1d 0h 37m',
        yearDuration: '687 days',
        curiosities: [
          { curi: 'Mars is also known as the "Red Planet"'},
          { curi: 'Mars is red because de chemical iron oxide in rocks and solid' },
          { curi: 'Is the second smallest planet, roughly half the size of Earth' },
          { curi: 'There is water on Mars in majority as ice' },
          { curi: 'Mars has two moons (Phobos and Deimos)' },
        ],
      },
      jupiter: {
        name: 'Jupiter',
        distanceToSun: '779M km',
        distanceToEarth: '588M km',
        temperature: [
          { tem: '-108ºC average temperature' }
        ],
        diameter: '139.820 km',
        dayDuration: '0d 9h 56m',
        yearDuration: '12 years',
        curiosities: [
          { curi: 'Jupiter has the shortest day of all the planets'},
          { curi: 'The Great Red Spot is a huge storm on Jupiter. So large that three Earths could fit'},
          { curi: 'Jupiter has 79 moons (Io, Europa, Callisto...)'},
          { curi: 'Jupiter\'s moon Ganymede is bigger than Mercury'},
          { curi: 'Some Jupiter\'s moons has subsurface oceans'},
        ],
      },
      saturn: {
        name: 'Saturn',
        distanceToSun: '1400M km',
        distanceToEarth: '1200M km',
        temperature: [
          { tem: '-138ºC average temperature' }
        ],
        diameter: '116.460 km',
        dayDuration: '0d 10h 42m',
        yearDuration: '29 years',
        curiosities: [
          { curi: 'Saturn has 82 moons (Titan, Enceladus, Rhea...)'},
          { curi: 'Saturn has more than 30 rings in 7 groups'},
          { curi: 'Saturn is the most distant planet that can be seen with the naked eye'},
          { curi: 'Saturn is made mostly of hydrogen (Deep inside hydrogen becomes metallic)'},
          { curi: 'Saturn has more moons discovered than any other planet'}

        ],
      },
      uranus: {
        name: 'Uranus',
        distanceToSun: '2900M km',
        distanceToEarth: '2600M km',
        temperature: [
          { tem: '-195ºC average temperature' }
        ],
        diameter: '50.724 km',
        dayDuration: '0d 17h 14m',
        yearDuration: '84 years',
        curiosities: [
          { curi: 'Uranus has 27 known moons (Miranda, Titania, Ariel...)'},
          { curi: 'Uranus has 13 rings'},
          { curi: 'Uranus is often referred to as an “ice giant” planet'},
          { curi: 'Uranus hits the coldest temperatures of any planet'},
          { curi: 'Only one spacecraft has flown by Uranus (Voyager 2)'},
        ],
      },
      neptun: {
        name: 'Neptun',
        distanceToSun: '4500M km',
        distanceToEarth: '4300M km',
        temperature: [
          { tem: '-201ºC average temperature' }
        ],
        diameter: '49.244 km',
        dayDuration: '0d 16h 6m',
        yearDuration: '165 years',
        curiosities: [
          { curi: 'Neptun has 14 known moons like Triton'},
          { curi: 'Neptune is the most distant planet from the Sun'},
          { curi: 'The atmosphere of Neptune is made of hydrogen and helium, with some methane'},
          { curi: 'Neptune has a very active climate'},
        ],
      },
    }
  },
  getters: {
    getPlanetInfo: (state) => (planet) => {
      return state.planetInfo[planet];
    }
  }
})