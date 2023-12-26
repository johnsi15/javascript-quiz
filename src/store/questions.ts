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
    set({
      questions: [{
        id: 1,
        question: '¿Cuál es la salida de este código?',
        code: 'console.log(typeof NaN)',
        answers: [
          'undefined',
          'NaN',
          'string',
          'number'
        ],
        correctAnswer: 3
      }]
    })
  }
}))
