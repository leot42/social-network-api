const request = require('supertest');
const express = require('express');
const app = express();

app.use(require('../../routes'));

describe('Test User Endpoint', () => {
    it('should return 200/Okay', async () => {
        const res = await request(app)
            .get('/api/users')
            expect(res.statusCode).toEqual(200) 
    })   
})