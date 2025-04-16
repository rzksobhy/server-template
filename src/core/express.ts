import cors from "cors";
import compression from "compression";
import express from "express";
import morgan from "morgan";
import CustomResponseMethods from "@middlewares/custom-response-methods";

const app = express();

app.use(
    cors({
        origin: "*",
    }),
);
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(CustomResponseMethods());

// Logger
app.use(morgan(":method :status :url :response-time ms"));

app.use((req, _, next) => {
    req.data = {};
    next();
});

export default app;
