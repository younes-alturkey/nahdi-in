import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'

const PresentationScreen = () => {
  const [loading, setLoading] = useState('none')

  useEffect(() => {
    setTimeout(() => {
      setLoading('block')
    }, 2000)
  })

  return (
    <>
      <div style={{ width: '100%', height: '100%', display: loading }}>
        <iframe
          title="WelcomePresentation"
          className="presentation"
          src="https://younes-alturkey.github.io/nahdi-wel-pre/"
        />
      </div>
      {loading === 'none' ? <Loading /> : <></>}
    </>
  )
}

export default PresentationScreen
