import { MouseEventHandler, ReactNode } from "react";
import styles from "./Dialog.module.scss";

type DialogProps = {
	children: ReactNode;
	open: boolean;
	title?: string;
	onCloseClick?: MouseEventHandler<HTMLSpanElement>;
};
export default function Dialog({
	children,
	open,
	title,
	onCloseClick,
}: DialogProps) {
	return (
		<div className={`${styles.root}${open ? " " + styles.open : ""}`}>
			<div className={styles.header}>
				<span className={styles.close} onClick={onCloseClick}>
					Close [x]
				</span>
				{title && <h2 className={styles.title}>{title}</h2>}
			</div>
			<div className={styles.content}>{children}</div>
		</div>
	);
}
