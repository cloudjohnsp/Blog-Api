import { celebrate, Joi, Segments } from 'celebrate';

class BlogValidator {
  private static readonly CREATE_VALIDATOR = celebrate({
    [Segments.BODY]: Joi.object({
      title: Joi.string().min(2).max(100).required(),
      content: Joi.string().min(2).required(),
      tags: Joi.array<string>(),
    }),
  });

  static get createValidation() {
    return BlogValidator.CREATE_VALIDATOR;
  }
}

export default BlogValidator;
