import { Router } from 'express'

import Todo from '../models/todo.model.js'

const todoRouter = Router()

todoRouter.get('/', async (req, res) => {
  const todos = await Todo.find()

  res.status(200).json({
    success: true,
    data: todos
  })
})

export default todoRouter
