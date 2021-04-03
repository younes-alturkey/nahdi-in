import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import QuizResult from '../assets/images/result.gif'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
import LoopIcon from '@material-ui/icons/Loop'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import LinearProgress from '@material-ui/core/LinearProgress'
import abdulelah from '../assets/images/abdulelah.png'
import younes from '../assets/images/younes.png'
import barrak from '../assets/images/barrak.png'
import first from '../assets/images/first.png'
import second from '../assets/images/second.png'
import third from '../assets/images/third.png'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  submit: {
    marginBottom: theme.spacing(1),
  },
  question: {
    fontSize: 30,
  },
  result: {
    width: 230,
    height: 230,
  },
  divider: {
    borderBottom: 'solid',
    borderWidth: '1px',
    color: '#4096A6',
    padding: '0.5rem',
    margin: 'auto',
    width: '1.5rem',
  },
  padding: {
    padding: theme.spacing(1),
  },
  progress: {
    width: '100%',
  },
  demo: {
    width: '100%',
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  trophy: {
    width: 28,
    height: 28,
    paddingBottom: 10,
  },
  profileIcon: {
    width: 42,
    height: 42,
    color: '#4096A6',
  },
}))

const shuffle = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

let questions = shuffle([
  {
    questionText: 'Who is Nahdi named after?',
    answerOptions: [
      { answerText: 'Lamar Bakhsh', isCorrect: false },
      { answerText: 'Yasser Joharji', isCorrect: false },
      { answerText: 'Abdullah Al Nahdi', isCorrect: true },
      { answerText: 'Younes Alturkey', isCorrect: false },
    ],
  },
  {
    questionText: 'When was Nahdi founded?',
    answerOptions: [
      { answerText: '1995', isCorrect: false },
      { answerText: '1986', isCorrect: true },
      { answerText: '2002', isCorrect: false },
      { answerText: '1987', isCorrect: false },
    ],
  },
  {
    questionText: 'When was Nahdi IPO?',
    answerOptions: [
      { answerText: '2014', isCorrect: false },
      { answerText: '2016', isCorrect: false },
      { answerText: '2019', isCorrect: false },
      { answerText: 'No IPO', isCorrect: true },
    ],
  },
  {
    questionText: 'How many NMC pharmacies are there?',
    answerOptions: [
      { answerText: '1,100', isCorrect: true },
      { answerText: '1,200', isCorrect: false },
      { answerText: '450', isCorrect: false },
      { answerText: '2,100', isCorrect: false },
    ],
  },
  {
    questionText: 'Where is Nahdi Headquartered?',
    answerOptions: [
      { answerText: 'Makkah', isCorrect: false },
      { answerText: 'Dammam', isCorrect: false },
      { answerText: 'Riyadh', isCorrect: false },
      { answerText: 'Jeddah', isCorrect: true },
    ],
  },
  {
    questionText: 'How many cities does Nahdi serve?',
    answerOptions: [
      { answerText: '120', isCorrect: false },
      { answerText: '60', isCorrect: false },
      { answerText: '90', isCorrect: false },
      { answerText: '125', isCorrect: true },
    ],
  },
  {
    questionText: 'Nahdi is worth how much?',
    answerOptions: [
      { answerText: '100 million riyals', isCorrect: false },
      { answerText: '8 billion riyals', isCorrect: false },
      { answerText: '15 billion riyals', isCorrect: false },
      { answerText: '10 billion riyals', isCorrect: true },
    ],
  },
  {
    questionText: 'What is not a Nahdi value?',
    answerOptions: [
      { answerText: 'Excellence', isCorrect: false },
      { answerText: 'Integrity', isCorrect: false },
      { answerText: 'Care', isCorrect: false },
      { answerText: 'Safety', isCorrect: true },
    ],
  },
  {
    questionText: 'Who is the CEO of Nahdi?',
    answerOptions: [
      { answerText: 'Yasser Joharji', isCorrect: true },
      { answerText: 'Abdullah Al Nahdi', isCorrect: false },
      { answerText: 'Junaid Bajwa', isCorrect: false },
      { answerText: 'Raed Mongel', isCorrect: false },
    ],
  },
  {
    questionText: 'What does the blue color in Nahdi logo represent?',
    answerOptions: [
      { answerText: 'Mom & Baby', isCorrect: true },
      { answerText: 'Promotion', isCorrect: false },
      { answerText: 'Everyday Essentials', isCorrect: false },
      { answerText: 'Beauty', isCorrect: false },
    ],
  },
])

