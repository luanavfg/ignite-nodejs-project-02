import fastify from 'fastify'
import { knex } from './database'
// import crypto from 'node:crypto'

const app = fastify()

app.get('/hello', async () => {
  // Inserção
  // const transaction = await knex('transactions')
  //   .insert({
  //     id: crypto.randomUUID(),
  //     title: 'Transação de teste',
  //     amount: 1000,
  //   })
  //   .returning('*')

  // Busca

  const transactions = await knex('transactions')
    .where('amount', 1000)
    .select('*')

  return transactions
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP Server Running')
})
