const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const documentRoutes = require("./routes/CRIDDdocument.routes");
const workflowRoutes = require("./routes/assignapprove.routes");
const searchRoutes = require("./routes/search.routes");

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

module.exports = app;

