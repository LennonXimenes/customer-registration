import express, { Application, json } from "express";
import customerControllers from "./controllers/customer.controllers";

const app: Application = express();
app.use(json());

app.get("/", customerControllers.readCustomer);
app.post("/", customerControllers.createCustomer);

export default app;