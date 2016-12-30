import { Component, OnInit } from '@angular/core';

import { MyService } from './service';

@Component({
  selector: 'app-component',
  template: '<h1>{{title | mypipe}}</h1>'
})
export class MyComponent {

  title = 'Hello World!';

  constructor(service: MyService) { }
}
