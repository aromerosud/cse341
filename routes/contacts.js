import express from "express";
import * as contactsController from "../controllers/contactsController.js";

const router = express.Router();

router.get("/", contactsController.getAll);
router.get("/:id", contactsController.getOne);

export default router;