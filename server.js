io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    // Listen for incoming messages
    socket.on("disconnect", () => {
        // Handle disconnection
        console.log("user disconnected", socket.id);
    });

    // ...existing code...
});
