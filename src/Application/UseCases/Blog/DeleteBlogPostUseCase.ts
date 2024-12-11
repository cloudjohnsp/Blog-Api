import { NotFoundError } from 'restify-errors';
import Blog from '../../../Domain/Models/Blog';

class DeleteBlogPostUseCase {
  static async execute(id: string): Promise<void> {
    const deletionResult = await Blog.deleteOne({ _id: id });
    if (deletionResult.deletedCount === 0)
      throw new NotFoundError('Post not found!');
  }
}

export default DeleteBlogPostUseCase;
