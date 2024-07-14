import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { BootAlert, Props } from "../../components/Alert";

const meta: Meta = {
	title: "Alert",
	component: BootAlert,
	argTypes: {
		children: {
			control: {
				type: "text",
			},
		},
	},
	parameters: {
		controls: { expanded: true },
		layout: "fullscreen",
		docs: {
			description: {
				component: "Our Alert component",
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {
	args: {
		variant: "primary",
		children:"test"
	},
};