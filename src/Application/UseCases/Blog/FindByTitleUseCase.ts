import Blog from '../../../Domain/Models/Blog';
import BlogPostResponse from '../../Contracts/Dtos/Blog/BlogPostResponse.dto';
import FindPostRequest from '../../Contracts/Dtos/Blog/FindPostRequest.dto';

class FindByPropertyUseCase {
  static async execute(request: FindPostRequest): Promise<BlogPostResponse[]> {
    const { property, value } = request;
    const regex = new RegExp(`${value}`, 'i');
    const posts = await Blog.find({ [property]: regex }).lean();

    const response = posts.map((item) => {
      return {
        id: item._id,
        title: item.title,
        slug: item.title,
        content: item.content,
        tags: item.tags,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      };
    });

    return response;
  }
}

export default FindByPropertyUseCase;
