import { Component, Input, OnInit } from '@angular/core';

enum SectionSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

@Component({
  selector: 'cc-section',
  templateUrl: './section.component.pug',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input() heading: string;
  @Input() description: string;
  @Input() size: SectionSize = SectionSize.large;

  class: string;
}
