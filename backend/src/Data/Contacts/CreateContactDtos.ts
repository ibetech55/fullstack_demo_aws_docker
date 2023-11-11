export interface CreateContactDto {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
}

export interface ICreateContact {
  _id: string;
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  phone_number: boolean;
  active: boolean;
  created_at: Date | string;
  deleted: Date | string;
  updated: Date | string;
}
