import {Injectable} from '@angular/core';
import {Details} from './details';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  save(details: Details): void {
    alert(JSON.stringify(details));
  }
}
