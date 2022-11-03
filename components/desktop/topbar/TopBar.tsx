import { useState } from "react";
import styles from "./TopBar.module.scss";
function Clock() {
	const [time, setTime] = useState<Date>(new Date());
	setTimeout(() => setTime(new Date()), 3500);
	return (
		<span>
			{time.getHours().toString().padStart(2, "0")}:
			{time.getMinutes().toString().padStart(2, "0")}
		</span>
	);
}

export default function TopBar() {
	return (
		<div className={styles.root}>
			<span className={styles.name}>Nícolas Amarante - Software Developer</span>
			<Clock />
		</div>
	);
}
