import { MouseEventHandler, ReactNode } from "react";
import styles from "./Shortcut.module.scss";
type ShortcutProps = {
	icon: ReactNode | string;
	label: string;
	onClick?: MouseEventHandler<HTMLDivElement>;
	href?: string;
};
export default function Shortcut({
	icon,
	label,
	onClick,
	href,
}: ShortcutProps) {
	if (href)
		return (
			<a href={href} target="_blank" rel="noreferrer">
				<div className={styles.root}>
					<div className={styles.icon}>{icon}</div>
					<div className={styles.label}>{label}</div>
				</div>
			</a>
		);
	return (
		<div className={styles.root} onClick={onClick}>
			<div className={styles.icon}>{icon}</div>
			<div className={styles.label}>{label}</div>
		</div>
	);
}
