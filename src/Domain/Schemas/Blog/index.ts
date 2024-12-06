import mongoose from 'mongoose';
const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: String,
  slug: String,
  author: String,
  content: String,
  tags: [String],
  createdAt: Date,
  updatedAt: Date,
  comments: [
    {
      user: String,
      content: String,
      votes: Number,
    },
  ],
});

export default BlogSchema;
