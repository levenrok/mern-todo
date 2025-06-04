import request from 'supertest'
import { describe, it } from 'mocha'
import { expect } from 'chai'

import app from '../app.js'

describe('GET /', () => {
  it('should return a status code of 200 and an empty array if no todos exist', function (done) {
    request(app)
      .get('/todo')
      .end(function (err, res) {
        if (err) return done(err)
        expect(res.statusCode).to.be.equal(200)
        expect(res.body).to.have.property('success')
        expect(res.body.success).to.be.equal(true)
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('array')
        done()
      })
  })
})
