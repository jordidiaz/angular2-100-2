import { Component, OnInit } from '@angular/core';

import { CacheService } from './cache.service';

@Component({
  selector: 'app-cacheable-component',
  templateUrl: './template.html'
})
export class MyComponent {

  value = null;

  constructor(private service: CacheService) {}

  public setCache() {
    this.service.setValue(this.value);
  }

  public getFromCache() {
    this.value = this.service.getValue();
  }
}
