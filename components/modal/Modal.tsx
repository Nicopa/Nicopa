import { MouseEventHandler, ReactNode } from "react";
import styles from "./Modal.module.scss";

type ModalProps = {
	children: ReactNode;
	open: boolean;
	title?: string;
	onCloseClick?: MouseEventHandler<HTMLSpanElement>;
};
export default function Modal({
	children,
	open,
	title,
	onCloseClick,
}: ModalProps) {
	return (
		<div className={`${styles.root}${open ? " " + styles.open : ""}`}>
			<div className={styles["animation-mask"]}></div>
			{title && (
				<div className={styles.header}>
					<span className={styles.close} onClick={onCloseClick}>
						Close [x]
					</span>
					<h2 className={styles.title}>{title}</h2>
				</div>
			)}
			<div className={styles.content}>{children}</div>
		</div>
	);
}
