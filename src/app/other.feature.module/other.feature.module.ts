import { NgModule } from '@angular/core';

import { OtherFeatureModuleService } from './other.feature.module.service';
import { SharedModule} from '../shared.module/shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [],
  providers: [OtherFeatureModuleService]
})
export class OtherFeatureModule { }
