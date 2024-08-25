import { Request, Response, NextFunction } from "express";

function emptyPayloadValidator(requiredKeys: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const missingKeys = requiredKeys.filter((key) => !(key in req.body));

    if (missingKeys.length > 0) {
      return res.status(400).json({
        error: `Missing required keys: ${missingKeys.join(", ")}`,
      });
    }

    next();
  };
}

export default emptyPayloadValidator;
