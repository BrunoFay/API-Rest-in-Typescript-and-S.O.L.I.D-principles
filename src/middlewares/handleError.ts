import { ErrorRequestHandler } from 'express';

class ErrorsFuntions {
  public generic: ErrorRequestHandler = async (err, _req, res, _next) => {
    console.log(err);
    return res.status(500).json({ message: 'internal error' });
  };
}
export default ErrorsFuntions;