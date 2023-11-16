import "express-async-errors";
import express, { Application, json } from "express";
import { contactRouter, customerRouter } from "./routers";
import middlewares from "./middlewares";

const app: Application = express();
app.use(json());

app.use("/customer", customerRouter);
app.use("/contact", contactRouter);

app.use(middlewares.handleErrors);

export default app;