import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    language: 'EN',
    isInitialAnim: true,
    planetsEN: {
      sun: 'Sun',
      mercury: 'Mercury',
      venus: 'Venus',
      earth: 'Earth',
      mars: 'Mars',
      jupiter: 'Jupiter',
      saturn: 'Saturn',
      uranus: 'Uranus',
      neptune: 'Neptune'
    },
    planetsES: {
      sun: 'Sol',
      mercury: 'Mercurio',
      venus: 'Venus',
      earth: 'Tierra',
      mars: 'Marte',
      jupiter: 'Júpiter',
      saturn: 'Saturno',
      uranus: 'Urano',
      neptune: 'Neptuno',
    },
    planetInfoEN: {
      sun: {
        name: 'Sun',
        planetName: 'Sun',
        desc: 'This is the Sun'
      },
      mercury: {
        name: 'Mercury',
        planetName: 'Mercury',
        distanceToSun: '58M km',
        distanceToEarth: '222M km',
        temperature: [{
            tem: '430ºC during the day'
          },
          {
            tem: '-180ºC at night'
          }
        ],
        diameter: '4.879 km',
        dayDuration: '58d 15h 30m',
        yearDuration: '88 days',
        curiosities: [{
            curi: 'Mercury is the closest to de Sun'
          },
          {
            curi: 'Most extreame temperature fluctuations'
          },
          {
            curi: 'Is the smallest planet in the Solar System'
          },
          {
            curi: 'Mercury has Ice'
          },
          {
            curi: 'It has thinnest atmosphere'
          },
        ],
      },
      venus: {
        name: 'Venus',
        planetName: 'Venus',
        distanceToSun: '108M km',
        distanceToEarth: '107M km',
        temperature: [{
          tem: '462ºC average temperature'
        }, ],
        diameter: '12.104 km',
        dayDuration: '116d 18h 0m',
        yearDuration: '225 days',
        curiosities: [{
            curi: 'Venus is the hottest planet in the Solar System (even more than Mercury)'
          },
          {
            curi: 'Unlike the other planets Venus spins clockwise on its axis'
          },
          {
            curi: 'Venus has 90 times the atmospheric pressure of Earth'
          },
          {
            curi: 'Venus is the second brightest natural object in the night sky after the Moon'
          },
        ],
      },
      earth: {
        name: 'Earth',
        planetName: 'Earth',
        distanceToSun: '147M km',
        distanceToEarth: '0',
        temperature: [{
          tem: '16ºC average temperature'
        }],
        diameter: '12.742 km',
        dayDuration: '0d 23h 56m',
        yearDuration: '365 days',
        curiosities: [{
            curi: 'The Earth was once believed to be the centre of the universe'
          },
          {
            curi: 'The Earth is the densest planet in the Solar System'
          },
          {
            curi: 'The Earth’s rotation is gradually slowing'
          },
          {
            curi: 'There is only one natural satellite of the planet Earth (Moon)'
          },
        ],
      },
      mars: {
        name: 'Mars',
        planetName: 'Mars',
        distanceToSun: '228M km',
        distanceToEarth: '55M km',
        temperature: [{
          tem: '-28ºC average temperature'
        }],
        diameter: '6.779 km',
        dayDuration: '1d 0h 37m',
        yearDuration: '687 days',
        curiosities: [{
            curi: 'Mars is also known as the "Red Planet"'
          },
          {
            curi: 'Mars is red because de chemical iron oxide in rocks and solid'
          },
          {
            curi: 'Is the second smallest planet, roughly half the size of Earth'
          },
          {
            curi: 'There is water on Mars in majority as ice'
          },
          {
            curi: 'Mars has two moons (Phobos and Deimos)'
          },
        ],
      },
      jupiter: {
        name: 'Jupiter',
        planetName: 'Jupiter',
        distanceToSun: '779M km',
        distanceToEarth: '588M km',
        temperature: [{
          tem: '-108ºC average temperature'
        }],
        diameter: '139.820 km',
        dayDuration: '0d 9h 56m',
        yearDuration: '12 years',
        curiosities: [{
            curi: 'Jupiter has the shortest day of all the planets'
          },
          {
            curi: 'The Great Red Spot is a huge storm on Jupiter. So large that three Earths could fit'
          },
          {
            curi: 'Jupiter has 79 moons (Io, Europa, Callisto...)'
          },
          {
            curi: 'Jupiter\'s moon Ganymede is bigger than Mercury'
          },
          {
            curi: 'Some Jupiter\'s moons has subsurface oceans'
          },
        ],
      },
      saturn: {
        name: 'Saturn',
        planetName: 'Saturn',
        distanceToSun: '1400M km',
        distanceToEarth: '1200M km',
        temperature: [{
          tem: '-138ºC average temperature'
        }],
        diameter: '116.460 km',
        dayDuration: '0d 10h 42m',
        yearDuration: '29 years',
        curiosities: [{
            curi: 'Saturn has 82 moons (Titan, Enceladus, Rhea...)'
          },
          {
            curi: 'Saturn has more moons discovered than any other planet'
          },
          {
            curi: 'Saturn has more than 30 rings in 7 groups'
          },
          {
            curi: 'Saturn is the most distant planet that can be seen with the naked eye'
          },
          {
            curi: 'Saturn is made mostly of hydrogen (Deep inside hydrogen becomes metallic)'
          }
        ],
      },
      uranus: {
        name: 'Uranus',
        planetName: 'Uranus',
        distanceToSun: '2900M km',
        distanceToEarth: '2600M km',
        temperature: [{
          tem: '-195ºC average temperature'
        }],
        diameter: '50.724 km',
        dayDuration: '0d 17h 14m',
        yearDuration: '84 years',
        curiosities: [{
            curi: 'Uranus has 27 known moons (Miranda, Titania, Ariel...)'
          },
          {
            curi: 'Uranus has 13 rings'
          },
          {
            curi: 'Uranus is often referred to as an “ice giant” planet'
          },
          {
            curi: 'Uranus hits the coldest temperatures of any planet'
          },
          {
            curi: 'Only one spacecraft has flown by Uranus (Voyager 2)'
          },
        ],
      },
      neptune: {
        name: 'Neptune',
        planetName: 'Neptune',
        distanceToSun: '4500M km',
        distanceToEarth: '4300M km',
        temperature: [{
          tem: '-201ºC average temperature'
        }],
        diameter: '49.244 km',
        dayDuration: '0d 16h 6m',
        yearDuration: '165 years',
        curiosities: [{
            curi: 'Neptune has 14 known moons like Triton'
          },
          {
            curi: 'Neptune is the most distant planet from the Sun'
          },
          {
            curi: 'The atmosphere of Neptune is made of hydrogen and helium, with some methane'
          },
          {
            curi: 'Neptune has a very active climate'
          },
        ],
      },
    },
    planetInfoES: {
      sun: {
        name: 'Sun',
        planetName: 'Sol',
        desc: 'This is the Sun'
      },
      mercury: {
        name: 'Mercury',
        planetName: 'Mercurio',
        distanceToSun: '58M km',
        distanceToEarth: '222M km',
        temperature: [{
            tem: '430ºC durante el día'
          },
          {
            tem: '-180ºC por la noche'
          }
        ],
        diameter: '4.879 km',
        dayDuration: '58d 15h 30m',
        yearDuration: '88 días',
        curiosities: [{
            curi: 'Mercurio es el más cercano al Sol'
          },
          {
            curi: 'Tiene las fluctuaciones más extremas de temperatura'
          },
          {
            curi: 'Es el más pequeño del Sistema Solar'
          },
          {
            curi: 'Mercurio tiene hielo'
          },
          {
            curi: 'Tiene la atmosfera más fina entre todos los planetas'
          },
        ],
      },
      venus: {
        name: 'Venus',
        planetName: 'Venus',
        distanceToSun: '108M km',
        distanceToEarth: '107M km',
        temperature: [{
          tem: '462ºC temperatura media'
        }, ],
        diameter: '12.104 km',
        dayDuration: '116d 18h 0m',
        yearDuration: '225 días',
        curiosities: [{
            curi: 'Venus es el planeta con mayor temperatura del Sistema Solar (incluso más que Mercurio)'
          },
          {
            curi: 'Por el contrario de los demás planetas Venus gira en sentido horario respecto a su eje'
          },
          {
            curi: 'Venus tine 90 veces más presión atmosférica que la Tierra'
          },
          {
            curi: 'Venus es el segundo objeto más brillante del cielo nocturno, después de la Luna'
          },
        ],
      },
      earth: {
        name: 'Earth',
        planetName: 'Tierra',
        distanceToSun: '147M km',
        distanceToEarth: '0',
        temperature: [{
          tem: '16ºC temperatura media'
        }],
        diameter: '12.742 km',
        dayDuration: '0d 23h 56m',
        yearDuration: '365 días',
        curiosities: [{
            curi: 'Antiguamente se creia que la tierra era el centro del universo'
          },
          {
            curi: 'La Tierra es el planeta más denso del Sistema Solar'
          },
          {
            curi: 'La rotacion de la Tierra cada vez es gradualmente más lenta'
          },
          {
            curi: 'La Tierra solo tiene un satélite natural, la Luna'
          },
        ],
      },
      mars: {
        name: 'Mars',
        planetName: 'Marte',
        distanceToSun: '228M km',
        distanceToEarth: '55M km',
        temperature: [{
          tem: '-28ºC temperatura media'
        }],
        diameter: '6.779 km',
        dayDuration: '1d 0h 37m',
        yearDuration: '687 días',
        curiosities: [{
            curi: 'Marte también es conocido como el "Planeta Rojo"'
          },
          {
            curi: 'Marte es rojo por el óxido de hierro químico en las rocas'
          },
          {
            curi: 'Es el segundo planeta más pequeño del Sistema Solar, aproximadamente la mitad de la tierra'
          },
          {
            curi: 'Hay agua en Marte, mayoritariemente en forma de hielo'
          },
          {
            curi: 'Marte tiene 2 lunas (Phobos y Deimos)'
          },
        ],
      },
      jupiter: {
        name: 'Jupiter',
        planetName: 'Júpiter',
        distanceToSun: '779M km',
        distanceToEarth: '588M km',
        temperature: [{
          tem: '-108ºC temperatura media'
        }],
        diameter: '139.820 km',
        dayDuration: '0d 9h 56m',
        yearDuration: '12 años',
        curiosities: [{
            curi: 'Júpiter tiene el día más corto entre todos los planetas'
          },
          {
            curi: 'La Gran Mancho Roja es una tormeta en Júpiter. Tan grande que 3 Tierras podría caber ahí'
          },
          {
            curi: 'Júpiter tiene 79 lunas (Io, Europa, Callisto...)'
          },
          {
            curi: 'Ganymede una de las lunas de Júpiter es más grande que Mercurio'
          },
          {
            curi: 'Algunas lunas de Júpiter tienen oceanos en la subsuperficie'
          },
        ],
      },
      saturn: {
        name: 'Saturn',
        planetName: 'Saturn',
        distanceToSun: '1400M km',
        distanceToEarth: '1200M km',
        temperature: [{
          tem: '-138ºC temperatura media'
        }],
        diameter: '116.460 km',
        dayDuration: '0d 10h 42m',
        yearDuration: '29 años',
        curiosities: [{
            curi: 'Saturno tiene 82 lunas (Titan, Enceladus, Rhea...)'
          },
          {
            curi: 'Saturno tiene el mayor numero de lunas descubiertas entre todos los planetas'
          },
          {
            curi: 'Saturno tiene más de 30 anillos divididos en grupos de 7'
          },
          {
            curi: 'Saturno es el planeta más lejanos que se puede ver a simple vista'
          },
          {
            curi: 'Saturno está hecho principalmente de hidrogeno (En el interior de Saturno el hidrogeno se convierte en metal)'
          }
        ],
      },
      uranus: {
        name: 'Uranus',
        planetName: 'Urano',
        distanceToSun: '2900M km',
        distanceToEarth: '2600M km',
        temperature: [{
          tem: '-195ºC temperatura media'
        }],
        diameter: '50.724 km',
        dayDuration: '0d 17h 14m',
        yearDuration: '84 años',
        curiosities: [{
            curi: 'Urano tiene 27 lunas conocidas (Miranda, Titania, Ariel...)'
          },
          {
            curi: 'Urano tiene 13 anillos'
          },
          {
            curi: 'Urano se conoce también como el "Gigante de Hielo"'
          },
          {
            curi: 'Urano alcanza las temperaturas más frias entre todos los planetas'
          },
          {
            curi: 'Solo una astronave ha pasado cerca de Urano (Voyager 2)'
          },
        ],
      },
      neptune: {
        name: 'Neptune',
        planetName: 'Neptuno',
        distanceToSun: '4500M km',
        distanceToEarth: '4300M km',
        temperature: [{
          tem: '-201ºC temperatura media'
        }],
        diameter: '49.244 km',
        dayDuration: '0d 16h 6m',
        yearDuration: '165 años',
        curiosities: [{
            curi: 'Neptuno tiene 14 lunas conocidas como Triton'
          },
          {
            curi: 'Neptuno es el planeta más lejano al Sol'
          },
          {
            curi: 'La atmosfera de Neptuno esta hecho de hidrógeno y helio, con algo de metano'
          },
          {
            curi: 'Neptuno tiene un clima muy activo'
          },
        ],
      },
    }
  },
  getters: {
    getPlanetInfo: (state) => (planet) => {
      if(state.language === 'EN'){
        return state.planetInfoEN[planet];
      } else {
        return state.planetInfoES[planet];
      }
      
    },
    getIsInitialAnim(state) {
      return state.isInitialAnim;
    },
    getLanguage(state) {
      return state.language;
    },
    getPlanets(state) {
      if (state.language === 'EN') {
        return state.planetsEN;
      } else {
        return state.planetsES;
      }
    }
  },
  mutations: {
    setIsInitialAnim(state, payload) {
      state.isInitialAnim = payload;
    },
    setLanguage(state, payload) {
      state.language = payload;
    }
  }
})