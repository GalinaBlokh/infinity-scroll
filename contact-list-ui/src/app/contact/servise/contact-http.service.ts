import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../model/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {

  private url = 'api/contacts/?page=';
  constructor(private httpClient: HttpClient) { }

  getContactsByPage(page:number){
    return this.httpClient.get<Contact[]>(this.url + page);
  }
}
