import { ReactNode, useState } from "react";
import styles from "./Desktop.module.scss";
import ToolBar from "./toolbar/ToolBar";
import TopBar from "./topbar/TopBar";
type DesktopProps = {
	children: ReactNode;
};
export default function Desktop({ children }: DesktopProps) {
	const [theme, setTheme] = useState<"light" | "dark">("dark");
	const handleThemeModeOnClick = () => {
		if (theme === "light") setTheme("dark");
		else setTheme("light");
	};
	return (
		<div
			className={`${styles.root} ${theme}-theme`}
			style={{ cursor: "url(GhostlyArrow.cur), auto" }}
		>
			<div
				className={styles.background}
				style={{ backgroundImage: "url(background1.svg)" }}
			></div>
			<div className={styles.content}>
				<TopBar />
				<div>{children}</div>
				<ToolBar theme={theme} themeModeOnClick={handleThemeModeOnClick} />
			</div>
		</div>
	);
}
