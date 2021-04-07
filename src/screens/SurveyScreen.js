import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'

const SurveyScreen = () => {
  const [loading, setLoading] = useState('none')

  useEffect(() => {
    setTimeout(() => {
      setLoading('block')
    }, 500)
  })

  return (
    <>
      <div style={{ width: '100%', height: '100%', display: loading }}>
        <iframe
          title="NahdiSurvey"
          className="survey"
          src="https://nahdi.surveymonkey.com/r/?sm=pWfwdI60G5GhzUR4uiw4zg_3D_3D"
        />
      </div>
      {loading === 'none' ? <Loading /> : <></>}
    </>
  )
}

export default SurveyScreen
