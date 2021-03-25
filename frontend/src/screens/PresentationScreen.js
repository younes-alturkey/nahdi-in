import React from 'react'
import Loading from '../components/Loading'

const PresentationScreen = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Loading />
      <iframe
        title="WelcomePresentation"
        className="presentation"
        src="https://younes-alturkey.github.io/nahdi-wel-pre/"
      />
    </div>
  )
}

export default PresentationScreen
