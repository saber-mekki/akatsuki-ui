import React from "react";
import styled from "styled-components";

/**
 * Button component for Storybook
 *
 * @component
 * @example
 * const label = 'Button'
 * return (
 *   <Button label={label} />
 * )
 */
interface ButtonProps {
	primary?: boolean;
	backgroundColor?: string;
	size?: "small" | "medium" | "large";
	label?: string;
	borderRadius?: number;
	onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
	font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-weight: 700;
	border: 0;
	border-radius: 3em;
	cursor: pointer;
	display: inline-block;
	line-height: 1;
	padding: 10px 20px;
	border: none;
	border-radius: ${({ borderRadius }) => `${borderRadius}px`};
	cursor: pointer;
	transition: background-color 0.3s;
	background-color: ${({ primary }) => (primary ? "blue" : "gray")};
	color: ${({ primary }) => (primary ? "white" : "#333")};
	background-color: ${({ primary }) => (primary ? "#1ea7fd" : "transparent")};
	box-shadow: ${({ primary }) =>
		primary ? "" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;"};
	&:hover {
		background-color: ${({ primary }) => (primary ? "darkblue" : "darkgray")};
	}
	padding: ${({ size }) =>
		{
			console.log({ cc:size });
			return size === "small"
			? "10px 16px"
			: size === "medium"
				? "11px 20px"
				: "12px 24px"}};
	font-size: ${({ size }) =>
		size === "small" ? "12px" : size === "medium" ? "14px" : "16px"};
`;

export const Button = ({
	primary = false,
	size = "small",
	backgroundColor,
	label,
	borderRadius = 20,
	...props
}: ButtonProps) => {

	return (
		<div>
			<StyledButton
				{...props}
				size={size}
				borderRadius={borderRadius}
				style={{ backgroundColor }}
				primary={primary}
			>
				{label}
			</StyledButton>
		</div>
	);
};
