import React from "react";
import { ReactNode } from "react";

type ResumeSectionProps = {
	children?: ReactNode;
	className?: string;
};
export default function ResumeSection({
	children,
	className,
}: ResumeSectionProps) {
	return <section className={className}>{children}</section>;
}
