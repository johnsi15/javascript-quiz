import { Card, Typography } from '@mui/material'
import { useQuestionsStore } from './store/questions'
import { type Question as QuestionType } from './types'

const Question = ({ data }: { data: QuestionType }) => {
  return (
    <Card variant='outlined'>
      <Typography variant='h5'>
        {data.question}
      </Typography>
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
