import http from "http";
import fromEnvOrThrow from "@utils/fromEnvOrThrow";
import app from "@core/express";
import apiRouter from "@routes";
import getLocalIpAddr from "@utils/get-local-ip-addr";

const HOST = fromEnvOrThrow("HOST");
const PORT = fromEnvOrThrow("PORT");

app.get("/", (_, res) => {
    res.send(`
        <div style="display: flex; justify-content: center; align-items: center">
            <h1 style=" background: rgba(0, 0, 0, 0.2); padding: 30px; border-radius: 20px;" >
                App Is Running!
            </h1>
        </div>
    `);
});

app.use("/api", apiRouter);

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
