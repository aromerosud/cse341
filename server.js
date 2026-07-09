import express from "express";
import dotenv from "dotenv";
import contactsRoutes from "./routes/contacts.js";
import { connectDB } from "./data/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// routes
app.use("/contacts", contactsRoutes);

app.get("/", (req, res) => {
  res.send("API Contacts running");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
