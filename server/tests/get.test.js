import request from 'supertest'
import { describe, it } from 'mocha'
import { expect } from 'chai'

import app from '../app.js'

describe('GET /', () => {
  it('should return a status code of 200 and an empty array if no todos exist', async function () {
    const response = await request(app).get('/todo')

    expect(response.statusCode).to.be.equal(200)
    expect(response.body).to.have.property('success')
    expect(response.body.success).to.be.equal(true)
    expect(response.body).to.have.property('data')
    expect(response.body.data).to.be.a('array')
  })
})
