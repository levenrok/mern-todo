import request from 'supertest'
import { describe, it } from 'mocha'
import { expect } from 'chai'

import app from '../app.js'
import Todo from '../models/todo.model.js'

describe('GET /', () => {
  it('should return a status code of 200 and an empty array if no todos exist', async function () {
    const response = await request(app).get('/todo')

    expect(response.statusCode).to.be.equal(200)
    expect(response.body).to.have.property('success')
    expect(response.body.success).to.be.equal(true)
    expect(response.body).to.have.property('data')
    expect(response.body.data).to.be.a('array')
  })

  it('should return a status code of 200 and an array with the existing todos', async function () {
    const testTodos = [
      { name: 'Code', completed: true },
      { name: 'Sleep', completed: false },
      { name: 'Cook', completed: true }
    ]
    await Todo.create(testTodos)

    const response = await request(app).get('/todo')
    const responseTodos = response.body.data.map(({ name, completed }) => ({ name, completed }))

    expect(response.statusCode).to.be.equal(200)
    expect(response.body).to.have.property('success')
    expect(response.body.success).to.be.equal(true)
    expect(response.body).to.have.property('data')
    expect(response.body.data).to.be.a('array')

    for (const testTodo of testTodos) {
      expect(responseTodos).to.deep.include(testTodo)
    }
  })
})
