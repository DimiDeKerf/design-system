import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'my-icon',
  styleUrl: 'my-icon.css',
  shadow: true,
})
export class MyIcon {

  @Prop() icon: string;

  @Watch('icon')
	protected onIconChange(): void {
		this.loadIcon();
	}

  @State() private svgContent = '';

  componentWillLoad(): void {
		this.loadIcon();
	}

  render() {
    return (
      <div innerHTML={this.svgContent} class="h-16 w-16"></div>
    );
  }

  private async loadIcon() {
    if (this.icon == null) {
      return;
    }

    const result = await fetch(`/assets/images/${this.icon}.svg`);
    if (result.status <= 299) {
      this.svgContent = await result.text();
    }
  }
}
