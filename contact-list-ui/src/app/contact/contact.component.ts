import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ContactHttpService} from './servise/contact-http.service';
import {Contact} from './model/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class ContactComponent implements OnInit {

  private contacts: Contact[] = [];
  private page = 0;

  constructor(private ContactHttpServise: ContactHttpService) {
  }

  ngOnInit() {
    this.ContactHttpServise.getContactsByPage(0).subscribe(value => this.contacts = value);
  }

  getContactByPage(page:number){
    this.ContactHttpServise.getContactsByPage(page).subscribe(value =>{
      value.forEach(value1 => {this.contacts.push(value1);});
    });
 }
}
