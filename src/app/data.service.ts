import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor() { }

  cars = ['ford', 'honda', 'volvo'];

  myData() {
    return 'This is my data, man';
  }
}
