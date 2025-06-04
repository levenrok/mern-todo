import { before, after, beforeEach } from 'mocha'
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

import Todo from '../models/todo.model.js'

let mongoServer
let mongoServerUri

before(async function () {
  try {
    mongoServer = await MongoMemoryServer.create()
    mongoServerUri = mongoServer.getUri()
    await mongoose.connect(mongoServerUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Test MongoDB connection established.')
  } catch (error) {
    console.error('Error establishing test MongoDB connection:', error)
    throw error
  }
})

after(async function () {
  try {
    await mongoose.disconnect()
    if (mongoServer) {
      await mongoServer.stop()
    }
    console.log('Test MongoDB connection closed.')
  } catch (error) {
    console.error('Error closing test MongoDB connection:', error)
    throw error
  }
})

beforeEach(async function () {
  try {
    await Todo.deleteMany({})
    console.log('Todo collection cleared.')
  } catch (error) {
    console.error('Error clearing Todo collection:', error)
    throw error
  }
})
