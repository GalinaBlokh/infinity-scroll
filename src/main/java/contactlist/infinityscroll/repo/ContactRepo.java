package contactlist.infinityscroll.repo;

import contactlist.infinityscroll.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepo extends JpaRepository<Contact, Integer> {

}
