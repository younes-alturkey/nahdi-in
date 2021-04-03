import React from 'react'
import Particles from 'react-particles-js'
import Logo from '../assets/images/logo.png'

const AppBackground = () => {
  return (
    <Particles
      id="app-background"
      params={{
        particles: {
          number: {
            value: 8,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 1,
            out_mode: 'out',
          },
          shape: {
            type: ['image', 'circle'],
            image: [
              {
                src: Logo,
                height: 20,
                width: 23,
              },
              {
                src: Logo,
                height: 20,
                width: 20,
              },
              {
                src: Logo,
                height: 20,
                width: 20,
              },
            ],
          },
          color: {
            value: '#CCC',
          },
          size: {
            value: 30,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
    />
  )
}

export default AppBackground
