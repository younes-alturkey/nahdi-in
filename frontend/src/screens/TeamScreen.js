import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { Container } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { ButtonBase } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip'
import Avatar from '@material-ui/core/Avatar'
import Logo from '../assets/images/logo.png'
import CEOPhoto from '../assets/images/yasser.png'
import CFOPhoto from '../assets/images/moahmmed.png'
import VSPPhoto from '../assets/images/raed.png'
import VNDPhoto from '../assets/images/zuhair.png'
import VITPhoto from '../assets/images/khalid.png'
import VMCPhoto from '../assets/images/hossam.png'
import CHROPhoto from '../assets/images/samer.png'
import VPMPhoto from '../assets/images/hani.png'
import VPCPhoto from '../assets/images/karim.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '2rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  center: {
    alignItems: 'center',
    justify: 'center',
    textAlign: 'center',
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    boxShadow: theme.shadows[3],
  },
  divider: {
    borderBottom: 'solid',
    borderWidth: '1px',
    color: '#1B5D6B',
    padding: '0.5rem',
    margin: 'auto',
    width: '1.5rem',
  },
}))

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    padding: theme.spacing(3),
    backgroundColor: '#1B5D6B',
    color: '#FFFFFF',
    maxWidth: 250,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    textDecoration: 'none',
  },
}))(Tooltip)

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
    backgroundColor: '#FFFFFF',
  },
}))(Avatar)

const TeamScreen = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState('none')

  useEffect(() => {
    setTimeout(() => {
      setLoading('block')
    }, 1000)
  })
  return (
    <>
      <Container className={classes.root} style={{ display: loading }}>
        <Grid className={classes.center} container spacing={3}>
          <Grid item xs={12}>
            <Typography>Executive Team</Typography>
            <div className={classes.divider} />
          </Grid>
          <Grid item xs={12}>
            <ButtonBase centerRipple="true">
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">Yasser Joharji</Typography>
                    <b>{'Chief Executive Officer'}</b> <b>{'• CEO Office'}</b>{' '}
                    <b>{'joharji.y@nahdi.sa'}</b> <b>{'+966 50 565 9843'}</b>
                  </React.Fragment>
                }
              >
                <Badge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  badgeContent={<SmallAvatar alt="Nahdi Logo" src={Logo} />}
                >
                  <Avatar
                    className={classes.large}
                    alt="CEO Image"
                    src={CEOPhoto}
                  />
                </Badge>
              </HtmlTooltip>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">Mohammed Alkhubani</Typography>
                  <b>{'Chief Financial Officer'}</b> <b>{'• CFO Office'}</b>{' '}
                  <b>{'alkhubani.ma@nahdi.sa'}</b> <b>{'+966 55 552 2355'}</b>
                </React.Fragment>
              }
            >
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<SmallAvatar alt="Nahdi Logo" src={Logo} />}
              >
                <Avatar
                  className={classes.large}
                  alt="CFO Image"
                  src={CFOPhoto}
                />
              </Badge>
            </HtmlTooltip>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">Raed Monagel</Typography>
                  <b>{'VP Supply Chain'}</b> <b>{'• Supply Chain'}</b>{' '}
                  <b>{'monagel.rj@nahdi.sa'}</b> <b>{'+966 50 566 1807'}</b>
                </React.Fragment>
              }
            >
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<SmallAvatar alt="Nahdi Logo" src={Logo} />}
              >
                <Avatar
                  className={classes.large}
                  alt="VP Supply Chain Image"
                  src={VSPPhoto}
                />
              </Badge>
            </HtmlTooltip>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">Zuhair Aytah</Typography>
                  <b>{'VP Netowrk Development'}</b> <b>{'• Network Devs'}</b>{' '}
                  <b>{'aytah.zm@nahdi.sa'}</b> <b>{'+966 50 568 5128'}</b>
                </React.Fragment>
              }
            >
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<SmallAvatar alt="Nahdi Logo" src={Logo} />}
              >
                <Avatar
                  className={classes.large}
                  alt="VP Network Development Image"
                  src={VNDPhoto}
                />
              </Badge>
            </HtmlTooltip>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">Khalid Tadlaoui</Typography>
                  <b>{'VP Information Technology'}</b> <b>{'• IT'}</b>{' '}
                  <b>{'tadlaoui.k@nahdi.sa'}</b> <b>{'+966 55 993 3196'}</b>
                </React.Fragment>
              }
            >
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<SmallAvatar alt="Nahdi Logo" src={Logo} />}
              >
                <Avatar
                  className={classes.large}
                  alt="VP IT Image"
                  src={VITPhoto}
                />
              </Badge>
            </HtmlTooltip>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">Hossam Khattab</Typography>
                  <b>{'VP Marketing & External Communication'}</b> <b>{''}</b>{' '}
                  <b>{'khattab.h@nahdi.sa'}</b> <b>{'+966 653 5288'}</b>
                </React.Fragment>
              }
            >
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<SmallAvatar alt="Nahdi Logo" src={Logo} />}
              >
                <Avatar
                  className={classes.large}
                  alt="VP Marketing and External Comms Image"
                  src={VMCPhoto}
                />
              </Badge>
            </HtmlTooltip>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">Samer Bokhare</Typography>
                  <b>{'VP Human Resources'}</b> <b>{''}</b>{' '}
                  <b>{'bokharee.s@nahdi.sa'}</b> <b>{'+966 55 766 2663'}</b>
                </React.Fragment>
              }
            >
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<SmallAvatar alt="Nahdi Logo" src={Logo} />}
              >
                <Avatar
                  className={classes.large}
                  alt="VP Human Resources Image"
                  src={CHROPhoto}
                />
              </Badge>
            </HtmlTooltip>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">Hani Ismail</Typography>
                  <b>{'VP Marketing'}</b> <b>{''}</b>{' '}
                  <b>{'ismail.hm3@nahdi.sa'}</b> <b>{'+966 50 560 7791'}</b>
                </React.Fragment>
              }
            >
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<SmallAvatar alt="Nahdi Logo" src={Logo} />}
              >
                <Avatar
                  className={classes.large}
                  alt="VP Marketing Image"
                  src={VPMPhoto}
                />
              </Badge>
            </HtmlTooltip>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">Karim Dimitri</Typography>
                  <b>{'VP Commercial'}</b> <b>{''}</b>{' '}
                  <b>{'dimitri.kg@nahdi.sa'}</b> <b>{'+966 54 3188 485'}</b>
                </React.Fragment>
              }
            >
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<SmallAvatar alt="Nahdi Logo" src={Logo} />}
              >
                <Avatar
                  className={classes.large}
                  alt="VP Commercial Image"
                  src={VPCPhoto}
                />
              </Badge>
            </HtmlTooltip>
          </Grid>
        </Grid>
      </Container>
      {loading === 'none' ? <Loading /> : <></>}
    </>
  )
}

export default TeamScreen
