import { BlockUIService } from './services/blockUI.service';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [HeaderComponent, NavigationComponent],
  exports: [NavigationComponent, HeaderComponent],
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }

}
