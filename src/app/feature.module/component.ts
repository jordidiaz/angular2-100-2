import { Component, OnInit } from '@angular/core';

import { CacheService } from './cache.service';
import { LoggerService } from '../core.module/logger.service';

@Component({
  selector: 'app-cacheable-component',
  templateUrl: './template.html',
  providers: [CacheService]
})
export class MyComponent {

  value = null;

  constructor(private service: CacheService, private logger: LoggerService) {}

  public setCache() {
    this.service.setValue(this.value);
  }

  public getFromCache() {
    this.value = this.service.getValue();
  }
}
