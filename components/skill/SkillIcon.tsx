import { ReactNode } from "react";
import styles from "./SkillIcon.module.scss";

type SkillIconProps = {
	icon: ReactNode;
	label: string;
};
export default function SkillIcon({ icon, label }: SkillIconProps) {
	return (
		<div className={styles.root}>
			<div className={styles.icon}>{icon}</div>
			<div className={styles.label}>{label}</div>
		</div>
	);
}
