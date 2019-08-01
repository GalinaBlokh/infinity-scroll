package contactlist.infinityscroll.service;

import contactlist.infinityscroll.model.Contact;

import java.util.List;

public interface IContactService {
    List<Contact>getAllContacts();
    void addContact(Contact contact);

}
