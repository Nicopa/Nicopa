import { ReactNode } from "react";
import styles from "./SkillStack.module.scss";

type SkillStackProps = {
	children: ReactNode;
};
export default function SkillStack({ children }: SkillStackProps) {
	return <div className={styles.root}>{children}</div>;
}
