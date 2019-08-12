import {Component, OnInit} from '@angular/core';
import {ContactHttpService} from './servise/contact-http.service';
import {Contact} from './model/Contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})

export class ContactComponent implements OnInit {

  private contacts: Contact[] = [];
  private page = 0;

  constructor(private contactHttpService: ContactHttpService) {
  }

  ngOnInit() {
    this.contactHttpService.getContactsByPage(this.page).subscribe(data=> this.contacts = data);
    };

  getContacts() {
    this.contactHttpService.getContactsByPage(this.page).subscribe(data => {
      data.forEach(value => this.contacts.push(value));
    });
  }

  onScroll() {
      this.page = this.page + 1;
    this.getContacts()
  }

}




