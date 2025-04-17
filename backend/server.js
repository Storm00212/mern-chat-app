import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;




app.use(express.json()); // to parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser()); // to parse the incoming cookies.

app.use("/api/auth", authRoutes); 
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

//app.get("/", (req, res) => {
 //   res.send("Hello World");
//});
 
    
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});