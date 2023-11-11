import axios from "../axios";
import { IGetContact } from "./IContact";

export const getContact = async (id: string): Promise<IGetContact> => {
  try {
    const { data } = await axios.get(`/api/contact/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
