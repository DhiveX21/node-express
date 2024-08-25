class InternalServerError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export default InternalServerError;
