import { Types } from 'mongoose';

interface CreateBlogPostResponseDto {
  id: Types.ObjectId;
  title: string;
  slug: string;
  content: string;
  tags: string[];
}

export default CreateBlogPostResponseDto;
