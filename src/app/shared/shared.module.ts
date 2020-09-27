import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';

@NgModule({
  declarations: [SplashScreenComponent],
  imports: [CommonModule],
  exports: [SplashScreenComponent],
  entryComponents: [SplashScreenComponent],
})
export class SharedModule {}
