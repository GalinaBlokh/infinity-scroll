package contactlist.infinityscroll.service;

import contactlist.infinityscroll.model.Contact;


import java.util.List;

public interface IContactService {

    void addContact(Contact contact);

    List<Contact> getAllContacts();

    List<Contact> getContactsByPage(int page);

}
