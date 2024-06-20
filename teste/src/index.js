"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("dotenv").config();
const port = (_a = Number(process.env.PORT)) !== null && _a !== void 0 ? _a : 8000;
const initServer = () => {
    app_1.default.listen(port, () => {
        console.log(`Server listener in port ${port}`);
    });
};
initServer();
//# sourceMappingURL=index.js.map