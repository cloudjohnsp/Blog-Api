import Blog from '../../../Domain/Models/Blog';
import CreateBlogPostDto from '../../Contracts/Dtos/Blog/CreateBlogPost.dto';
import CreateBlogPostResponseDto from '../../Contracts/Dtos/Blog/CreateBlogPostResponse..dto';

class CreatePostUseCase {
  static async execute(
    request: CreateBlogPostDto
  ): Promise<CreateBlogPostResponseDto> {
    const newBlogPost = await Blog.create({
      ...request,
      createdAt: new Date(),
      slug: request.title,
    });
    const response: CreateBlogPostResponseDto = {
      id: newBlogPost._id,
      title: newBlogPost.title,
      slug: newBlogPost.title,
      content: newBlogPost.content,
      tags: newBlogPost.tags,
      createdAt: newBlogPost.createdAt,
    };

    return response;
  }
}

export default CreatePostUseCase;
