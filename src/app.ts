import http from "http";
import fromEnvOrThrow from "@utils/fromEnvOrThrow";
import app from "@core/express";
import apiRouter from "@routes";
import getLocalIpAddr from "@utils/get-local-ip-addr";
import setSwaggerDocs from "@core/swagger";

const HOST = fromEnvOrThrow("HOST");
const PORT = fromEnvOrThrow("PORT");

app.use("/api", apiRouter);

// Setup Swagger
setSwaggerDocs(app);

const server = http.createServer(app);
server.listen(PORT, HOST, () => {
    if (HOST == "0.0.0.0") {
        const ip = getLocalIpAddr();
        console.info(`Server is running on http://${ip}:${PORT}`);
        console.info(`Server is running on http://localhost:${PORT}`);
    } else {
        console.info(`Server is running on http://${HOST}:${PORT}`);
        console.info(`Server is running on http://localhost:${PORT}`);
    }
});
