import Blog from '../../../Domain/Models/Blog';
import BlogPostResponse from '../../Contracts/Dtos/Blog/BlogPostResponse.dto';

class FindByTitleUseCase {
  static async execute(title: string): Promise<BlogPostResponse[]> {
    const regex = new RegExp(`${title}`, 'i');
    const posts = await Blog.find({ title: regex }).lean();

    const response = posts.map((item) => {
      return {
        id: item._id,
        title: item.title,
        slug: item.title,
        content: item.content,
        tags: item.tags,
        createdAt: item.createdAt,
      };
    });

    return response;
  }
}

export default FindByTitleUseCase;
