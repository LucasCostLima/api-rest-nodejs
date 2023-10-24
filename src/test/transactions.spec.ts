import { expect, it, beforeAll, afterAll, describe, beforeEach} from 'vitest'
import request from 'supertest'
import {app} from '../app'
import { execSync } from 'child_process'


describe ('Transactions routes', () => {
    beforeAll(async() =>{
        await app.ready()
    })
    
    
    afterAll (async() =>{
        await app.close()
    })

    beforeEach(() =>{
        execSync('npm run knex migrate:rollback --all')
        execSync('npm run knex migrate:latest')
    })
    
    
    it('user can create a new transaction', async () =>{
      const response=await request (app.server)
        .post('/transactions')
        .send({
            title: 'New transaction',
            amount: 5000,
            type: 'credit',
        })
        .expect(201)
    })

    it('should be able to list all transactions', async () =>{
        const createTransactionResponse = await request (app.server)
        .post('/transactions')
        .send({
            title: 'New transaction',
            amount: 5000,
            type: 'credit',
        })
        const cookies = createTransactionResponse.get('Set-cookie')

        const listTransactionsresponse = await request(app.server)
        .get('/transactions')
        .set('Cookie', cookies)
        .expect(200)

        expect (listTransactionsresponse.body).toEqual([
            expect.objectContaining({
                title: 'New transaction',
                amount: 5000,
        
            }),
        ])

        
    })

    


  it('should be able to get the summary', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'Credit transaction',
        amount: 5000,
        type: 'credit',
      })

    const cookies = createTransactionResponse.get('Set-Cookie')

    await request(app.server)
    .post('/transactions')
    .set('Cookie', cookies)
    .send({
      title: 'Debit transaction',
      amount: 2000,
      type: 'debit',
  })

    const summaryResponse = await request(app.server)
      .get('/transactions/summary')
      .set('Cookie', cookies)
      .expect(200)


    expect(summaryResponse.body).toEqual({
        amount: 3000,
      })
  })
})
