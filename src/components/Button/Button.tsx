import React from "react";
import "./button.css";
import styled from "styled-components";

interface ButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean;
	/**
	 * What background color to use
	 */
	backgroundColor?: string;
	/**
	 * How large should the button be?
	 */
	size?: "small" | "medium" | "large";
	/**
	 * Button contents
	 */
	label?: string;
	borderRadius?: number;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
	padding: 10px 20px;
	border: none;
	border-radius: ${({ borderRadius }) => `${borderRadius}px` };
	cursor: pointer;
	transition: background-color 0.3s;
	background-color: ${({ primary }) => (primary ? "blue" : "gray")};
	color: white;

	&:hover {
		background-color: ${({ primary }) => (primary ? "darkblue" : "darkgray")};
	}
`;

/**
 * FlexButton
 */
export const FlexButton = ({
	primary = false,
	size = "medium",
	backgroundColor,
	label,
	borderRadius = 20,
	...props
}: ButtonProps) => {
	const mode = primary
		? "storybook-button--primary"
		: "storybook-button--secondary";
	return (
		<div>
			<StyledButton
				{...props}
				borderRadius={borderRadius}
				style={{ backgroundColor }}
				primary={primary}
				className={["storybook-button", `storybook-button--${size}`, mode].join(
					" "
				)}
			>
				{label}
			</StyledButton>
		</div>
	);
};
