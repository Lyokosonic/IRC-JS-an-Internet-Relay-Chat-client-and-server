import { Document } from "mongoose";

export default interface IContact extends Document{
  firstName: string;
  lastName: string;
  email?: string;
  company?: string;
  phone?: string;
  created_date: Date;
}
