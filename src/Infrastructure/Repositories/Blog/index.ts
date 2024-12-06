import IBlog from '../../../Application/Interfaces/Blog';
import Blog from '../../../Domain/Models/Blog';

interface IBlogRepository {
  create(blog: IBlog): void;
}

class BlogRepository implements IBlogRepository {
  async create(blog: IBlog): Promise<void> {
    const article = new Blog({
      title: blog.title,
      slug: blog.slug,
      content: blog.content,
      tags: blog.tags,
    });

    await article.save();
  }
}

export default BlogRepository;
