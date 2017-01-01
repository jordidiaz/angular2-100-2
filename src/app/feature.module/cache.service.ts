import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {

  value: any = null;

  constructor() { }

  setValue(value: any) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}
