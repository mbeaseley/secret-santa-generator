import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { SnowBackgroundComponent } from './components/snow-background/snow-background.component';
import { SectionComponent } from './components/section/section.component';

@NgModule({
  declarations: [SplashScreenComponent, SnowBackgroundComponent, SectionComponent],
  imports: [CommonModule],
  exports: [SplashScreenComponent, SnowBackgroundComponent, SectionComponent],
})
export class SharedModule {}
