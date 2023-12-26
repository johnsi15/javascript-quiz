import { Button } from '@mui/material'
import { useQuestionsStore } from './store/questions'

export function Start () {
  const getQuestions = useQuestionsStore(state => state.getQuestions)

  const handleClick = () => {
    getQuestions(5)
  }

  return (
    <div>
      <Button onClick={handleClick} variant="contained">
      ¡Empezar el juego!
      </Button>
    </div>
  )
}
