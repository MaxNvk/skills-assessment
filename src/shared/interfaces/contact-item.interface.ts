import { EContactStatus } from "../enums/contact-status.enum.ts";

export interface IContactItem {
  firstName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  status: EContactStatus;
}
