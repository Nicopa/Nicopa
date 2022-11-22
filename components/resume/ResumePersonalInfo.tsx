import { StaticImageData } from "next/image";
import { FiMail } from "react-icons/fi";
import { SiLinkedin, SiGithub } from "react-icons/si";
import styles from "./ResumePersonalInfo.module.scss";

export type ResumePersonalInfoProps = {
	fullname: string;
	age: string;
	email: string;
	linkedinURL: string;
	linkedinShort: string;
	githubURL: string;
	githubShort: string;
	address: string;
	profilePicture?: StaticImageData;
};
export default function ResumePersonalInfo({
	fullname,
	age,
	email,
	linkedinURL,
	linkedinShort,
	githubURL,
	githubShort,
	address,
}: ResumePersonalInfoProps) {
	return (
		<section className={styles["personal-info-box"]}>
			<h1>{fullname}</h1>
			<p>{age.toString()}</p>
			<p>
				<a href={`mailto:${email}`}>
					<FiMail />
					&nbsp;{email}
				</a>
				<br />
				<a href={linkedinURL} target="_blank" rel="noreferrer">
					<SiLinkedin />
					&nbsp;{linkedinShort}
				</a>
				<br />
				<a href={githubURL} target="_blank" rel="noreferrer">
					<SiGithub />
					&nbsp;{githubShort}
				</a>
			</p>
			<address>{address}</address>
		</section>
	);
}
