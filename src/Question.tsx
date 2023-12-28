import { Card, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
// import SyntaxHighlighter from 'react-syntax-highlighter'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import confetti from 'canvas-confetti'

import { useQuestionsStore } from './store/questions'
import { type Question as QuestionType } from './types'

SyntaxHighlighter.registerLanguage('javascript', js)

const getBackgroundColor = (data: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = data

  if (userSelectedAnswer == null) return 'transparent'

  if (index !== correctAnswer && index !== userSelectedAnswer) return 'transparent'

  if (index === correctAnswer) return '#06D6A0'
  if (index === userSelectedAnswer) return '#EF476F'
}

export function Question ({ data }: { data: QuestionType }) {
  const selectAnswer = useQuestionsStore(state => state.selectAnswer)

  const handleAnswerClick = (answerIndex: number) => () => {
    selectAnswer(data.id, answerIndex)

    if (data.correctAnswer === answerIndex) confetti()
  }

  return (
    <Card variant='outlined' sx={{ bgcolor: '#151515', p: 2, textAlign: 'left' }}>
      <Typography variant='h5'>
        {data.question}
      </Typography>

      <SyntaxHighlighter language='javascript' style={atomOneDark}>
        {data.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: '#1a212f' }} disablePadding>
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
