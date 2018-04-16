import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionPickerDirective } from './directives/position-picker';
import { PositionPickerModalPage } from './pages/positon-picker-modal/position-picker-modal';
import { IonicModule } from 'ionic-angular';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

@NgModule({
  imports: [CommonModule, IonicModule,  AgmCoreModule, ],
  declarations: [PositionPickerDirective, PositionPickerModalPage],
  exports: [PositionPickerDirective],
  entryComponents: [PositionPickerModalPage]
})
export class PositionPickerDirectiveModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PositionPickerDirectiveModule,
      providers: []
    };
  }
}
