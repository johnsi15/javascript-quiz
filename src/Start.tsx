import { Button } from '@mui/material'
import { useQuestionsStore } from './store/questions'

const LIMIT_QUESTIONS = 10

export function Start () {
  const getQuestions = useQuestionsStore(state => state.getQuestions)

  const handleClick = () => {
    getQuestions(LIMIT_QUESTIONS)
  }

  return (
    <>
      <Button onClick={handleClick} variant="contained" sx={{ marginTop: 5 }} color='primary'>
      ¡Empezar el juego!
      </Button>
    </>
  )
}
