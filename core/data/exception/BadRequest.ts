class BadRequest extends Error {
  constructor(message: string) {
    super(message);
  }
}

export default BadRequest;
