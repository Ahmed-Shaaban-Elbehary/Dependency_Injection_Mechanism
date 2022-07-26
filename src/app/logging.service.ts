import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class LoggingService {

  prefix: string = 'serivce';
  constructor() { }

  log(message: string){
    console.log(`${this.prefix}: ${message}`);
  }
}
