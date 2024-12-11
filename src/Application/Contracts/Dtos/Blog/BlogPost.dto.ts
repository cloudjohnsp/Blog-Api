import { Types } from 'mongoose';

interface BlogPost {
  id: Types.ObjectId;
  title: string;
  author: string;
  slug: string;
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

export default BlogPost;
