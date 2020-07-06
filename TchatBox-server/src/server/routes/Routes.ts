import { Application, Request, Response } from "express";
import { ContactController } from "../controller/ContactController";


export class Routes {

  public contactController: ContactController = new ContactController();

  public routes(server: Application): void {
    server.route("/")
    .get((_req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successful !"
      })
    });
    // Add new contact
    server.route("/createContact")
      .post(this.contactController.addNewContact);
    // Get all contacts
    server.route("/contacts")
      .get(this.contactController.getContacts);
    server.route("/contact/:contactId")
    // Get a specific contact
      .get(this.contactController.getContactWithID)
    // Update a specific contact
      .put(this.contactController.updateContact)
    // Delete a specific contact
    server.route("/deleteContact/:contactId")
      .delete(this.contactController.deleteContact);
  }
}
