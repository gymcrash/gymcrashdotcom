import { Meta, Story } from "@storybook/angular";
import { PanelComponent } from "../app/gymcrash-components/panel/panel.component";

export default {
    title: 'Panel',
    component: PanelComponent,
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;
  
  // More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
  const Template: Story<PanelComponent> = (args: PanelComponent) => ({
    props: args,
  });

  export const DefaultPanel = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
DefaultPanel.args = {
};