import { celebrate, Joi, Segments } from 'celebrate';
import Blog from '../../Domain/Models/Blog';

class BlogValidator {
  private static readonly CREATE_VALIDATOR = celebrate({
    [Segments.BODY]: Joi.object({
      title: Joi.string().min(2).max(100).required(),
      content: Joi.string().min(2).required(),
      tags: Joi.array<string>(),
    }),
  });

  private static readonly FIND_BY_PROPERTY_VALIDATOR = celebrate({
    [Segments.PARAMS]: Joi.object({
      property: Joi.string().min(1).max(100).required(),
      value: Joi.string().min(1).max(100).required(),
    }),
  });

  static get createValidation() {
    return BlogValidator.CREATE_VALIDATOR;
  }

  static get findByPropertyValidation() {
    return BlogValidator.FIND_BY_PROPERTY_VALIDATOR;
  }
}

export default BlogValidator;
