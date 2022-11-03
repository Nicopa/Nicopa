import styles from "./ToolBar.module.scss";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { MouseEventHandler } from "react";

type ToolBarProps = {
	theme: "dark" | "light";
	themeModeOnClick?: MouseEventHandler<HTMLSpanElement>;
};
export default function ToolBar({ theme, themeModeOnClick }: ToolBarProps) {
	return (
		<div className={styles.root}>
			<span className={styles.button} onClick={themeModeOnClick}>
				{theme == "dark" ? (
					<MdOutlineLightMode size={24} />
				) : (
					<MdOutlineDarkMode size={24} />
				)}
			</span>
		</div>
	);
}
