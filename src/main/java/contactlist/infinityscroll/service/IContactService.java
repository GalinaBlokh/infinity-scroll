package contactlist.infinityscroll.service;

import contactlist.infinityscroll.model.Contact;

import java.util.List;

public interface IContactService {
    List<Contact>getAllContacts();
    Contact getContact(Integer id);
    void addContact(Contact contact);

}
