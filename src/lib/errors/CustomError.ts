// https://medium.com/@xiaominghu19922/proper-error-handling-in-express-server-with-typescript-8cd4ffb67188
// I like this approach. Thanks to the author.

export type CustomErrorContent = {
  message: string;
  context?: { [key: string]: any };
};

export type CustomErrorLogging = 'full' | 'minimal' | 'none';

export abstract class CustomError extends Error {
  abstract readonly statusCode: number;
  abstract readonly errors: CustomErrorContent[];
  abstract readonly logging: CustomErrorLogging;

  constructor(message: string) {
    super(message);

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
