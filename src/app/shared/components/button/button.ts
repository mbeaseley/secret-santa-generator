import { EventEmitter } from '@angular/core';

export enum CCButtonType {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

export enum CCButtonSize {
  ExtraSmall = 'extra-small',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum CCButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  IconLink = 'icon-link',
}

export enum CCButtonState {
  Default = 'default',
  Disabled = 'disabled',
}

export interface CCButton {
  type: CCButtonType;
  href: string;
  uiRef: string;
  style: CCButtonStyle;
  size: CCButtonSize;
  displayClasses: string;
  state: CCButtonState;
  description: string;
  clicked: EventEmitter<any>;
}
