import request from 'supertest'
import app from '../app'

describe('GET /api/tests', () => {
  it('Get Test', () => {
    return request(app).get('/api/tests').expect(200).expect({
      data: 'get_tests実行',
    })
  })
})

describe('GET /api/users/1', () => {
  const response = {
    id: 1,
    name: 'User1',
    age: 11,
  }

  it('Get User By Id', () => {
    return request(app)
      .get('/api/users/1')
      .expect(200)
      .expect({ data: response })
  })
})
