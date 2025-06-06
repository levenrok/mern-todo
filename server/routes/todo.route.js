import { Router } from 'express'

import Todo from '../models/todo.model.js'

const todoRouter = Router()

todoRouter.get('/', async (req, res) => {
  try {
    const todos = await Todo.find()

    res.status(200).json({
      success: true,
      data: todos
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 500,
        message: 'Internal Server Error'
      }
    })
  }
})

export default todoRouter
