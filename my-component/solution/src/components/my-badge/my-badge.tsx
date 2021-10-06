import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-badge',
  styleUrl: 'my-badge.css',
  shadow: true,
})
export class MyBadge {

  @Prop() label: string;
  @Prop() color: BadgeColor = 'connection';

  render() {
    return (
      <div class={`
        ${this.getBackgroundColor(this.color)}
        rounded-full
        px-16
        py-4
        inline-flex
        justify-center
        items-center
        text-white
      `}
      >{this.label}</div>
    );
  }

  getBackgroundColor(color: BadgeColor) {
    switch (color) {
      case 'connection':
        return 'bg-connection-500';
      case 'reliable':
        return 'bg-reliable-500';
      default:
        return 'bg-connection-500';
    }
  }

}

export type BadgeColor = 'connection' | 'reliable';
