import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { Container } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
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
import saleh from '../assets/images/saleh.png'
import abdullah from '../assets/images/abdullah.png'
import abdelelah from '../assets/images/abdelelah.png'
import ibrahim from '../assets/images/ibrahim.png'
import junaid from '../assets/images/junaid.png'
import voog from '../assets/images/voog.png'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '2rem',
    marginBottom: '5rem',
  },
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#4096A6',
    borderRadius: theme.spacing(2),
  },
  center: {
    alignItems: 'center',
    justify: 'center',
    textAlign: 'center',
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    boxShadow: theme.shadows[3],
    cursor: 'pointer',
  },
  divider: {
    borderBottom: 'solid',
    borderWidth: '1px',
    color: '#4096A6',
    padding: '0.5rem',
    margin: 'auto',
    width: '1.5rem',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    padding: theme.spacing(3),
    backgroundColor: '#4096A6',
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

  const data = {
    board: {
      team: 'Board of Directors',
      chairman: {
        name: 'Saleh Bin Mahfouz',
        title: 'Chairman',
        image: saleh,
        alt: 'Chairman Image',
      },
      founder: {
        name: 'Abdullah Al Nahdi',
        title: 'Founder and Managing Director',
        image: abdullah,
        alt: 'Founder Image',
      },
      boardMember1: {
        name: 'Abdelelah Bin Mahfouz',
        title: 'Board Member',
        image: abdelelah,
        alt: 'Board Member Image',
      },
      boardMember2: {
        name: 'Junaid Bajwa',
        title: 'Member',
        image: junaid,
        alt: 'Member Image',
      },
      boardMember3: {
        name: 'Romaine Voog',
        title: 'Member',
        image: voog,
        alt: 'Member Image',
      },
      boardMember4: {
        name: 'Dr. Ibrahim Al Madhoun',
        title: 'Board Member',
        image: ibrahim,
        alt: 'Board Member Image',
      },
    },
    executive: {
      team: 'Executive Team',
      ceo: {
        name: 'Yasser Joharji',
        title: 'Chief Executive Officer',
        image: CEOPhoto,
        alt: 'CEO Image',
      },
      cfo: {
        name: 'Mohammed Alkhubani',
        title: 'Chief Financial Officer',
        image: CFOPhoto,
        alt: 'CFO Image',
      },
      vsp: {
        name: 'Raed Monagel',
        title: 'VP Supply Chain',
        image: VSPPhoto,
        alt: 'VP SP Image',
      },
      vnd: {
        name: 'Zuhair Aytah',
        title: 'VP Netowrk Development',
        image: VNDPhoto,
        alt: 'VP Network Development Image',
      },
      vit: {
        name: 'Khalid Tadlaoui',
        title: 'VP Information Technology',
        image: VITPhoto,
        alt: 'VP IT Image',
      },
      vmc: {
        name: 'Hossam Khattab',
        title: 'VP Marketing & External Communication',
        image: VMCPhoto,
        alt: 'VP Marketing & External Communication Image',
      },
      chro: {
        name: 'Samer Bokhare',
        title: 'VP Human Resources',
        image: CHROPhoto,
        alt: 'VP Human Resources Image',
      },
      vpm: {
        name: 'Hani Ismail',
        title: 'VP Marketing',
        image: VPMPhoto,
        alt: 'VP Marketing Image',
      },
      vpc: {
        name: 'Karim Dimitri',
        title: 'VP Commercial',
        image: VPCPhoto,
        alt: 'VP Commercial Image',
      },
    },
  }

  const [select, setSelect] = useState('board')
  const [team, setTeam] = useState(data.board)

  const handleChange = (event) => {
    setSelect(event.target.value)

    if (select === 'board') setTeam(data.executive)
    else setTeam(data.board)
  }

  const TeamSelector = () => {
    return (
      <FormControl
        color="secondary"
        variant="filled"
        className={classes.formControl}
        fullWidth
      >
        <InputLabel>Team</InputLabel>
        <Select color="secondary" value={select} onChange={handleChange}>
          <MenuItem value={'board'}>Board of Directors</MenuItem>
          <MenuItem value={'executive'}>Executive Team</MenuItem>
        </Select>
      </FormControl>
    )
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading('block')
    }, 1000)
  })
  return (
    <>
      <Container
        className={classes.root}
        style={{ display: loading }}
        maxWidth="md"
      >
        <Paper elevation={20} className={classes.paper}>
          {select === 'board' ? (
            <Grid className={classes.center} container spacing={2}>
              <Grid item xs={12}>
                <TeamSelector />
                <div className={classes.divider} />
              </Grid>
              <Grid item xs={12}>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">
                        {team.chairman.name}
                      </Typography>
                      <b>{team.chairman.title}</b>{' '}
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
                      alt={team.chairman.alt}
                      src={team.chairman.image}
                    />
                  </Badge>
                </HtmlTooltip>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">
                        {team.founder.name}
                      </Typography>
                      <b>{team.founder.title}</b>{' '}
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
                      alt={team.founder.alt}
                      src={team.founder.image}
                    />
                  </Badge>
                </HtmlTooltip>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">
                        {team.boardMember1.name}
                      </Typography>
                      <b>{team.boardMember1.title}</b>{' '}
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
                      alt={team.boardMember1.alt}
                      src={team.boardMember1.image}
                    />
                  </Badge>
                </HtmlTooltip>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">
                        {team.boardMember2.name}
                      </Typography>
                      <b>{team.boardMember2.title}</b>{' '}
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
                      alt={team.boardMember2.alt}
                      src={team.boardMember2.image}
                    />
                  </Badge>
                </HtmlTooltip>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">
                        {team.boardMember3.name}
                      </Typography>
                      <b>{team.boardMember3.title}</b>{' '}
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
                      alt={team.boardMember3.alt}
                      src={team.boardMember3.image}
                    />
                  </Badge>
                </HtmlTooltip>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">
                        {team.boardMember4.name}
                      </Typography>
                      <b>{team.boardMember4.title}</b>{' '}
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
                      alt={team.boardMember4.alt}
                      src={team.boardMember4.image}
                    />
                  </Badge>
                </HtmlTooltip>
              </Grid>
            </Grid>
          ) : (
            <Grid className={classes.center} container spacing={3}>
              <Grid item xs={12}>
                <TeamSelector />
                <div className={classes.divider} />
              </Grid>
              <Grid item xs={12}>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">{team.ceo.name}</Typography>
                      <b>{team.ceo.title}</b>{' '}
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
                      alt={team.ceo.alt}
                      src={team.ceo.image}
                    />
                  </Badge>
                </HtmlTooltip>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">{team.cfo.name}</Typography>
                      <b>{team.cfo.title}</b>{' '}
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
                      alt={team.cfo.alt}
                      src={team.cfo.image}
                    />
                  </Badge>
                </HtmlTooltip>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">{team.vsp.name}</Typography>
                      <b>{team.vsp.title}</b>{' '}
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
                      alt={team.vsp.alt}
                      src={team.vsp.image}
                    />
                  </Badge>
                </HtmlTooltip>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">{team.vnd.name}</Typography>
                      <b>{team.vnd.title}</b>{' '}
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
                      alt={team.vnd.alt}
                      src={team.vnd.image}
                    />
                  </Badge>
                </HtmlTooltip>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">{team.vit.name}</Typography>
                      <b>{team.vit.title}</b>{' '}
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
                      alt={team.vit.alt}
                      src={team.vit.image}
                    />
                  </Badge>
                </HtmlTooltip>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">{team.vmc.name}</Typography>
                      <b>{team.vmc.title}</b>{' '}
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
                      alt={team.vmc.alt}
                      src={team.vmc.image}
                    />
                  </Badge>
                </HtmlTooltip>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">{team.chro.name}</Typography>
                      <b>{team.chro.title}</b>{' '}
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
                      alt={team.chro.alt}
                      src={team.chro.image}
                    />
                  </Badge>
                </HtmlTooltip>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">{team.vpm.name}</Typography>
                      <b>{team.vpm.title}</b>{' '}
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
                      alt={team.vpm.alt}
                      src={team.vpm.image}
                    />
                  </Badge>
                </HtmlTooltip>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">{team.vpc.name}</Typography>
                      <b>{team.vpc.title}</b>{' '}
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
                      alt={team.vpc.alt}
                      src={team.vpc.image}
                    />
                  </Badge>
                </HtmlTooltip>
              </Grid>
            </Grid>
          )}
        </Paper>
      </Container>
      {loading === 'none' ? <Loading /> : <></>}
    </>
  )
}

export default TeamScreen
