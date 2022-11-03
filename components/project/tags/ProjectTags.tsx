import styles from "./ProjectTags.module.scss";

type ProjectTagsProps = {
	techs: string[];
};
export default function ProjectTags({ techs }: ProjectTagsProps) {
	return (
		<ul className={styles.root}>
			{techs.map((tech, index) => (
				<li key={index} className={styles.item}>
					{tech}
				</li>
			))}
		</ul>
	);
}
