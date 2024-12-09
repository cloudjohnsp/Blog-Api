import express, { Router } from 'express';
import BlogController from '../Controllers/BlogController.controller';
import BlogValidator from '../../Application/Validators/blog.validator';

const blogRouter: Router = express.Router();

const blogController = new BlogController();

blogRouter.post(
  '/create',
  BlogValidator.createValidation,
  blogController.createBlogPost
);

export default blogRouter;
