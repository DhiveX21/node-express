import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
  Express,
} from "express";
import dotenv from "dotenv";
import usersRouter from "./routes/users.routes";
import NotFound from "./core/data/exception/NotFound";
import { apiResponseNotFound } from "./responses/NotFound";
import { apiResponseInternalServerError } from "./responses/InternalServerError";
import { apiResponseBadRequest } from "./responses/BadRequest";
import BadRequest from "./core/data/exception/BadRequest";
import Unauthorized from "./core/data/exception/Unauthorized";
import Conflict from "./core/data/exception/Conflict";
import { apiResponseUnAuthorized } from "./responses/Unauthorized";
import { apiResponseConflict } from "./responses/Conflict";

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use("/users", usersRouter);

app.use(
  (
    _err: ErrorRequestHandler,
    _req: Request,
    _res: Response,
    _next: NextFunction
  ): void => {
    if (_err instanceof NotFound) {
      _res.status(404).json(apiResponseNotFound(_err.message));
    } else if (_err instanceof BadRequest) {
      _res.status(400).json(apiResponseBadRequest(_err.message));
    } else if (_err instanceof Unauthorized) {
      _res.status(401).json(apiResponseUnAuthorized(_err.message));
    } else if (_err instanceof Conflict) {
      _res.status(401).json(apiResponseConflict(_err.message));
    } else {
      console.log(_err, "awkdawokwaodkwoadk");
      _res.status(500).json(apiResponseInternalServerError());
    }
  }
);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
