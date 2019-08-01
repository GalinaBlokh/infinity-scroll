package contactlist.infinityscroll.service;

import contactlist.infinityscroll.model.Contact;
import contactlist.infinityscroll.repo.ContactRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.stream.Collectors;

@Service
public class ContactService implements IContactService {
    @Autowired
    private ContactRepo repo;

    @Override
    public void addContact(Contact contact) {
        Contact newOne = contact.builder()
                .id(contact.getId())
                .name(contact.getName())
                .phoneNumber(contact.getPhoneNumber())
                .build();
        repo.save(newOne);
    }

    @Override
    public List<Contact> getAllContacts() {
        List<Contact> allContacts = repo.findAll();
        return allContacts.stream()
                .map(contact -> getContact(contact.getId()))
                .collect(Collectors.toList());
    }

    @Override
    public Contact getContact(Integer id) {
        Contact contact = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("User doesn't exists"));
        return contact;
    }


}
