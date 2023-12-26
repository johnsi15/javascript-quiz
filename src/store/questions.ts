import { create } from 'zustand'
import { type Questions } from '../types'

interface State {
  questions: Questions[]
  currentQuestion: number
  getQuestions: (limit: number) => Promise<void>
}

export const useQuestionsStore = create<State>()((set) => ({
  questions: [], // initial state questions
  currentQuestion: 0,
  getQuestions: async (limit) => {
    const res = await fetch(`${location.origin}/data.json`)
    const data = await res.json()

    const questions = data.sort(() => Math.random() - 0.5).slice(0, limit)
    set({ questions }) // question is ⬆ initial state
  }
}))
