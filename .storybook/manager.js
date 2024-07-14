import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";


const myTheme = create({
	base: "light",
	brandTitle: "Akatsuki UI guid",
	brandUrl: "https://saber-mekki.github.io/akatsuki-ui",
	brandImage: "https://saber-mekki.github.io/akatsuki-ui/uu-.png", // URL to your logo image
});

addons.setConfig({
	theme: myTheme,
});

