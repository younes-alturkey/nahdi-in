import React from 'react'
import { useStoreState } from 'easy-peasy'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import GroupIcon from '@material-ui/icons/Group'
import Drawer from '@material-ui/core/Drawer'
import Avatar from '@material-ui/core/Avatar'
import ButtonBase from '@material-ui/core/ButtonBase'
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown'
import DescriptionIcon from '@material-ui/icons/Description'
import Switch from '@material-ui/core/Switch'
import HomeIcon from '@material-ui/icons/Home'
import CastForEducationIcon from '@material-ui/icons/CastForEducation'
import TextsmsIcon from '@material-ui/icons/Textsms'
import SlideshowIcon from '@material-ui/icons/Slideshow'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import ExtensionIcon from '@material-ui/icons/Extension'
import logoImage from '../assets/images/logo.png'
import userImage from '../assets/images/barrak.png'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    position: 'sticky',
    top: 0,
    bottom: 0,
    paddingTop: 0,
    paddingBottom: 0,
    zIndex: 5,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'black',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    fontFamily: 'VariableBlack',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  drawerLogo: {
    margin: theme.spacing(3),
    height: '50%',
    width: '50%',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  list: {
    width: 280,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    textDecoration: 'none',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  logout: {
    paddingLeft: theme.spacing(6),
  },
  padding: {
    padding: theme.spacing(1),
  },
}))

