import * as dotenv from "dotenv";

// Initialize configuration
dotenv.config();

// Server environement variables
export const SERVER_HOST = process.env.SERVER_HOST || "http://localhost";
export const SERVER_PORT = process.env.SERVER_PORT || 4000;

// Database environement variables
export const DATABASE_URL = process.env.DATABASE_URL || null;
