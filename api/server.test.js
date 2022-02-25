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
    expect(true).toBe(false)
  })

  test('User can successfully register with proper password and username', () => {
    expect(true).toBe(false)
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