import { ReactNode, createContext } from "react";
import { getQuotes, createQuote, getQuote } from "./QuotesServices";
import { ICreateQuote, IGetQuotes } from "./IQuotes";

type QuoteContextState = {
  getQuotes: () => Promise<IGetQuotes[]>;
  createQuote: (values: ICreateQuote) => Promise<IGetQuotes>;
  getQuote: (id: string) => Promise<IGetQuotes>;
};

export const QuotesContext = createContext<QuoteContextState>({
  getQuotes,
  createQuote,
  getQuote,
});

export const QuotesProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QuotesContext.Provider value={{ getQuotes, createQuote, getQuote }}>
      {children}
    </QuotesContext.Provider>
  );
};
