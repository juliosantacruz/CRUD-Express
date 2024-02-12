import express, { Express, Request, Response } from "express";
import routerApi from "./routes";
import {  errorHandler,  logError,  boomErrorHandler,} from "./middleware/errorHandler";

const app: Express = express();

// Puerto que utilizaremos
const port = 3000;

// Middleware para request Json
app.use(express.json());

routerApi(app);
// Declaracion de middlewares por orden
app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send(`<h1>Prueba tecnica Carbon Systems</h1> </br> <p>CRUD Express</p>`);
});

app.listen(port, () => {
  console.log("le port " + port);
});
