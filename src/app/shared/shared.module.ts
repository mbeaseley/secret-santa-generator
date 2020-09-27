import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { SnowBackgroundComponent } from './components/snow-background/snow-background.component';

@NgModule({
  declarations: [SplashScreenComponent, SnowBackgroundComponent],
  imports: [CommonModule],
  exports: [SplashScreenComponent, SnowBackgroundComponent],
})
export class SharedModule {}
