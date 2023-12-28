import { IconButton, Stack } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { Footer } from './Footer'

import { useQuestionsStore } from './store/questions'

import { Question } from './Question'

export function Game () {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)

  const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
  const goPrevQuestion = useQuestionsStore(state => state.goPrevQuestion)

  const questionData = questions[currentQuestion]

  return (
    <>
      <Stack direction='row' gap={2} alignItems='center' marginTop={3} marginBottom={3}>
        <IconButton onClick={goPrevQuestion} disabled={currentQuestion === 0}>
          <ArrowBackIos />
        </IconButton>

        { currentQuestion + 1 } / {questions.length}

        <IconButton onClick={goNextQuestion} disabled={currentQuestion >= questions.length - 1}>
          <ArrowForwardIos />
        </IconButton>
      </Stack>

      <Question data={questionData} />

      <Footer />
    </>
  )
}
