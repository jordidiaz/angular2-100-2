import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module/shared.module';

import { MyComponent } from './component';
import { MyPipe } from './pipe';
import { MyService } from './service';

@NgModule({
  declarations: [MyComponent, MyPipe],
  imports: [SharedModule],
  exports: [MyComponent],
  providers: [MyService]
})
export class FeatureModule { }
