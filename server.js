import express from "express";
import dotenv from "dotenv";
import contactsRoutes from "./routes/contacts.js";
import cors from "cors";
import { connectDB } from "./data/database.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

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
