import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;




app.use(express.json()); // to parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser()); // to parse the incoming cookies.

app.use("/api/auth", authRoutes); 
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "frontend/vite-project/dist")));// to serve static files from the frontend build directory

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/vite-project", "dist" , "index.html"));// to serve the index.html file for all other routes
});
 
    
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});