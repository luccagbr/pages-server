"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const path_1 = require("path");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/page", express.static(path_1.default.join(__dirname, "public")));
app.use(cors({ origin: "*" }));
app.use((req, res, next) => {
    res.status(404).send({ status: "Rota não encontrada" });
    next();
});
exports.default = app;
//# sourceMappingURL=app.js.map