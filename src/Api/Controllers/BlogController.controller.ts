import { NextFunction, Request, response, Response } from 'express';
import CreatePostUseCase from '../../Application/UseCases/Blog/CreatePostUseCase';
import FindByTitleUseCase from '../../Application/UseCases/Blog/FindByTitleUseCase';
import UpdateTitleUseCase from '../../Application/UseCases/Blog/UpdateTitleUseCase';
import UpdateTagsUseCase from '../../Application/UseCases/Blog/UpdateTagsUseCase';

class BlogController {
  async createBlogPost(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { title, slug, content, tags } = req.body;
      const newPost = { title, slug, content, tags };
      const data = await CreatePostUseCase.execute(newPost);

      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  }

  async findByProperty(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { property, value } = req.params;
      const data = await FindByTitleUseCase.execute({ property, value });

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  async updateTitle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = await UpdateTitleUseCase.execute(req.body);
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  async updateTags(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = await UpdateTagsUseCase.execute(req.body);
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }
}

export default BlogController;
