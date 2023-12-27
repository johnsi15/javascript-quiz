import { create } from 'zustand'
import { type Question } from '../types'

interface State {
  questions: Question[]
  currentQuestion: number
  getQuestions: (limit: number) => Promise<void>
  selectAnswer: (questionId: number, answerIndex: number) => void
}

export const useQuestionsStore = create<State>()((set, get) => ({
  questions: [], // initial state questions
  currentQuestion: 0,
  getQuestions: async (limit) => {
    const res = await fetch(`${location.origin}/data.json`)
    const data = await res.json()

    const questions = data.sort(() => Math.random() - 0.5).slice(0, limit)
    set({ questions }) // question is ⬆ initial state
  },
  selectAnswer: (questionId, answerIndex) => {
    const { questions } = get()

    const newQuestions = structuredClone(questions) // clonar
    const questionIndex = newQuestions.findIndex(q => q.id === questionId)
    const questionData = newQuestions[questionIndex]

    const isCorrectUserAnswer = questionData.correctAnswer === answerIndex

    newQuestions[questionIndex] = {
      ...questionData,
      userSelectedAnswer: answerIndex,
      isCorrectUserAnswer
    }

    set({ questions: newQuestions })
  }
}))
