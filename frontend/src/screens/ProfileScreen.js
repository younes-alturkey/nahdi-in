import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf'
import userImage from '../assets/images/barrak.png'
import specialist from '../assets/images/specialist.png'
import Badge from '@material-ui/core/Badge'
import logo from '../assets/images/logo.png'
import ChangeImage from '../assets/images/change-img.png'
import BehavioralReportPDF from '../assets/pdf/BarrakAljean-BehavioralReport.pdf'
import PersonalDevelopmentPDF from '../assets/pdf/BarrakAljean-PersonalDevelopment.pdf'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import MenuItem from '@material-ui/core/MenuItem'
import BorderColorIcon from '@material-ui/icons/BorderColor'
import EditIcon from '@material-ui/icons/Edit'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'

const statuses = [
  {
    value: 'completed',
    label: 'Completed',
  },
  {
    value: 'in-progress',
    label: 'In Progress',
  },
  {
    value: 'on-hold',
    label: 'On Hold',
  },
  {
    value: 'dropped',
    label: 'Dropped',
  },
]

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 25,
    height: 25,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar)

const useStyles = makeStyles((theme) => ({
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
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  divider: {
    borderBottom: 'solid',
    borderWidth: '1px',
    color: '#4096A6',
    padding: '0.5rem',
    margin: 'auto',
    width: '1.5rem',
  },
  login: {
    padding: theme.spacing(1),
  },
  attributes: {
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    fontSize: '0.7rem',
    color: '#4096A6',
  },
  dwnButton: {
    color: '#4096A6',
  },
}))

