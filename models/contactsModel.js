import { getDB } from "../data/database.js";

export async function getAllContacts() {
    const db = getDB();
    return await db.collection("contacts").find().toArray();
}

export async function getContactById(id) {
    const db = getDB();
    return await db.collection("contacts").findOne({ _id: id });
}