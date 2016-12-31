import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedPipe } from './shared.pipe';
import { SharedComponent } from './shared.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  exports: [
    FormsModule,
    CommonModule,
    SharedPipe,
    SharedComponent
  ],
  declarations: [SharedPipe, SharedComponent],
  providers: [],
})
export class SharedModule { }
