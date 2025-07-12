import { questions } from './questions.ts'
import { rooms } from './rooms.ts'

//sempre que mexer no schema fazer o generate e migrate
//generate cria o sql
//migrate executa no banco de dados

export const schema = {
  rooms,
  questions
}