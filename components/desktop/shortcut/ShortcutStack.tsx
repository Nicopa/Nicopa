import { ReactNode } from "react";
import styles from "./ShortcutStack.module.scss";
type ShortcutStack = {
	children: ReactNode;
};
export default function ShortcutStack({ children }: ShortcutStack) {
	return <div className={styles.root}>{children}</div>;
}
