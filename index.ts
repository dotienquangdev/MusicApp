import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import * as database from "./config/database";
import methodOverride from "method-override";
import bodyParser from "body-parser";

import clientRoutes from "./routes/client/inex.routess";
import adminRoutes from "./routes/admin/index.routess";
import { systemConfig } from "./config/config";

dotenv.config();
database.connect();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.use(express.static(`${__dirname}/public`));

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

app.use(
    "/tinymce",
    express.static(path.join(__dirname, "node_modules", "tinymce"))
);

//App Local Varaables
app.locals.prefixAdmin = systemConfig.prefixAdmin;

//admin Routes
adminRoutes(app);

//client Routes
clientRoutes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});