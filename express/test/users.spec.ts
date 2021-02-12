import request from 'supertest'
import app from '../app'

describe('GET /api/users', () => {
  it('取得成功', () => {
    return request(app).get('/api/users').expect(200)
  })
})

describe('GET /api/users/:user_id', () => {
  it('引数がNumber型じゃない', () => {
    return request(app)
      .get('/api/users/a')
      .expect(400)
      .expect({
        error: {
          status: 400,
          type: 'PARAMETER_INVALID',
          message: 'The parameter is invalid.',
        },
      })
  })

  it('データが存在しない', () => {
    return request(app)
      .get('/api/users/10000')
      .expect(400)
      .expect({
        error: {
          status: 400,
          type: 'NO_DATA_EXISTS',
          message: 'No data exists.',
        },
      })
  })

  it('取得成功', () => {
    return request(app)
      .get('/api/users/1')
      .expect(200)
      .expect({
        data: {
          id: 1,
          name: 'User1',
          age: 11,
        },
      })
  })
})

describe('POST /api/users/', () => {
  it('nameが存在しない', () => {
    return request(app)
      .post('/api/users')
      .send('age=111')
      .expect(400)
      .expect({
        error: {
          status: 400,
          type: 'PARAMETER_INVALID',
          message: 'The parameter is invalid.',
        },
      })
  })

  it('ageが存在しない', () => {
    return request(app)
      .post('/api/users')
      .send('name=test_name')
      .expect(400)
      .expect({
        error: {
          status: 400,
          type: 'PARAMETER_INVALID',
          message: 'The parameter is invalid.',
        },
      })
  })

  // it('更新成功', () => {
  //   return request(app)
  //     .post('/api/users')
  //     .send('name=test_name')
  //     .send('age=111')
  //     .expect(200)
  //     .expect({ data: true })
  // })
})

describe('PUT /api/users/:user_id', () => {
  it('user_id が存在しない', () => {
    return request(app).put('/api/users').expect(404)
  })

  it('user_id が数値ではない', () => {
    return request(app)
      .put('/api/users/a')
      .expect(400)
      .expect({
        error: {
          status: 400,
          type: 'PARAMETER_INVALID',
          message: 'The parameter is invalid.',
        },
      })
  })

  it('Body が存在しない', () => {
    return request(app)
      .put('/api/users/1')
      .expect(400)
      .expect({
        error: {
          status: 400,
          type: 'PARAMETER_INVALID',
          message: 'The parameter is invalid.',
        },
      })
  })

  it('存在しない user_id を指定', () => {
    return request(app)
      .put('/api/users/10000')
      .expect(400)
      .send('name=test_name')
      .expect({
        error: {
          status: 400,
          type: 'NO_DATA_EXISTS',
          message: 'No data exists.',
        },
      })
  })
})

describe('DELETE /api/users/:user_id', () => {
  it('user_id が存在しない', () => {
    return request(app).delete('/api/users').expect(404)
  })

  it('user_id が数値ではない', () => {
    return request(app)
      .delete('/api/users/a')
      .expect(400)
      .expect({
        error: {
          status: 400,
          type: 'PARAMETER_INVALID',
          message: 'The parameter is invalid.',
        },
      })
  })

  it('存在しない user_id を指定', () => {
    return request(app)
      .delete('/api/users/10000')
      .expect(400)
      .expect({
        error: {
          status: 400,
          type: 'NO_DATA_EXISTS',
          message: 'No data exists.',
        },
      })
  })
})
