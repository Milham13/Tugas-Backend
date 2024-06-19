import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { testConnection } from "./database/database.js";
import router from "./router/index.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use(router);


app.listen(process.env.APP_PORT, () => {
    testConnection();
    console.log(`Server running on port http://localhost:${process.env.APP_PORT}`);
})