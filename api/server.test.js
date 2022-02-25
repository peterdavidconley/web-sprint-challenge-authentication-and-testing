const User = require('./auth/users-model');
const db = require('../data/dbConfig');
const request = require('supertest');
const server = require('./server');

beforeEach(async () => {
  await db('users').truncate();
});

test('sanity', () => {
  expect(true).toBe(true)
})

describe('/register Endpoint Tests', () => {

  test('User can not register without a username', () => {

    await request(server).post('/api/auth/register').send({ password: '1234' })
      const noUser = await db('users').where('username', ' ').first()
      expect(noUser).not.toBe()

  })

  test('User can successfully register with proper password and username', () => {

    await request(server).post('/api/auth/register').send({ username: 'bob', password: '1234' })
      const bob = await db('users').where('username', 'bob').first()
      expect(bob).toMatchObject({ username: 'bob' })

  })


})

describe('/login Endpoint Tests', () => {

  test('Unregistered user can not login', () => {
    expect(true).toBe(false)
  })

  test('Registered user can login', () => {
    expect(true).toBe(false)
  })


})