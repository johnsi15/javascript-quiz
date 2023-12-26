import { create } from 'zustand'
import { type Questions } from '../types'

interface State {
  questions: Questions[]
  currentQuestion: number
  getQuestions: (limit: number) => Promise<void>
}

export const useQuestionsStore = create<State>()((set) => ({
  questions: [],
  currentQuestion: 0,
  getQuestions: async (limit) => {
    console.log('hello world')
  }
}))
