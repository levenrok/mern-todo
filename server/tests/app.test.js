import request from 'supertest'
import { describe, it } from 'mocha'
import { expect } from 'chai'

import app from '../app.js' // Ensure this path is correct and 'app' is exported from it

describe('GET /', () => {
  it('should get a status code of 200', function (done) {
    request(app)
      .get('/')
      .end(function (err, res) {
        if (err) return done(err)
        expect(res.statusCode).to.be.equal(200)
        done()
      })
  })

  it("should contain 'Hello, World' in the text", function (done) {
    request(app)
      .get('/')
      .end(function (err, res) {
        if (err) return done(err)
        expect(res.text).to.contain('Hello, World')
        done()
      })
  })
})
