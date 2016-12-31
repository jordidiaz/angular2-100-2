import { Component, OnInit } from '@angular/core';

import { MyService } from './service';

@Component({
  selector: 'app-component',
  template: '<h1>{{title | sharedpipe}}</h1>'
})
export class MyComponent {

  title = null;

  constructor(service: MyService) {
    this.title = service.getGreeting();
  }
}
