import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swaggerSpec.generated.json";

function swaggerDocs(app: Express) {
    // Swagger Page
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // Docs In JSON Format
    app.get("/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    console.info(`Docs available at '/docs' & '/docs.json'`);
}

export default swaggerDocs;
