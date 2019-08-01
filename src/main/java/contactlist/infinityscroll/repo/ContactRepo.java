package contactlist.infinityscroll.repo;

import contactlist.infinityscroll.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ContactRepo extends JpaRepository<Contact, Integer> {

}