export default function ProfileScreen() {
  const classes = useStyles()
  const [status, setStatus] = React.useState('completed')

  const handleChange = (event) => {
    setStatus(event.target.value)
  }

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper elevation={20} className={classes.paper}>
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          badgeContent={<SmallAvatar alt="Change Image" src={ChangeImage} />}
        >
          <Avatar className={classes.avatar} src={userImage} alt="User" />
        </Badge>
        {/* <Avatar src={userImage} alt="User" className={classes.avatar} /> */}
        <Typography component="h2" variant="h6">
          Account Details
        </Typography>
        <div className={classes.divider} />
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Name"
                color="secondary"
                value="Barrak Aljean"
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Email"
                color="secondary"
                value="aljeaan.ba@nahdi.sa"
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Department"
                color="secondary"
                value="Commercial"
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Title"
                color="secondary"
                value="Merchandise Planning Intern"
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Department Manager"
                color="secondary"
                value="Ahmed Shafik"
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="HR Manager"
                color="secondary"
                value="Lamar Bakhsh"
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Internship Duration"
                color="secondary"
                value="6 months"
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="End Date"
                color="secondary"
                value="31 Apr 2021"
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                fullWidth
                label="New Password"
                type="password"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                fullWidth
                label="Repeat Password"
                type="password"
                color="secondary"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={() => console.log('editted account details')}
          >
            <EditIcon />
            <Typography className={classes.login}>
              Edit Account Details
            </Typography>
          </Button>
        </form>
      </Paper>
      <Paper elevation={20} className={classes.paper}>
        <Typography component="h2" variant="h6">
          PI Assessment:{' '}
          <strong style={{ color: '#4096A6' }}>Specialist</strong>
        </Typography>
        <div className={classes.divider} />
        <br />
        <Grid container>
          <Grid
            item
            xs={12}
            sm={4}
            style={{ justifyContent: 'center', display: 'flex' }}
          >
            <Avatar
              src={specialist}
              alt="Specialist"
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
              item
              xs={12}
              sm={12}
            >
              <Typography className={classes.attributes} component="h6">
                Precise
              </Typography>
              <Typography className={classes.attributes} component="h6">
                Accepting of company policies
              </Typography>
              <Typography className={classes.attributes} component="h6">
                Highly responsive
              </Typography>
              <Typography className={classes.attributes} component="h6">
                Matter-of-fact
              </Typography>
            </Grid>
            <Typography component="h5" align="justify">
              Barrak is cautious, introspective, and highly loyal to authority.
              He values details and needs to fully understand a topic before
              making decisions. Supportive and collaborative, and doesn't obsess
              over having things their way—but he might obsess over getting
              things right.
            </Typography>
            <br />
            <ButtonBase
              style={{
                marginRight: '2rem',
                color: '#4096A6',
              }}
            >
              <PictureAsPdfIcon fontSize="large" />
              <a
                href={BehavioralReportPDF}
                style={{
                  flexDirection: 'column',
                  textDecoration: 'none',
                  color: '#4096A6',
                  paddingLeft: 5,
                }}
                target="_blank"
                rel="noreferrer"
              >
                <Typography nowrap="true" className={classes.dwnButton}>
                  Behavioral Report
                </Typography>
              </a>
            </ButtonBase>
            <ButtonBase
              style={{
                marginRight: '2rem',
                color: '#4096A6',
              }}
            >
              <PictureAsPdfIcon fontSize="large" />
              <a
                href={PersonalDevelopmentPDF}
                style={{
                  flexDirection: 'column',
                  textDecoration: 'none',
                  color: '#4096A6',
                  paddingLeft: 5,
                }}
                target="_blank"
                rel="noreferrer"
              >
                <Typography nowrap="true" className={classes.dwnButton}>
                  Personal Development Chart
                </Typography>
              </a>
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={20} className={classes.paper}>
        <Typography component="h2" variant="h6">
          Projects
        </Typography>
        <div className={classes.divider} />
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={logo} />
                </ListItemAvatar>
                <ListItemText
                  style={{ color: '#4096A6' }}
                  primary="Nahdi App Competitor Analysis Report - 100%"
                  secondary="Jan 24, 2021"
                />
                <IconButton style={{ color: '#4096A6' }}>
                  <BorderColorIcon />
                </IconButton>
                <IconButton style={{ color: '#DC143C' }}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={logo} />
                </ListItemAvatar>
                <ListItemText
                  style={{ color: '#4096A6' }}
                  primary="HTML Presentation Demo with Reveal.js - 100%"
                  secondary="Feb 7, 2021"
                />

                <IconButton style={{ color: '#4096A6' }}>
                  <BorderColorIcon />
                </IconButton>
                <IconButton style={{ color: '#DC143C' }}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={logo} />
                </ListItemAvatar>
                <ListItemText
                  style={{ color: '#4096A6' }}
                  primary="PoC Mobile App built with React Native - 100%"
                  secondary="Mar 29, 2021"
                />

                <IconButton style={{ color: '#4096A6' }}>
                  <BorderColorIcon />
                </IconButton>
                <IconButton style={{ color: '#DC143C' }}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={logo} />
                </ListItemAvatar>
                <ListItemText
                  style={{ color: '#4096A6' }}
                  primary="Adobe Indesign Script Modification - 40%"
                  secondary="In Progress"
                />

                <IconButton style={{ color: '#4096A6' }}>
                  <BorderColorIcon />
                </IconButton>
                <IconButton style={{ color: '#DC143C' }}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={logo} />
                </ListItemAvatar>
                <ListItemText
                  style={{ color: '#4096A6' }}
                  primary="On-Boarding Platform for Interns - 30%"
                  secondary="In Progress"
                />

                <IconButton style={{ color: '#4096A6' }}>
                  <BorderColorIcon />
                </IconButton>
                <IconButton style={{ color: '#DC143C' }}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={logo} />
                </ListItemAvatar>
                <ListItemText
                  style={{ color: '#4096A6' }}
                  primary="Adobe Indesign New Script - 0%"
                  secondary="On Hold"
                />

                <IconButton style={{ color: '#4096A6' }}>
                  <BorderColorIcon />
                </IconButton>
                <IconButton style={{ color: '#DC143C' }}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Project Title"
              variant="outlined"
              color="secondary"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Project Progress"
              variant="outlined"
              color="secondary"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <TextField
                fullWidth
                select
                label="Project Status"
                value={status}
                onChange={handleChange}
                variant="outlined"
              >
                {statuses.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Project Description"
              variant="outlined"
              color="secondary"
              multiline
              fullWidth
              rows={3}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={() => console.log('editted account details')}
            >
              <AddIcon />
              <Typography className={classes.login}>Add New Project</Typography>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}
