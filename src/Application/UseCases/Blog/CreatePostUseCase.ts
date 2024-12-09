import Blog from '../../../Domain/Models/Blog';
import CreateBlogPostDto from '../../Contracts/Dtos/Blog/CreateBlogPost.dto';
import CreateBlogPostResponseDto from '../../Contracts/Dtos/Blog/CreateBlogPostResponse..dto';

class CreatePostUseCase {
  static async execute(
    request: CreateBlogPostDto
  ): Promise<CreateBlogPostResponseDto> {
    const newBlogPost = await Blog.create(request);
    const response: CreateBlogPostResponseDto = {
      id: newBlogPost._id,
      title: newBlogPost.title,
      slug: newBlogPost.slug,
      content: newBlogPost.content,
      tags: newBlogPost.tags,
    };

    return response;
  }
}

export default CreatePostUseCase;