export default function Quiz() {
  const classes = useStyles()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [currentProgress, setCurrentProgress] = useState(0)
  const [showScore, setShowScore] = useState('quiz')
  const [score, setScore] = useState(0)

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < 5 % questions.length) {
      setCurrentQuestion(nextQuestion)
      setCurrentProgress(currentProgress + 20)
    } else {
      setShowScore('result')
      setCurrentProgress(0)
    }
  }

  return (
    <div style={{ width: '100%' }}>
      {showScore === 'result' ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Swift Quiz Result
          </Typography>
          <div className={classes.divider} />
          <br />
          <Avatar
            alt="Result Gif"
            src={QuizResult}
            className={classes.result}
          />
          <TextField
            className={classes.question}
            fullWidth
            label={'Way to go, Barrak!'}
            value={
              'You scored ' + score + ' out of ' + (5 % questions.length) + '.'
            }
            variant="filled"
            color="secondary"
          />
          <br />
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={() => setShowScore('leaderboard')}
          >
            <EmojiEventsIcon />
            <Typography className={classes.padding}>Leaderboard</Typography>
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={() => {
              setCurrentQuestion(0)
              setShowScore(false)
              setScore(0)
              questions = shuffle(questions)
            }}
          >
            <LoopIcon />
            <Typography className={classes.padding}>Take Another</Typography>
          </Button>
        </div>
      ) : showScore === 'leaderboard' ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Swift Quiz Leaderboard
          </Typography>
          <div className={classes.divider} />
          <div className={classes.demo}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <IconButton component={Link} to={'/profile'}>
                    <Avatar src={abdulelah} />
                  </IconButton>
                </ListItemAvatar>
                <ListItemText secondary="458 kudos">
                  <Typography>Abdulelah Alzahrani</Typography>
                </ListItemText>
                <ListItemSecondaryAction>
                  <IconButton edge="end">
                    <Avatar
                      variant="square"
                      src={first}
                      className={classes.trophy}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <IconButton component={Link} to={'/profile'}>
                    <Avatar src={younes} />
                  </IconButton>
                </ListItemAvatar>
                <ListItemText secondary="455 kudos">
                  <Typography>Younes Alturkey</Typography>
                </ListItemText>
                <ListItemSecondaryAction>
                  <IconButton edge="end">
                    <Avatar
                      variant="square"
                      src={second}
                      className={classes.trophy}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <IconButton component={Link} to={'/profile'}>
                    <Avatar src={barrak} />
                  </IconButton>
                </ListItemAvatar>
                <ListItemText secondary="368 kudos">
                  <Typography>You</Typography>
                </ListItemText>
                <ListItemSecondaryAction>
                  <IconButton edge="end">
                    <Avatar
                      variant="square"
                      src={third}
                      className={classes.trophy}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <IconButton component={Link} to={'/profile'}>
                    <AccountCircleIcon className={classes.profileIcon} />
                  </IconButton>
                </ListItemAvatar>
                <ListItemText secondary="346 kudos">
                  <Typography>Marah Sindi</Typography>
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <IconButton component={Link} to={'/profile'}>
                    <AccountCircleIcon className={classes.profileIcon} />
                  </IconButton>
                </ListItemAvatar>
                <ListItemText secondary="323 kudos">
                  <Typography>Rahaf Muhalhal</Typography>
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <IconButton component={Link} to={'/profile'}>
                    <AccountCircleIcon className={classes.profileIcon} />
                  </IconButton>
                </ListItemAvatar>
                <ListItemText secondary="287 kudos">
                  <Typography>Refal Hadrawi</Typography>
                </ListItemText>
              </ListItem>
            </List>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={() => {
                setShowScore('quiz')
                setCurrentQuestion(0)
                setShowScore(false)
                setScore(0)
                questions = shuffle(questions)
              }}
            >
              <LoopIcon />
              <Typography className={classes.padding}>Take Another</Typography>
            </Button>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Swift Quiz
          </Typography>
          <div className={classes.divider} />
          <br />
          <TextField
            className={classes.question}
            fullWidth
            label={
              'Question ' + (currentQuestion + 1) + ' / ' + questions.length
            }
            value={questions[currentQuestion].questionText}
            variant="filled"
            color="secondary"
          />
          <div className={classes.progress}>
            <LinearProgress
              variant="determinate"
              color="secondary"
              value={currentProgress}
            />
          </div>
          <br />
          <>
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <Button
                  key={index}
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  size="large"
                  className={classes.submit}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  <Typography className={classes.padding}>
                    {answerOption.answerText}
                  </Typography>
                </Button>
              )
            )}
          </>
        </div>
      )}
    </div>
  )
}
