import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { CCButton, CCButtonSize, CCButtonState, CCButtonStyle, CCButtonType } from './button';

@Component({
  selector: 'cc-button',
  templateUrl: './button.component.pug',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit, OnChanges {
  button: CCButton;

  @Input() uiRef: string;
  @Input() uiParams: any;
  @Input() externalLink: string;
  @Input() buttonType: CCButtonType = CCButtonType.Button;
  @Input() buttonSize: CCButtonSize = CCButtonSize.Medium;
  @Input() buttonStyle: CCButtonStyle = CCButtonStyle.Primary;
  @Input() buttonState: CCButtonState = CCButtonState.Default;
  @Input() description: string;

  @Output() readonly clicked = new EventEmitter<boolean>();

  constructor(private readonly route: Router) {}

  /**
   * on Route change event
   */
  @HostListener('click', [])
  onRouteEvent(): Promise<boolean> {
    if (!this.button?.uiRef) {
      return Promise.resolve(undefined);
    }

    const params = this.uiParams ? JSON.parse(this.uiParams) : {};
    return this.route.navigate([this.button.uiRef], params);
  }

  /**
   * on creation of button
   */
  createButton(): CCButton {
    const buttonEl: CCButton = {
      uiRef: this.uiRef,
      href: this.externalLink,
      clicked: this.clicked,
      size: this.buttonSize,
      style: this.buttonStyle,
      state: this.buttonState,
      type: this.buttonType,
      description: this.description,
      displayClasses: `
      cc-button--size-${this.buttonSize}
      cc-button--style-${this.buttonStyle}
      `,
    };

    return buttonEl;
  }

  /**
   * On change
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.uiRef || changes.style) {
      this.button = this.createButton();
    }
  }

  /**
   * On init
   */
  ngOnInit(): void {
    this.button = this.createButton();
  }
}
