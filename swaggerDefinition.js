const { version } = require("./package.json");

module.exports = {
    openapi: "3.0.0",
    info: {
        title: "My API",
        version: version,
        description: "Simple API documentation using swagger-ui-express",
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            },
        },
    },
};
