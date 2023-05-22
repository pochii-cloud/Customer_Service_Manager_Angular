import express, { Request, Response, json } from 'express'
import mongoose from 'mongoose'

const app=express()
app.use(json())

const MONGO_URI='mongodb+srv://johnmwaniki:UFDQHk584rTAfDOw@cluster0.z9pasbz.mongodb.net/'

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB!');
    // Start the server after successful MongoDB connection
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

