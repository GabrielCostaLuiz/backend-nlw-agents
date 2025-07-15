import fastifyCors from '@fastify/cors'
import { fastifyMultipart } from '@fastify/multipart'
import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
// import { _sql } from './config/connection.ts'
import { env } from './config/env.ts'
import { createQuestionRoute } from './http/routes/room/create-question.ts'
import { createRoomRoute } from './http/routes/room/create-room.ts'
import { getRoomQuestionsRoute } from './http/routes/room/get-room-questions.ts'
import { getRoomsRoute } from './http/routes/room/get-rooms.ts'
import { uploadAudioRoute } from './http/routes/room/upload-audio.ts'

//Cria o servidor e integra tipagem com Zod
const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
})

app.register(fastifyMultipart)

//Faz o Fastify validar/respeitar o schema de resposta com Zod
app.setSerializerCompiler(serializerCompiler)
//Faz o Fastify validar body/query/params com Zod
app.setValidatorCompiler(validatorCompiler)

//Rota para saber se o servidor está rodando
app.get('/health', () => {
  return 'OK'
})

app.register(getRoomsRoute)
app.register(createRoomRoute)
app.register(getRoomQuestionsRoute)
app.register(createQuestionRoute)
app.register(uploadAudioRoute)

app.listen({
  port: env.PORT,
})
