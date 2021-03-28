import React from 'react'
import Typography from '@material-ui/core/Typography'

const Footer = () => {
  return (
    <Typography
      style={{ marginTop: '2rem', marginBottom: '2rem' }}
      align="center"
    >
      Nahdi &copy; {new Date().getFullYear()}
    </Typography>
  )
}

export default Footer
