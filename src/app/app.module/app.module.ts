import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FeatureModule } from '../feature.module/feature.module';
import { OtherFeatureModule } from '../other.feature.module/other.feature.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FeatureModule,
    OtherFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
