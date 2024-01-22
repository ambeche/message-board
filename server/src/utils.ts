import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export class MessageBoardHttpError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = this.constructor.name;
  }
}

export const messageBoardHttpErrorHandler: ErrorRequestHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error instanceof MessageBoardHttpError) {
    const { status, message } = error;
    res.status(status).json({ error: message });
  } else {
    console.error(error.stack); // Logging internal server errors
    res.status(500).json({ error: "An unexpected error occurred" });
  }
};
