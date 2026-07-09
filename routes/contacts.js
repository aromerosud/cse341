import express from "express";
import * as contactsController from "../controllers/contactsController.js";

const router = express.Router();

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Get all contacts
 *     responses:
 *       200:
 *         description: Returns all contacts
 */
router.get("/", contactsController.getAll);
router.get("/:id", contactsController.getOne);
router.post("/", contactsController.create);
router.put("/:id", contactsController.update);
router.delete("/:id", contactsController.remove)

export default router;
