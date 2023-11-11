import { ReactNode, createContext } from "react";
import { getContact } from "./ContactServices";
import { IGetContact } from "./IContact";

type ContactContextState = {
  getContact: (id: string) => Promise<IGetContact>;
};

export const ContactContext = createContext<ContactContextState>({
  getContact,
});

export const ContactProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ContactContext.Provider value={{ getContact }}>
      {children}
    </ContactContext.Provider>
  );
};
