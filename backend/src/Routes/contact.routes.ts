import { Router } from "express";
import { createContactController } from "../Containers/Contact/CreateContact";
import { getContactByIdController } from "../Containers/Contact/GetContactById";

const ContactRouter = Router();

ContactRouter.post("/", (req, res) => createContactController.handle(req, res));
ContactRouter.get("/:id", (req, res) =>
  getContactByIdController.handle(req, res)
);

export { ContactRouter };
