package contactlist.infinityscroll;

import contactlist.infinityscroll.model.Contact;
import contactlist.infinityscroll.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Runner implements CommandLineRunner {
    @Autowired
    ContactService service;

    @Override
    public void run(String... args) throws Exception {

        for (int i = 100; i < 999; i++) {
            Contact contact = new Contact().builder()
                    .name("name - " + i)
                    .phoneNumber("050-36-58-" + i)
                    .build();
            service.addContact(contact);
        }
    }
}
