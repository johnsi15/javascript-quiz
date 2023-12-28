import { useQuestionsStore } from '../store/questions'

export const useQuestionData = () => {
  const question = useQuestionsStore(state => state.questions)

  let correct = 0
  let incorrect = 0
  let unanswered = 0

  question.forEach(question => {
    const { correctAnswer, userSelectedAnswer } = question
    if (userSelectedAnswer == null) unanswered++
    else if (userSelectedAnswer === correctAnswer) correct++
    else incorrect++
  })

  return { correct, incorrect, unanswered }
}
