import { getDB } from "../data/database.js";

export async function getAllContacts() {
  const db = getDB();
  return await db.collection("contacts").find().toArray();
}

export async function getContactById(id) {
  const db = getDB();
  return await db.collection("contacts").findOne({ _id: id });
}

export async function createContact(contact) {
  const db = getDB();
  return await db.collection("contacts").insertOne(contact);
}

export async function updateContact(id, contact) {
  const db = getDB();
  return await db.collection("contacts").replaceOne({ _id: id }, contact);
}

export async function deleteContact(id) {
  const db = getDB();
  return await db.collection("contacts").deleteOne({ _id: id });
}
