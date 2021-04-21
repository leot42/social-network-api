const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');

// import models
const db = require('../../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialNetworkDb', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

const app = express();

app.use(require('../../routes'));

describe('Test User Endpoint', () => {
    it('should return 200/Okay', async () => {
        const res = await request(app)
            .get('/api/users')
            expect(res.statusCode).toEqual(200) 
    })   
})