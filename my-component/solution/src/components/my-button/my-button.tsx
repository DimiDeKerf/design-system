import { Component, Prop, h, Watch } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {

  @Prop() label: string;
  @Prop() size: ButtonSize = 'default';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() leadingIcon: string;
  @Prop() trailingIcon: string;

  @Watch('size')
  validateSize() {
    if (!isButtonSize(this.size)) {
      this.size = 'default';
    }
  }

  componentWillLoad() {
    this.validateSize();
  }

  render() {
    return (
      <button
        disabled={this.disabled}
        class={`
          flex items-center justify-center
        text-white disabled:text-reliable-300
        bg-reliable-600 hover:bg-reliable-500 active:bg-reliable-400 disabled:bg-reliable-100
          focus:ring-2 focus:ring-connection-500
          ${this.getTextSize(this.size)}
          ${this.getHeight(this.size)} ${!this.isLabelEmpty(this.label) ? 'px-12' : this.getWidth(this.size)}
        `}
      >
        {this.leadingIcon && <my-icon icon={this.leadingIcon} class={{
          'mr-8': !this.isLabelEmpty(this.label)
        }}></my-icon>}
        {this.label}
        {this.trailingIcon && <my-icon icon={this.trailingIcon} class={{
          'ml-8': !this.isLabelEmpty(this.label)
        }}></my-icon>}
      </button>
    );
  }

  private getTextSize(size: ButtonSize) {
    switch (size) {
      case 'small':
        return 'text-sm';
      case 'large':
        return 'text-xl';
      default:
        return 'text-base';
    }
  }

  private getHeight(size: ButtonSize) {
    switch (size) {
      case 'small':
        return 'h-32';
      case 'large':
        return 'h-40';
      default:
        return 'h-36';
    }
  }

  private getWidth(size: ButtonSize) {
    switch (size) {
      case 'small':
        return 'w-32';
      case 'large':
        return 'w-40';
      default:
        return 'w-36';
    }
  }

  private isLabelEmpty(label: string): boolean {
    return label == null || label == '';
  }

}

export type ButtonSize = 'small' | 'default' | 'large';

function isButtonSize(size: string): size is ButtonSize {
  return size === 'small' || size === 'default' || size === 'large';
}
