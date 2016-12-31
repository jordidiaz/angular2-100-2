import { Component, OnInit } from '@angular/core';

import { MyService } from './service';
import { OtherFeatureModuleService } from '../other.feature.module/other.feature.module.service';

@Component({
  selector: 'app-component',
  template: '<h1>{{title | mypipe}}</h1>'
})
export class MyComponent {

  title = null;

  constructor(service: MyService, otherService: OtherFeatureModuleService) {
    this.title = service.getGreeting();
  }
}
