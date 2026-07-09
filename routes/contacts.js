import express from "express";
import * as contactsController from "../controllers/contactsController.js";

const router = express.Router();

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Get all contacts
 *     description: Returns a list of all contacts stored in the database.
 *     tags:
 *       - Contacts
 *     responses:
 *       200:
 *         description: A list of contacts.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact'
 *       500:
 *         description: Server error.
 */
router.get("/", contactsController.getAll);

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Get a contact by id
 *     description: Returns a single contact using the MongoDB ObjectId.
 *     tags:
 *       - Contacts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Contact ID
 *         schema:
 *           type: string
 *           example: 6a487a1397c627dc1143d70e
 *     responses:
 *       200:
 *         description: Contact found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       404:
 *         description: Contact not found.
 *       500:
 *         description: Server error.
 */
router.get("/:id", contactsController.getOne);

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a new contact
 *     description: Creates a new contact in the database.
 *     tags:
 *       - Contacts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       201:
 *         description: Contact created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 6874abc123456789abcdef12
 *       500:
 *         description: Server error.
 */
router.post("/", contactsController.create);

/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     summary: Update a contact
 *     description: Updates an existing contact by id.
 *     tags:
 *       - Contacts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Contact ID
 *         schema:
 *           type: string
 *           example: 6874abc123456789abcdef12
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       204:
 *         description: Contact updated successfully.
 *       500:
 *         description: Server error.
 */
router.put("/:id", contactsController.update);


/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete a contact
 *     description: Deletes a contact using the MongoDB ObjectId.
 *     tags:
 *       - Contacts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Contact ID
 *         schema:
 *           type: string
 *           example: 6874abc123456789abcdef12
 *     responses:
 *       204:
 *         description: Contact deleted successfully.
 *       500:
 *         description: Server error.
 */
router.delete("/:id", contactsController.remove);

export default router;
