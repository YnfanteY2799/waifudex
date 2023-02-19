import morgan from "morgan";
import Cors from "cors";
import express from "express";

const app = express();

app.use(morgan("dev"));
app.use(Cors());

export default app;
