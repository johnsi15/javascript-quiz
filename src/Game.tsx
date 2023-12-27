import { Card, Typography } from '@mui/material'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { useQuestionsStore } from './store/questions'
import { type Question as QuestionType } from './types'

const Question = ({ data }: { data: QuestionType }) => {
  return (
    <Card variant='outlined' sx={{ bgcolor: '#222', p: 2, textAlign: 'left' }}>
      <Typography variant='h5'>
        {data.question}
      </Typography>

      <SyntaxHighlighter language='javascript' style={atomOneDark}>
        {data.code}
      </SyntaxHighlighter>
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
