import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { router } from "../../Routes";
const YAML = require("yamljs");

export class HttpServer {
  public app: any;
  constructor() {
    this.app = express();
    this.middlewares();
    this.defaultHeaders();
    this.routes();
    this.swaggerInit();

    console.log("Connected to Http Server");
  }

  swaggerInit() {
    const swaggerDocument = YAML.load(
      `${path.resolve()}/src/Configs/swagger.yaml`
    );
    this.app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
  }
  routes() {
    this.app.use("/api", router);
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
    this.app.use(morgan("dev"));
  }

  defaultHeaders() {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
      );
      next();
    });
  }
}

export default new HttpServer().app;
