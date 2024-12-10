import mongoose from 'mongoose';
import IBlog from '../../../Application/Interfaces/Blog';
const { Schema } = mongoose;

const BlogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  slug: String,
  author: String,
  content: { type: String, required: true },
  tags: [String],
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
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
