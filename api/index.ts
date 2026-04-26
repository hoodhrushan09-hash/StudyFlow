import express from "express";

const app = express();
app.use(express.json());

// API routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "StudySnap AI API is running" });
});

export default app;
