import { ReactNode } from "react";
import ResumeHead, { ResumeHeadProps } from "./ResumeHead";
import Image from "next/image";
import styles from "./ResumeLayout.module.scss";
import ResumePersonalInfo, {
	ResumePersonalInfoProps,
} from "./ResumePersonalInfo";

type ResumeLayoutProps = {
	head: ResumeHeadProps;
	personalInfo: ResumePersonalInfoProps;
	children: ReactNode;
};
export default function ResumeLayout({
	head,
	personalInfo,
	children,
}: ResumeLayoutProps) {
	return (
		<main className={styles.root}>
			<ResumeHead {...head} />
			<div className={styles.container}>
				<div className={styles.sidebox}>
					{personalInfo.profilePicture && (
						<div className={styles["profile-picture"]}>
							<Image
								src={personalInfo.profilePicture}
								alt={personalInfo.fullname}
								placeholder="blur"
								className={styles["profile-img"]}
							/>
						</div>
					)}
				</div>
				<div className={styles.content}>
					<ResumePersonalInfo {...personalInfo} />
					{children}
				</div>
			</div>
		</main>
	);
}
