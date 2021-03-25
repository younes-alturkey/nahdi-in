import React from 'react'
import Loading from './Loading'

const WelPresentation = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Loading />
      <iframe
        title="WelcomePresentation"
        className="presentation"
        src="https://younes-alturkey.github.io/Nahdi-Wel-Pre/"
      />
    </div>
  )
}

export default WelPresentation
