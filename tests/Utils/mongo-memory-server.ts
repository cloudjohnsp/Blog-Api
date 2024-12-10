import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import Blog from '../../src/Domain/Models/Blog';

let mongo: MongoMemoryServer;

export const createPost = async (): Promise<void> => {
  const blogPost = new Blog({
    title: 'Testing Mongoose with Jest',
    content: 'This is a test blog post.',
    tags: ['test', 'mock'],
  });

  await blogPost.save();
};

export const connect = async (): Promise<void> => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();

  await mongoose.connect(uri);
};

export const closeDatabase = async (): Promise<void> => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongo.stop();
};

export const clearDatabase = async (): Promise<void> => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
};
