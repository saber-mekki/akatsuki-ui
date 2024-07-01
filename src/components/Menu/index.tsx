import React, { useState, useEffect, CSSProperties } from "react";
import styled from "styled-components";
import "./menu.css";

export interface ButtonProps {
	primary?: boolean;
	backgroundColor?: string;
	size?: "small" | "medium" | "large";
	label?: string;
	borderRadius?: number;
	onClick?: () => void;
	paddingTop?:number
}

const StyledButton = styled.button<ButtonProps>`
	padding: ${({ size }) =>
		size === "large"
			? "15px 30px"
			: size === "small"
				? "5px 10px"
				: "10px 20px"};
	border: none;
	border-radius: ${({ borderRadius }) => `${borderRadius}px`};
	cursor: pointer;
	transition: background-color 0.3s;
	background-color: ${({ primary }) => (primary ? "blue" : "gray")};
	color: white;

	&:hover {
		background-color: ${({ primary }) => (primary ? "darkblue" : "darkgray")};
	}
`;

interface MenuItem {
	id: string;
	label: string;
	content: string;
}

const menuItems: MenuItem[] = [
	{ id: "section1", label: "Item 1", content: "Content for Item 1" },
	{ id: "section2", label: "Item 2", content: "Content for Item 2" },
	{ id: "section3", label: "Item 3", content: "Content for Item 3" },
	{ id: "section4", label: "Item 4", content: "Content for Item 4" },
	{ id: "section5", label: "Item 5", content: "Content for Item 5" },
	{ id: "section6", label: "Item 6", content: "Content for Item 6" },
];

const MenuContainer = styled.div<ButtonProps>`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;
	padding-top: ${({ paddingTop }) => `${paddingTop}px`};
	padding-bottom: ${({ paddingTop }) => `${paddingTop}px`};
`;

const MenuToggle = styled(StyledButton)`
	z-index: 10;
`;

const MenuItems = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const MenuItemButton = styled.button<{
	borderColor: string;
	backgroundColor: string;
}>`
	width: 50px;
	height: 50px;
	background-color: ${({ backgroundColor }) => backgroundColor};
	color: white;
	border: 2px solid ${({ borderColor }) => borderColor};
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	position: absolute;

	&:hover {
		background-color: ${({ backgroundColor }) => backgroundColor};
		opacity: 0.8;
	}
`;

export const FlexMenu: React.FC<ButtonProps> = ({
	primary = false,
	size = "medium",
	backgroundColor,
	label,
	borderRadius = 20,
	paddingTop=150,
	...props
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [borderColors, setBorderColors] = useState<string[]>([]);
	const [backgroundColors, setBackgroundColors] = useState<string[]>([]);

	useEffect(() => {
		const colors = Array.from({ length: menuItems.length }, getRandomColor);
		const backColors = Array.from({ length: menuItems.length }, getRandomColor);

		setBorderColors(colors);
		setBackgroundColors(backColors);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const getRandomColor = (): string => {
		const letters = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	};

	const getMenuItemStyle = (index: number): CSSProperties => {
		const angle = (index / menuItems.length) * 2 * Math.PI;
		const radius = 120; // Increased radius for larger circle
		const x = radius * Math.cos(angle);
		const y = radius * Math.sin(angle);
		return {
			transform: `translate(${x}px, ${y}px)`,
		};
	};

	return (
		<MenuContainer
			onMouseEnter={toggleMenu}
			onMouseLeave={toggleMenu}
			paddingTop={paddingTop}
		>
			<MenuToggle
				primary={primary}
				size={size}
				borderRadius={borderRadius}
				{...props}
			>
				{label}
			</MenuToggle>
			{isMenuOpen && (
				<MenuItems>
					{menuItems.map((item, index) => (
						<MenuItemButton
							key={item.id}
							style={getMenuItemStyle(index)}
							borderColor={borderColors[index]}
							backgroundColor={backgroundColors[index]}
						>
							{item.label}
						</MenuItemButton>
					))}
				</MenuItems>
			)}
		</MenuContainer>
	);
};
