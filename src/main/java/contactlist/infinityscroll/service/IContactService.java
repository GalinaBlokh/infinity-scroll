package contactlist.infinityscroll.service;

import contactlist.infinityscroll.model.Contact;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface IContactService {

    List<Contact> getAllContacts();

    void addContact(Contact contact);

    public List<Contact> getContactsByPage(int page);

}
