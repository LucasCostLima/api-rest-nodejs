import { expect, it, beforeAll, afterAll, describe} from 'vitest'
import request from 'supertest'
import {app} from '../app'


describe ('Transactions routes', () => {
    beforeAll(async() =>{
        await app.ready()
    })
    
    
    afterAll (async() =>{
        await app.close()
    })
    
    
    it('user can create a new transaction', async () =>{
        await request (app.server)
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
})
