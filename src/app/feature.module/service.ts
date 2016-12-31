import { Injectable } from '@angular/core';

@Injectable()
export class MyService {

  constructor() { }

  public getGreeting() {
    return 'Hello World!';
  }
}
