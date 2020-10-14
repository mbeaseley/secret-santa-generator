import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { SnowBackgroundComponent } from './components/snow-background/snow-background.component';
import { SectionComponent } from './components/section/section.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [SplashScreenComponent, SnowBackgroundComponent, SectionComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [SplashScreenComponent, SnowBackgroundComponent, SectionComponent, ButtonComponent],
})
export class SharedModule {}
