import { Injectable, Optional } from '@angular/core';

import { LoggerServiceConfig } from './logger.service.config';
import { LoggerLevel } from './logger.level';

@Injectable()
export class LoggerService {

  level: LoggerLevel;
  verbose: boolean;

  constructor(@Optional() config: LoggerServiceConfig) {
    if (config) {
      this.level = config.level;
      this.verbose = config.verbose;
    }
  }
}

