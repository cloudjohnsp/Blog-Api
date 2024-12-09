import { Document, Types } from 'mongoose';

interface IBlog extends Document {
  _id: Types.ObjectId;
  title: string;
  slug: string;
  author: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  upVotes: number;
  downVotes: number;
  comments: [
    {
      user: string;
      content: string;
      votes: number;
    }
  ];
}

export default IBlog;
