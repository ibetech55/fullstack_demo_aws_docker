import "reflect-metadata";
import "dotenv/config";
import "./Infra/Database";

import app from "./Infra/HttpServer";

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(PORT, () => console.log(`Connected to port ${PORT}`));
