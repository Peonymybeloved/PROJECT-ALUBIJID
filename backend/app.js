import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import documentRoutes from "./routes/document.routes.js";
import workflowRoutes from "./routes/workflow.routes.js";
import searchRoutes from "./routes/search.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/workflow", workflowRoutes);
app.use("/api/search", searchRoutes);

app.get("/api/ping", (req, res) => {
  res.status(200).json({ message: "Server running" });
});

export default app;



