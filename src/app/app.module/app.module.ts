import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FeatureModule } from '../feature.module/feature.module';
import { OtherFeatureModule } from '../other.feature.module/other.feature.module';
import { CoreModule } from '../core.module/core.module';

import { LoggerLevel } from '../core.module/logger.level';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureModule,
    OtherFeatureModule,
    CoreModule.forRoot({level: LoggerLevel.Warning, verbose: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
