import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

let db;

export async function connectDB() {
    await client.connect();
    db = client.db("contacts_db");
}

export function getDB() {
    return db;
}
