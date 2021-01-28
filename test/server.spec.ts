import request from 'supertest'
import app from '../app'

describe('GET /api/tests', () => {
  it('return 200 and correct message', () => {
    return request(app)
      .get('/api/tests')
      .expect(200)
      .expect({ data: 'get_tests実行' })
  })
})
