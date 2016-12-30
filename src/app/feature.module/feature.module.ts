import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MyComponent } from './component';
import { MyPipe } from './pipe';
import { MyService } from './service';

@NgModule({
  declarations: [MyComponent, MyPipe],
  imports: [FormsModule, RouterModule],
  exports: [MyComponent],
  providers: [MyService]
})
export class FeatureModule { }
