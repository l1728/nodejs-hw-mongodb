import { isHttpError } from 'http-errors';

export async function errorHandler (error, req, res, next) {
    if (isHttpError(error)) {
    return res.status(error.status).send({
        status:error.status,
        message: error.message,
        data: error.message,
    });
    }
    console.error(error);
    res.status(500).send({
        status: 500,
        message: "Something went wrong",
        data: error.message
    });

    next();
};


