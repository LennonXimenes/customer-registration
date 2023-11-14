import "express-async-errors";
import express, { Application, json } from "express";
import { customerRouter } from "./routers";
import middlewares from "./middlewares";

const app: Application = express();
app.use(json());

app.use("/customer", customerRouter);

app.use(middlewares.handleErrors);

export default app;