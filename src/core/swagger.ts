import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swaggerSpec.generated.json";

function setSwaggerDocs(app: Express, route: string = "/docs") {
    const routeJson = route + ".json";

    // Swagger Page
    app.use(route, swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // Docs In JSON Format
    app.get(routeJson, (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    console.info(`Docs available at '${route}' & '${routeJson}'`);
}

export default setSwaggerDocs;
