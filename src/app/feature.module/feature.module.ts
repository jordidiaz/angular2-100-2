import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module/shared.module';

import { MyComponent } from './component';
import { MyPipe } from './pipe';
import { MyService } from './service';
import { CacheService } from './cache.service';

@NgModule({
  declarations: [MyComponent, MyPipe],
  imports: [SharedModule],
  exports: [MyComponent],
  providers: [MyService, CacheService]
})
export class FeatureModule { }
