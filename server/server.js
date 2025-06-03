import app from './app.js'
import connectToMongoDB from './database/mongodb.js'

const port = process.env.PORT

app.listen(port, async () => {
  console.log(`Server started on http://localhost:${port}`)

  await connectToMongoDB()
})
