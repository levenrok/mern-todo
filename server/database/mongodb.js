import mongoose from 'mongoose'

const mongodbUri = process.env.MONGODB_URI

if (!mongodbUri) {
  throw new Error("Please define the 'MONGODB_URI' inside the <.env/.env.development.local> file")
}

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongodbUri)
    await mongoose.connection.db.command({ ping: 1 })

    console.log('Pinged the deployment. Successfully connected to MongoDB!')
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error)
  }
}

export default connectToMongoDB
