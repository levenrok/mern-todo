import request from 'supertest'

import app from '../app.js'

// eslint-disable-next-line no-undef
describe('GET /', () => {
// eslint-disable-next-line no-undef
  it('should get a status code of 200', async () => {
    // eslint-disable-next-line no-undef
    const response = await request(app).get('/')

    // eslint-disable-next-line no-undef
    expect(response.statusCode).toBe(200)
  })

  // eslint-disable-next-line no-undef
  it("should contain 'Hello, World' in the text", async () => {
    // eslint-disable-next-line no-undef
    const response = await request(app).get('/')

    // eslint-disable-next-line no-undef
    expect(response.text).toContain('Hello, World')
  })
})
