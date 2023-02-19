import app from "./app/app";
import { DbConnection } from "./database/db";

const _PORT = 3090;

DbConnection();
app.listen(_PORT);
console.log(`App running on Port : ${_PORT}`);
