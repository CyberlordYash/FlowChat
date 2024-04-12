import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import path from "path";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/ConnectToMongoDB.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

const __dirname = path.resolve();

dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  return res.send("Hi yash");
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running on ${PORT}`);
});
