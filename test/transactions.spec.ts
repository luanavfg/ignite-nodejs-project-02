import { expect, beforeAll, afterAll, describe, it } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('TTransactions routes', () => {
  beforeAll(async () => {
    await app.ready() // -> Quero que a aplicação esteja pronta, que todos os plugins tenham rodado
  })
  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a new transaction', async () => {
    const response = await request(app.server).post('/transactions').send({
      title: 'New transaction',
      amount: 5000,
      type: 'credit',
    })

    expect(response.statusCode).toEqual(201)
  })
})
