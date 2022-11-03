import { BsGithub } from "react-icons/bs";
import styles from "./ProjectLinks.module.scss";

type ProjectLinksProps = {
	github?: string;
};
export default function ProjectLinks({ github }: ProjectLinksProps) {
	return (
		<div className={styles.root}>
			{github && (
				<a href={github} target="_blank" rel="noreferrer">
					<BsGithub size={24} />
				</a>
			)}
		</div>
	);
}
