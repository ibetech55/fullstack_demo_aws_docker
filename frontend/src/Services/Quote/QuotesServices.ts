import axios from "../axios";
import { ICreateQuote, IGetQuotes } from "./IQuotes";

export const getQuotes = async (): Promise<IGetQuotes[]> => {
  try {
    const { data } = await axios.get("/api/quote");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createQuote = async (
  values: ICreateQuote
): Promise<IGetQuotes> => {
  try {
    const { data } = await axios.post("/api/quote", { ...values });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getQuote = async (id: string): Promise<IGetQuotes> => {
  try {
    const { data } = await axios.get(`/api/quote/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
