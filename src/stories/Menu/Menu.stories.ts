import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "../../index";

const meta: Meta<typeof Menu> = {
	title: "Example/Menu",
	component: Menu,
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component: "Our Menu component",
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		primary: true,
		label: "Primary Menu",
		size: "medium",
		borderRadius: 20,
	},
};

export const Secondary: Story = {
	args: {
		primary: false,
		label: "Secondary Menu",
		size: "medium",
		borderRadius: 20,
	},
};

export const Large: Story = {
	args: {
		primary: true,
		label: "Large Menu",
		size: "large",
		borderRadius: 20,
	},
};

export const Small: Story = {
	args: {
		primary: true,
		label: "Small Menu",
		size: "small",
		borderRadius: 20,
	},
};
