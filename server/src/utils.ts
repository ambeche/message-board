import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

// Custom Error object for handling http error responses
export class MessageBoardHttpError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = this.constructor.name;
  }
}
// middleware for handling http error responses such as 400, 404, etc
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

const isString = (arg: unknown): arg is string => {
  return typeof arg === "string" || arg instanceof String;
};

export const parseAndValidateString = (stringValue: unknown): string => {
  if (!isString(stringValue) || stringValue.trim() === "")
    throw new MessageBoardHttpError(
      `Missing or invalid data: ${stringValue}`,
      400
    );
  return stringValue;
};

// Generate message ids for newly added messages using datetime and randomisation.
export const generateUniqueRandomId = (): number => {
  const timePart = new Date().getTime();
  const randomPart = Math.floor(Math.random() * 10000);
  return Number(`${timePart}${randomPart}`);
};
