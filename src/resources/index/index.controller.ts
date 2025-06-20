import BadRequestError from '@/lib/errors/BadRequestError';

export const indexController = {
  getIndex: () => 'Hello, World!',
  getFiftyFifty: () => {
    if (Math.random() < 0.5) {
      throw new BadRequestError({
        code: 500,
        message: 'Random error occurred',
      });
    }
    return 'No error occurred!';
  },
  getHealth: () => 'OK',
};