export default function AppMenu({ toggleDarkMode, SignInHandler }) {
  const [activeLink, setActiveLink] = React.useState('home')
  const user = useStoreState((state) => state.userData)
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  const [checked, setChecked] = React.useState(false)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const anchor = 'left'

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          onClick={() => {
            setActiveLink('home')
          }}
          button
          key="home"
          component={Link}
          to={'/'}
        >
          <ListItemIcon>
            <HomeIcon color={activeLink === 'home' ? 'secondary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText>
            <Typography color={activeLink === 'home' ? 'secondary' : 'inherit'}>
              Home
            </Typography>
          </ListItemText>
        </ListItem>

        <ListItem
          onClick={() => {
            setActiveLink('welcome')
          }}
          button
          key="welcome"
          component={Link}
          to={'/welcome'}
        >
          <ListItemIcon>
            <SlideshowIcon
              color={activeLink === 'welcome' ? 'secondary' : 'inherit'}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography
              color={activeLink === 'welcome' ? 'secondary' : 'inherit'}
            >
              Welcome Presentation
            </Typography>
          </ListItemText>
        </ListItem>

        <ListItem
          onClick={() => {
            setActiveLink('team')
          }}
          button
          key="team"
          component={Link}
          to={'/team'}
        >
          <ListItemIcon>
            <GroupIcon
              color={activeLink === 'team' ? 'secondary' : 'inherit'}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography color={activeLink === 'team' ? 'secondary' : 'inherit'}>
              My Team
            </Typography>
          </ListItemText>
        </ListItem>

        <ListItem
          onClick={() => {
            setActiveLink('learning')
          }}
          button
          key="learn"
          component={Link}
          to={'/learning'}
        >
          <ListItemIcon>
            <CastForEducationIcon
              color={activeLink === 'learning' ? 'secondary' : 'inherit'}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography
              color={activeLink === 'learning' ? 'secondary' : 'inherit'}
            >
              Learning
            </Typography>
          </ListItemText>
        </ListItem>

        <ListItem
          onClick={() => {
            setActiveLink('quiz')
          }}
          button
          key="quiz"
          component={Link}
          to={'/quiz'}
        >
          <ListItemIcon>
            <ExtensionIcon
              color={activeLink === 'quiz' ? 'secondary' : 'inherit'}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography color={activeLink === 'quiz' ? 'secondary' : 'inherit'}>
              Quiz
            </Typography>
          </ListItemText>
        </ListItem>

        <ListItem
          onClick={() => {
            setActiveLink('files')
          }}
          button
          key="file"
          component={Link}
          to={'/files'}
        >
          <ListItemIcon>
            <DescriptionIcon
              color={activeLink === 'files' ? 'secondary' : 'inherit'}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography
              color={activeLink === 'files' ? 'secondary' : 'inherit'}
            >
              Files and Docs
            </Typography>
          </ListItemText>
        </ListItem>

        <ListItem
          onClick={() => {
            setActiveLink('survey')
          }}
          button
          key="feedback"
          component={Link}
          to={'/survey'}
        >
          <ListItemIcon>
            <ThumbsUpDownIcon
              color={activeLink === 'survey' ? 'secondary' : 'inherit'}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography
              color={activeLink === 'survey' ? 'secondary' : 'inherit'}
            >
              Onboarding Survey
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  )

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          handleMenuClose()
          setActiveLink('profile')
        }}
        component={Link}
        to={'/profile'}
      >
        <AccountBoxIcon
          color={activeLink === 'profile' ? 'secondary' : 'inherit'}
        />
        <Typography
          color={activeLink === 'profile' ? 'secondary' : 'inherit'}
          className={classes.padding}
        >
          My Profile
        </Typography>
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose()
          setActiveLink('files')
        }}
        component={Link}
        to={'/files'}
      >
        <DescriptionIcon
          color={activeLink === 'files' ? 'secondary' : 'inherit'}
        />
        <Typography
          color={activeLink === 'files' ? 'secondary' : 'inherit'}
          className={classes.padding}
        >
          Files and Docs
        </Typography>
      </MenuItem>

      <MenuItem
        onClick={() => {
          handleMenuClose()
          setActiveLink('survey')
        }}
        component={Link}
        to={'/survey'}
      >
        <ThumbsUpDownIcon
          color={activeLink === 'survey' ? 'secondary' : 'inherit'}
        />
        <Typography
          color={activeLink === 'survey' ? 'secondary' : 'inherit'}
          className={classes.padding}
        >
          Onboarding Survey
        </Typography>
      </MenuItem>

      <MenuItem
        onClick={() => {
          handleMenuClose()
          SignInHandler()
        }}
      >
        <ExitToAppIcon />
        <Typography className={classes.padding}>Logout</Typography>
      </MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      onClick={handleMobileMenuClose}
    >
      <MenuItem
        onClick={() => {
          setActiveLink('profile')
        }}
        component={Link}
        to={'/profile'}
      >
        <IconButton color={activeLink === 'profile' ? 'secondary' : 'inherit'}>
          <Avatar
            style={{ width: '1.5rem', height: '1.5rem' }}
            alt="User Image"
            src={userImage}
          />
        </IconButton>
        <Typography color={activeLink === 'profile' ? 'secondary' : 'inherit'}>
          {user.name}
        </Typography>
      </MenuItem>
      <MenuItem
        onClick={() => {
          setActiveLink('chat')
        }}
        component={Link}
        to={'/chat'}
      >
        <IconButton color={activeLink === 'chat' ? 'secondary' : 'inherit'}>
          <Badge badgeContent={5} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <Typography color={activeLink === 'chat' ? 'secondary' : 'inherit'}>
          Messages
        </Typography>
      </MenuItem>
      <MenuItem
        onClick={() => {
          setActiveLink('notifications')
        }}
        component={Link}
        to={'/notifications'}
      >
        <IconButton
          color={activeLink === 'notifications' ? 'secondary' : 'inherit'}
        >
          <Badge badgeContent={3} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Typography
          color={activeLink === 'notifications' ? 'secondary' : 'inherit'}
        >
          Notifications
        </Typography>
      </MenuItem>
      <MenuItem
        onClick={() => {
          SignInHandler()
        }}
      >
        <IconButton>
          <ExitToAppIcon />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <React.Fragment key={anchor}>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>

      <AppBar position="sticky">
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon />
            </IconButton>
            <ButtonBase
              onClick={() => setActiveLink('home')}
              component={Link}
              to={'/'}
            >
              <Avatar
                className={classes.logo}
                alt="Nahdi Logo"
                src={logoImage}
              />
              <Typography className={classes.title} variant="h6" nowrap="true">
                Nahdi In
              </Typography>
            </ButtonBase>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="start"
                color={activeLink === 'home' ? 'secondary' : 'inherit'}
                onClick={() => setActiveLink('home')}
                size="small"
                style={{
                  marginRight: '2rem',
                }}
                component={Link}
                to={'/'}
              >
                <div style={{ flexDirection: 'column' }}>
                  <HomeIcon />
                  <Typography nowrap="true">Home</Typography>
                </div>
              </IconButton>

              <IconButton
                color={activeLink === 'welcome' ? 'secondary' : 'inherit'}
                onClick={() => setActiveLink('welcome')}
                edge="start"
                size="small"
                style={{
                  marginRight: '2rem',
                }}
                component={Link}
                to={'/welcome'}
              >
                <div style={{ flexDirection: 'column' }}>
                  <SlideshowIcon />
                  <Typography nowrap="true">Welcome</Typography>
                </div>
              </IconButton>

              <IconButton
                edge="start"
                color={activeLink === 'team' ? 'secondary' : 'inherit'}
                onClick={() => setActiveLink('team')}
                size="small"
                style={{
                  marginRight: '2rem',
                }}
                component={Link}
                to={'/team'}
              >
                <div style={{ flexDirection: 'column' }}>
                  <GroupIcon />
                  <Typography nowrap="true">My Team</Typography>
                </div>
              </IconButton>

              <IconButton
                edge="start"
                color={activeLink === 'quiz' ? 'secondary' : 'inherit'}
                onClick={() => setActiveLink('quiz')}
                size="small"
                style={{
                  marginRight: '2rem',
                }}
                component={Link}
                to={'/quiz'}
              >
                <div style={{ flexDirection: 'column' }}>
                  <ExtensionIcon />
                  <Typography nowrap="true">Quiz</Typography>
                </div>
              </IconButton>

              <IconButton
                edge="start"
                color={activeLink === 'learning' ? 'secondary' : 'inherit'}
                onClick={() => setActiveLink('learning')}
                size="small"
                style={{
                  marginRight: '1rem',
                }}
                component={Link}
                to={'/learning'}
              >
                <div style={{ flexDirection: 'column' }}>
                  <CastForEducationIcon />
                  <Typography nowrap="true">Learning</Typography>
                </div>
              </IconButton>

              <hr />

              <IconButton color="inherit">
                <Badge badgeContent={5} color="secondary">
                  <TextsmsIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={3} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <ButtonBase
                edge="end"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar
                  style={{ width: '1.7rem', height: '1.7rem' }}
                  alt="User Image"
                  src={userImage}
                />
                <Typography style={{ paddingLeft: '0.5rem' }}>
                  {user.name}
                </Typography>
              </ButtonBase>
            </div>
            <Switch
              checked={!checked}
              onChange={() => {
                toggleDarkMode()
                setChecked(!checked)
              }}
              name="darkmodeswitch"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  )
}
