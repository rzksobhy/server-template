import { Handler } from "express";

function CustomResponseMethods(): Handler {
    return (_, res, next) => {
        res.failure = (statusCode, errors) => {
            const response = { status: "failure", statusCode, errors };
            res.status(statusCode).json(response);
        };

        res.success = (statusCode, data) => {
            const response = { status: "success", statusCode, data };
            res.status(statusCode).json(response);
        };

        next();
    };
}

export default CustomResponseMethods;
