import app from "./app";
require("dotenv").config();

const port: number = Number(process.env.PORT) ?? 8000;

const initServer = () => {
    app.listen(port, () => {
        console.log(`Server listener in port ${port}`);
    });
};

initServer();
