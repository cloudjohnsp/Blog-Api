import mongoose from 'mongoose';
import IBlog from '../../../Application/Interfaces/Blog';
const { Schema } = mongoose;

const BlogSchema = new Schema<IBlog>({
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
