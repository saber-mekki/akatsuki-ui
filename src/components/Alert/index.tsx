import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type Variant =
	| "primary"
	| "secondary"
	| "info"
	| "light"
	| "dark"
	| "danger"
	| "success"
	| "warning";

export type Props = {
	variant: Variant;
	children: React.ReactNode;  
};

export function BootAlert({ variant, children }: Props) {
	const [showAlert, setShowAlert] = React.useState<boolean>(true);

	return !showAlert ? null : (
		<div
			className={`alert alert-${
				variant === undefined ? `success` : variant
			} alert-dismissible fade show`}
			role="alert"
		>
			{children}
			<button
				type="button"
				className="close"
				data-dismiss="alert"
				aria-label="Close"
				onClick={() => {
					setShowAlert(false);
				}}
			>
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	);
}
