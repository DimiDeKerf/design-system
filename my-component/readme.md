# My component

## Prerequisites

Install the node dependencies by running `npm install` in the exercise folder.

## Goal

Create a new custom `button` component based on the [Figma design found here](https://www.figma.com/file/MKc4hOmD17vdtKYKJuaYWF/BDSA---Demo?node-id=8%3A2).
The button can optionally consist of another `icon` component. The components should be built by making use of the tools provided by [StencilJS](https://stenciljs.com/). Make sure to cover all the different states of the button.

Use the inspection tools provided by Figma to gather the layout requirements for each component. You can make use of [TailwindCSS](https://tailwindcss.com/) to aid you in styling the components. The design tokens are already converted into the variables used by Tailwind.

After the component is built, provide a documentation page inside Storybook. Make sure to include a few Stories showcasing the different states of the button.

## Stencil

You can spin up the local dev server provided by Stencil by running `npm start` inside the exercise folder. The server is accessible on [http://localhost:3333/](http://localhost:3333/).

## Storybook

Storybook can help you to run your fresh components in an isolated environment. Run `npm run storybook` inside the exercise folder. Storybook is locally accessible on [http://localhost:6006/](http://localhost:6006/). Be sure to build your components first with `npm run build`. 