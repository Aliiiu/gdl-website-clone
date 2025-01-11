"use client";
import { Link as ScrollLink, type LinkProps } from "react-scroll";
import type { ReactNode } from "react";
import { forwardRef } from "react";

interface CustomScrollLinkProps extends Omit<LinkProps, "to"> {
	to: string;
	children: ReactNode;
}

const CustomScrollLink = forwardRef<HTMLButtonElement, CustomScrollLinkProps>(
	({ to, children, ...props }, ref) => {
		return (
			<ScrollLink to={to} smooth={true} {...props}>
				{children}
			</ScrollLink>
		);
	},
);

CustomScrollLink.displayName = "CustomScrollLink";

export default CustomScrollLink;
