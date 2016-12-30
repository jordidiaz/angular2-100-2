import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MyComponent } from './component';
import { MyPipe } from './pipe';
import { MyService } from './service';

@NgModule({
  declarations: [MyComponent, MyPipe],
  imports: [FormsModule],
  exports: [MyComponent, FormsModule],
  providers: [MyService]
})
export class FeatureModule { }
