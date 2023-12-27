import { Card, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import confetti from 'canvas-confetti'

import { useQuestionsStore } from './store/questions'
import { type Question as QuestionType } from './types'

const getBackgroundColor = (data: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = data

  if (userSelectedAnswer == null) return 'transparent'

  if (index !== correctAnswer && index !== userSelectedAnswer) return 'transparent'

  if (index === correctAnswer) return 'green'
  if (index === userSelectedAnswer) return 'red'
}

const Question = ({ data }: { data: QuestionType }) => {
  const selectAnswer = useQuestionsStore(state => state.selectAnswer)

  const handleAnswerClick = (answerIndex: number) => () => {
    selectAnswer(data.id, answerIndex)
  }

  if (data.isCorrectUserAnswer ?? false) confetti()

  return (
    <Card variant='outlined' sx={{ bgcolor: '#222', p: 2, textAlign: 'left', marginTop: 5 }}>
      <Typography variant='h5'>
        {data.question}
      </Typography>

      <SyntaxHighlighter language='javascript' style={atomOneDark}>
        {data.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: '#333' }} disablePadding>
        {data.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              disabled={data.userSelectedAnswer != null}
              onClick={handleAnswerClick(index)}
              sx={{ bgcolor: getBackgroundColor(data, index) }}
            >
              <ListItemText primary={answer} sx={{ textAlign: 'center' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

export function Game () {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)

  const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
  const goPrevQuestion = useQuestionsStore(state => state.goPrevQuestion)

  const questionData = questions[currentQuestion]

  return (
    <>
      <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
        <IconButton onClick={goPrevQuestion} disabled={currentQuestion === 0}>
          <ArrowBackIos />
        </IconButton>

        { currentQuestion + 1 } / {questions.length}

        <IconButton onClick={goNextQuestion} disabled={currentQuestion >= questions.length - 1}>
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Question data={questionData} />
    </>
  )
}
