// Not Found
const notFound = (err, req, res, next) => {
    const error=new Error(`Not Found: ${req.originalUrl}`);
    res.status(404);
    next(error);
};

// Error Handler
const errorHandlerApi = (err, req, res, next) => {
    const statusCode=res.statusCode==200?500:res.statusCode;
    res.status(statusCode);
    res.json({
        message:err?.message,
        stack:err?.stack
    });
};
module.exports = {notFound,errorHandlerApi};