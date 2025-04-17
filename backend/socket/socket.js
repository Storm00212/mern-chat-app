import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    },    
});

const userSocketMap = {};//{userId: socketId} ;// Map to store user IDs and their corresponding socket IDs

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId]; // Function to get the socket ID of a user based on their user ID
};

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    const userId = socket.handshake.query.userId; // Get the user ID from the query parameters

    if (userId !== "undefined" && !userSocketMap[userId]) { // Check if user ID is provided and not already in the map
        userSocketMap[userId] = socket.id; // Store the user ID and socket ID in the map
    }

    console.log("Current userSocketMap:", userSocketMap); // Log the current state of the map for debugging
    io.emit("getOnlineUsers", Object.keys(userSocketMap)); // Emit the online users to all connected clients

    socket.on("disconnect", () => { // Handle disconnection
        console.log("user disconnected", socket.id);
        delete userSocketMap[userId]; // Remove the user ID from the map
        io.emit("getOnlineUsers", Object.keys(userSocketMap)); // Emit the updated online users to all connected clients
    });
});

export {app, server, io};