import { Router } from "express";
import { ContactRouter } from "./contact.routes";
import { QuoteRouter } from "./qoute.routes";

const router = Router();

router.use("/contact", ContactRouter);
router.use("/quote", QuoteRouter);

export { router };
