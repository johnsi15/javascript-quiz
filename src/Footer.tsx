import { Button, Stack } from '@mui/material'
import { useQuestionData } from './hooks/useQuestionsData'
import { useQuestionsStore } from './store/questions'

export function Footer () {
  const { correct, incorrect, unanswered } = useQuestionData()
  const reset = useQuestionsStore(state => state.reset)

  const handleClick = () => {
    reset()
  }

  return (
    <footer style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>

      <Stack direction="row" spacing={2}>
        {`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ⁉ ${unanswered} sin responder`}
      </Stack>

      <Button onClick={handleClick}>
        Resetear juego
      </Button>
    </footer>
  )
}
