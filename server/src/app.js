import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import authRoutes from "./routes/auth.routes.js";
import employeeRoutes from "./routes/employee.routes.js";

import errorMiddleware from "./middleware/error.middleware.js";
import notFoundMiddleware from "./middleware/notFound.middleware.js";

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(limiter);
app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/auth", authRoutes);
app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;