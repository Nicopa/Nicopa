import { BsGithub } from "react-icons/bs";
import { MdOutlineOpenInNew } from "react-icons/md";
import styles from "./ProjectLinks.module.scss";

type ProjectLinksProps = {
	github?: string;
	app?: string;
	link?: string;
};
export default function ProjectLinks({ github, app, link }: ProjectLinksProps) {
	return (
		<div className={styles.root}>
			{github && (
				<a
					href={github}
					target="_blank"
					rel="noreferrer"
					title="GitHub project repository"
				>
					<BsGithub size={24} />
				</a>
			)}
			{link && (
				<a
					href={link}
					target="_blank"
					rel="noreferrer"
				>
					<MdOutlineOpenInNew size={24} />
				</a>
			)}
			{app && (
				<a href={app} target="_blank" rel="noreferrer" title="Live app">
					<MdOutlineOpenInNew size={24} />
				</a>
			)}
		</div>
	);
}
