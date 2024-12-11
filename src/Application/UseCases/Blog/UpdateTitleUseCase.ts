import { NotFoundError } from 'restify-errors';
import Blog from '../../../Domain/Models/Blog';
import UpdateBlogPostTitleRequest from '../../Contracts/Dtos/Blog/UpdateBlogPostTitleRequest.dto';
import BlogPostResponse from '../../Contracts/Dtos/Blog/BlogPostResponse.dto';

class UpdateTitleUseCase {
  static async execute(
    request: UpdateBlogPostTitleRequest
  ): Promise<BlogPostResponse> {
    const { id, title } = request;

    let updatedPost = await Blog.updateOne(
      { _id: id },
      { title, slug: title, updatedAt: new Date() }
    );

    if (updatedPost.matchedCount === 0) {
      throw new NotFoundError('BlogPost not found!');
    }

    const response = await Blog.findById(id).lean();
    return { ...response };
  }
}

export default UpdateTitleUseCase;
