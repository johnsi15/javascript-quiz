import { useQuestionData } from './hooks/useQuestionsData'

export function Footer () {
  const { correct, incorrect, unanswered } = useQuestionData()

  return (
    <footer style={{ marginTop: 20 }}>
      <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ⁉ ${unanswered} sin responder`}</strong>
    </footer>
  )
}
