import { Request, Response } from "express";
import { model } from "mongoose";
import IContact from "../../types/models/IContact";
import { ContactSchema } from "../models/ContactSchema";

const Contact = model<IContact>('Contact', ContactSchema);

export class ContactController {

  public async addNewContact(req: Request, res: Response) {
    const newContact = new Contact(req.body);
    await newContact.save((err, contact) => {
      if (err) {
        res.status(400).send(err);
      }
      res.json(contact);
    });
  }

  public getContacts(_req: Request, res: Response) {
    Contact.find({}, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public getContactWithID(req: Request, res: Response) {
    Contact.findById(req.params.contactId, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public updateContact(req: Request, res: Response) {
    Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public deleteContact(req: Request, res: Response) {
    Contact.deleteOne({ _id: req.params.contactId }, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted contact!'});
    });
  }
}
