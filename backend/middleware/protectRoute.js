import jwt from 'jsonwebtoken';
import express from 'express';
import cookieParser from 'cookie-parser'; // Add this line
import User from '../models/user.model.js';

// Add this middleware to parse cookies
const app = express();
app.use(cookieParser());

const protectRoute = async (req, res, next) => {
    try {
        if (!req.cookies || !req.cookies.jwt) {
            return res.status(401).json({ error: "Unauthorized - No token provided" });
        }
        const token = req.cookies.jwt;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid token" });
        }
        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("error in protectRoute middleware", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export default protectRoute;