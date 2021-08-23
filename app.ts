import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import expressEjsLayouts from "express-ejs-layouts";
import { ErrorController } from "./src/module/controllers";
import router from "./src/routes";

const app = express();
const errorController = new ErrorController();
// view engine setup
app.set("views", path.join(__dirname, "src/module/views"));
app.set("view engine", "ejs");
app.use(expressEjsLayouts);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// router
app.use(router);

// catch 404 and forward to error handler
app.use(errorController.catch404);
// error handler
app.use(errorController.error);

module.exports = app;
