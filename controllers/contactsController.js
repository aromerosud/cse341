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

export async function create(req, res) {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  const response = await contactsModel.createContact(contact);

  if (response.acknowledged) {
    res.status(201).json({
      id: response.insertedId,
    });
  } else {
    res.status(500).send();
  }
}

export async function update(req, res) {
  const id = new ObjectId(req.params.id);

  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  const response = await contactsModel.updateContact(id, contact);

  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).send();
  }
}

export async function remove(req, res) {
  const id = new ObjectId(req.params.id);

  const response = await contactsModel.deleteContact(id);

  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).send();
  }
}
