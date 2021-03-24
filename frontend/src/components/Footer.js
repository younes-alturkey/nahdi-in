import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const Footer = () => {
  return (
    <Container>
      <Typography color="primary" align="center">
        <Link
          style={{ textDecoration: 'none' }}
          //   rel="noopener"
          target="_blank"
          href="https://www.nahdi.sa/en/"
        >
          Nahdi Medical Company &copy; {new Date().getFullYear()}
        </Link>
      </Typography>
    </Container>
  )
}

export default Footer
