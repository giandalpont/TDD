const request = require('supertest')

const app = require('../src/app')

test('Deve reposder a raiz', async () => {
    await request(app).get('/')
        .then( res => {
            expect(res.status).toBe(200)
        })
})

