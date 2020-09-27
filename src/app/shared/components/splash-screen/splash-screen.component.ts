import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cc-splash-screen',
  templateUrl: './splash-screen.component.pug',
  styleUrls: ['./splash-screen.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SplashScreenComponent {
  hide: boolean = false;
}
