import "express-async-errors";
import express, { Application, json } from "express";
import { contactRouter, customerRouter, sessionRouter } from "./routers";
import middlewares from "./middlewares";
import cors from "cors";

const app: Application = express();
app.use(cors());
app.use(json());

app.use("/customer", customerRouter);
app.use("/contact", contactRouter);
app.use("/login", sessionRouter);

app.use(middlewares.handleErrors);

export default app;