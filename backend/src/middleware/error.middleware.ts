import { errorLogger } from "../loggers/error.logger";

export const errorHandlerMiddleware = (err, req, res, next) => {
  const code = err.code || 500;
  const message = err.message || 'Internal Server Error';

  errorLogger.error({ error: err, message, code });
  
  res.status(err.statusCode).json({
    status: code,
    message: message
  });
}