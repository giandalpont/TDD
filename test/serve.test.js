const supertest = require('supertest')

const res = supertest('https://www.google.com.br')

test('Devo responder na port 3001', async () => {
    // Acessar a url 'http://localhost:3001'
    await res.get('/').then( result => expect(result.status).toBe(200) )
    // verificar que a resposta foi 400
});