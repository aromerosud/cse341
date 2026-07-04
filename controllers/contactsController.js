import * as contactsModel from "../models/contactsModel.js";
import { ObjectId } from "mongodb";

export async function getAll(req, res) {
    const data = await contactsModel.getAllContacts();
    res.send(data);
}

export async function getOne(req, res) {
    const id = new ObjectId(req.params.id);
    const data = await contactsModel.getContactById(id);
    res.send(data);
}