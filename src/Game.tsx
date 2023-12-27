import { Card, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { useQuestionsStore } from './store/questions'
import { type Question as QuestionType } from './types'

const Question = ({ data }: { data: QuestionType }) => {
  const selectAnswer = useQuestionsStore(state => state.selectAnswer)

  const handleAnswerClick = (answerIndex: number) => () => {
    selectAnswer(data.id, answerIndex)
  }

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
            <ListItemButton onClick={handleAnswerClick(index)}>
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

  const questionData = questions[currentQuestion]

  return (
    <>
      <Question data={questionData} />
    </>
  )
}
