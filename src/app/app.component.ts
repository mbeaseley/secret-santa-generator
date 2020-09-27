import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'cc-app',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked {
  constructor(private el: ElementRef) {}

  ngAfterViewChecked(): void {
    setTimeout(() => {
      try {
        // ngClass caused random error with pug extension
        this.el.nativeElement.querySelector('cc-splash-screen').classList.add('hide');
        this.el.nativeElement.querySelector('.app__route').classList.remove('hide');
        this.el.nativeElement.querySelector('.app__route').classList.add('show');
      } catch (e) {}
    }, 3000);
  }
}
