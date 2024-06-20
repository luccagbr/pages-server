// import * as bodyParser from "body-parser";
// import * as express from "express";
// import * as cors from "cors";
// import * as path from "path";
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/page", express.static(path.join(__dirname, "../src/public/pages")));
app.use("/scripts", express.static(path.join(__dirname, "./public/js")));
app.use("/styles", express.static(path.join(__dirname, "../src/public/styles")));
app.use(cors({ origin: "*" }));
app.use((req: typeof express.Request, res: typeof express.Response, next: typeof express.NextFunction) => {
    res.status(404).send({ status: "Rota não encontrada" });
    next();
});

export default app;
