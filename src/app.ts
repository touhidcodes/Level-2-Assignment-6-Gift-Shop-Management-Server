import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import { notFound } from "./app/middlewares/notFound";
import router from "./app/routes/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

dotenv.config();

const app: Application = express();

const corsOptions = {
  origin: ["http://localhost:5173", "https://l2a5-gift-shop-dashboard.web.app"],
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Application Routes
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World !.. Server is running...");
});
app.use(globalErrorHandler);
app.use(notFound);
export default app;
