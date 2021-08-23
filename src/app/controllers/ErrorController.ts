import { NextFunction, Request, Response } from "express";
import createError from "http-errors";

export default class ErrorController {
  async catch404(req: Request, res: Response, next: NextFunction) {
    next(createError(404));
  }

  async error(err: any, req: Request, res: Response, next: NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error", { title: err.message });
  }
}
