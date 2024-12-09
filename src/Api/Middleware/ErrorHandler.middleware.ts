import { ErrorRequestHandler } from 'express';
import { Error } from 'mongoose';

class ErrorHandler {
  private static readonly normalize = (err: Error): Error => {
    console.error(err);
    return new Error(err.message);
  };

  static handler: ErrorRequestHandler = (err, _req, res, _next) => {
    const error = ErrorHandler.normalize(err);

    res.status(500).json({ message: error.message });
  };
}

export default ErrorHandler;
