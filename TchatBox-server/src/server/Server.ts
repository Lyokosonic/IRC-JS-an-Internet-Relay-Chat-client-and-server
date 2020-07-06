import bodyParser from "body-parser";
import express from "express";
import * as Constant from "../utils/Constants";
import { Routes } from "./routes/Routes";
const mongoose = require("mongoose");

class Server {

  public server: express.Application;
  public routes: Routes = new Routes();
  public mongoUrl: string = Constant.DATABASE_URL;

  constructor() {
    this.server = express();
    this.config();
    this.mongoSetup();
  }

  private config(): void {
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
    this.routes.routes(this.server);
  }

  private mongoSetup(): void {
    if (!this.mongoUrl) {
      throw new Error("No mongoDB URL specified");
    }
    (mongoose as any).Promise = global.Promise;
    mongoose.connect(this.mongoUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false
    });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "Connection error with MongoDB."));
    db.once("open", () => {
      console.log("Connection to MongoDB successfully");
    })
  }
}

export default new Server().server;
