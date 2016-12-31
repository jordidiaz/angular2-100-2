import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FeatureModule } from '../feature.module/feature.module';
import { OtherFeatureModule } from '../other.feature.module/other.feature.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureModule,
    OtherFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
