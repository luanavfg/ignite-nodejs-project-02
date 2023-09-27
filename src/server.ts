import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'
// import crypto from 'node:crypto'

const app = fastify()

app.register(transactionsRoutes)
// app.get('/hello', async () => {
//   Inserção
//   const transaction = await knex('transactions')
//     .insert({
//       id: crypto.randomUUID(),
//       title: 'Transação de teste',
//       amount: 1000,
//     })
//     .returning('*')
//   return transaction
// })

app.listen({ port: env.PORT }).then(() => {
  console.log('HTTP Server Running')
})
