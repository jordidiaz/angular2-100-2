import { NgModule, ModuleWithProviders } from '@angular/core';

import { LoggerServiceConfig } from './logger.service.config';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [LoggerService],
})
export class CoreModule {

  static forRoot(config: LoggerServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: LoggerServiceConfig, useValue: config }
      ]
    };
  }
}
