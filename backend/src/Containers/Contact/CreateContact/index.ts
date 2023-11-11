import { CreateContactController } from "../../../Controllers/ContactControllers/CreateContactController";
import { CreateContactUseCase } from "../../../Presentation/ContactsUseCases/CreateContactUseCase";
import { ContactRepository } from "../../../Repositories/contact";

const contactRepository = new ContactRepository();
const createContactUseCase = new CreateContactUseCase(contactRepository);
const createContactController = new CreateContactController(
  createContactUseCase
);
export { createContactUseCase, contactRepository, createContactController };
