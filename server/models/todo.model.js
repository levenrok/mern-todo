import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Todo name is required'],
    min: 2,
    max: 50
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo
