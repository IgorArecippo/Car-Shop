import { NextFunction, Request, Response } from 'express';

// class ErrorHandler {
//   public static handle(
//     error: Error,
//     _req: Request,
//     res: Response,
//     next: NextFunction,
//   ) {
//     res.status(500).json({ message: error.message });
//     next();
//   }
// }

class HttpException extends Error {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }

  public static errorMiddleware(
    error: HttpException,
    request: Request,
    response: Response,
    _next: NextFunction,
  ) {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    response.status(status).send({ message });
  }
}
export default HttpException;
