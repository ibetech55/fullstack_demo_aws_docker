import { GetContactByIdController } from "../../../Controllers/ContactControllers/GetContactByIdController";
import { GetContactByIdUseCase } from "../../../Presentation/ContactsUseCases/GetContactByIdUseCase";
import { ContactRepository } from "../../../Repositories/contact";

const contactRepository = new ContactRepository();
const getContactByIdUseCase = new GetContactByIdUseCase(contactRepository);
const getContactByIdController = new GetContactByIdController(
  getContactByIdUseCase
);
export { getContactByIdUseCase, contactRepository, getContactByIdController };
