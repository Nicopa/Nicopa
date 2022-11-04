import Head from "next/head";
import Desktop from "../components/desktop/Desktop";
import Image from "next/image";
import { useState } from "react";
import Shortcut from "../components/desktop/shortcut/Shortcut";
import ShortcutStack from "../components/desktop/shortcut/ShortcutStack";
import Modal from "../components/modal/Modal";
import profilePicture from "../public/nicolas.webp";
import project1ThumbnailSrc from "../public/project1_thumbnail.jpg";
import project2ThumbnailSrc from "../public/project2_thumbnail.jpg";
import project3ThumbnailSrc from "../public/project3_thumbnail.jpg";
import project4ThumbnailSrc from "../public/project4_thumbnail.jpg";
import ProjectTags from "../components/project/tags/ProjectTags";
import ProjectLinks from "../components/project/links/ProjectLinks";
import SkillStack from "../components/skill/SkillStack";
import SkillIcon from "../components/skill/SkillIcon";
import { BiMailSend } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { IoDocumentText } from "react-icons/io5";
import {
	SiTypescript,
	SiPython,
	SiNextdotjs,
	SiReact,
	SiAngular,
	SiCodeigniter,
	SiPhp,
	SiMysql,
	SiMongodb,
	SiSass,
	SiLinkedin,
	SiGithub,
} from "react-icons/si";
import styles from "./index.module.scss";

export default function Home() {
	const [openAboutMeModal, setOpenAboutMeModal] = useState<boolean>(false);
	const [openMyProjectsModal, setOpenMyProjectsModal] =
		useState<boolean>(false);
	const [openSkillsModal, setOpenSkillsModal] = useState<boolean>(false);
	const [openContactModal, setOpenContactModal] = useState<boolean>(false);
	return (
		<Desktop>
			<Head>
				<title>Nícolas Amarante | Software Developer | Homepage</title>
				<meta
					name="description"
					content="Hi! I'm a software developer and here you can find some of my projects, informations and contacts."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				></meta>
				<link rel="icon" href="./favicon.ico" />
			</Head>
			<main>
				<ShortcutStack>
					<Shortcut
						icon={<BsPersonFill size={36} />}
						label="About Me"
						onClick={() => setOpenAboutMeModal(true)}
					/>
					<Shortcut
						icon={<AiOutlineAppstore size={36} />}
						label="My Projects"
						onClick={() => setOpenMyProjectsModal(true)}
					/>
					<Shortcut
						icon={<GiSkills size={36} />}
						label="Skills"
						onClick={() => setOpenSkillsModal(true)}
					/>
					<Shortcut
						icon={<BiMailSend size={36} />}
						label="Contact"
						onClick={() => setOpenContactModal(true)}
					/>
					<Shortcut
						icon={<SiLinkedin size={36} />}
						label="LinkedIn"
						href="https://www.linkedin.com/in/nicopa/"
					/>
					<Shortcut
						icon={<SiGithub size={36} />}
						label="Github"
						href="https://github.com/Nicopa"
					/>
					<Shortcut
						icon={<IoDocumentText size={36} />}
						label="Resume"
						href="https://nicopa.github.io/Nicopa/resume"
					/>
				</ShortcutStack>
				<Modal
					open={openAboutMeModal}
					title="About me"
					onCloseClick={() => setOpenAboutMeModal(false)}
				>
					<Image
						src={profilePicture}
						alt="Nícolas Panazzolo do Amarante"
						placeholder="blur"
						className={styles["profile-img"]}
					/>
					<h3>Who I am</h3>
					<p>
						I&apos;m Nícolas (you can call me Nick) and I&apos;m a junior
						software developer. I&apos;m from{" "}
						<a
							href="https://goo.gl/maps/t97YgircM7rjYBGs7"
							target="_blank"
							rel="noreferrer"
						>
							Flores da Cunha, RS, Brazil
						</a>{" "}
						and I&apos;m 31 years old.
					</p>
					<h3>First work</h3>
					<p>
						I worked as a full stack PHP website developer from 2012 to 2016 in
						companies around my region. From the first project, I was always
						responsible for learning to code everything from the backend to the
						frontend. I&apos;ve worked with teams, as well as I&apos;ve been
						solely responsible for the development of applications.
					</p>
					<h3>Career transitions</h3>
					<p>
						After that, I tried a career transition to cooking because I learned
						how to make sushi and there were no restaurants in my town . From
						scratch I started as an apprentice sushiman and after two years I
						opened my own restaurant. But in October 2021, I didn&apos;t get the
						financial independence I was looking for, so I decided to go back to
						software coding which is my first passion.
					</p>
					<h3>Currently</h3>
					<p>
						Now, I&apos;m looking for the best projects and teams to work on.
						Finance or gaming projects might be the specialties I&apos;m most
						excited to get into, but I&apos;m always open to hearing about new
						ideas.
					</p>
				</Modal>
				<Modal
					open={openMyProjectsModal}
					title="My Projects"
					onCloseClick={() => setOpenMyProjectsModal(false)}
				>
					<h3>Featured Project: Asset Manager</h3>
					<Image
						src={project1ThumbnailSrc}
						alt="Asset Manager"
						className={styles["project-img"]}
					/>
					<p>
						This is my personal finance asset manager. Since I started investing
						in stocks, bonds, funds, and other assets, I&apos;ve been using
						spreadsheets to keep track of my investments. Now, with this app, I
						can control all my trades easier, faster and with better reports.
					</p>
					<ProjectTags
						techs={[
							"Typescript",
							"Clean Architecture",
							"TDD",
							"DDD",
							"Event Driven Architecture",
							"Finances",
							"SOLID",
							"API",
							"React",
							"Material UI | MUI",
							"MySQL",
							"MongoDB",
						]}
					/>
					<ProjectLinks github="https://github.com/Nicopa/financial-asset-manager" />
					<hr />
					<h3>Team Draft | Web App</h3>
					<Image
						src={project2ThumbnailSrc}
						alt="Team Draft | Web App"
						className={styles["project-img"]}
					/>
					<p>
						Sometimes you just need a quick way to split your friends into teams
						for the sports or games you like. And preferably without having to
						register for any services. So, here is the Team Draft!
					</p>
					<ProjectTags techs={["Typescript", "React", "Material UI | MUI"]} />
					<ProjectLinks github="https://github.com/Nicopa/team-draft-web" />
					<hr />
					<h3>SNES Bomberman 3 in Python</h3>
					<Image
						src={project3ThumbnailSrc}
						alt="SNES Bomberman 3 in Python"
						className={styles["project-img"]}
					/>
					<p>
						For the old SNES Bomberman fans, this is the battle mode of the SNES
						Bomberman 3 built with PyGame engine (Python).
					</p>
					<ProjectTags techs={["Python", "PyGame", "OOP"]} />
					<ProjectLinks github="https://github.com/Nicopa/snes-bomberman3-pygame" />
					<hr />
					<h3>Pokemon Memory Game in Angular</h3>
					<Image
						src={project4ThumbnailSrc}
						alt="Pokemon Memory Game in Angular"
						className={styles["project-img"]}
					/>
					<p>
						This is a pokemon memory game built in Angular, where instead of
						searching for equal cards, you have to find each evolution set of
						the first pokemon generation.
					</p>
					<ProjectTags techs={["Typescript", "Angular"]} />
					<ProjectLinks github="https://github.com/Nicopa/pokemon-memory-game" />
				</Modal>
				<Modal
					open={openSkillsModal}
					title="Skills"
					onCloseClick={() => setOpenSkillsModal(false)}
				>
					<SkillStack>
						<SkillIcon icon={<SiTypescript />} label="Typescript"></SkillIcon>
						<SkillIcon icon={<SiPython />} label="Python" />
						<SkillIcon icon={<SiPhp />} label="PHP" />
						<SkillIcon icon={<SiNextdotjs />} label="Next.js" />
						<SkillIcon icon={<SiReact />} label="React" />
						<SkillIcon icon={<SiAngular />} label="Angular" />
						<SkillIcon icon={<SiCodeigniter />} label="Codeigniter" />
						<SkillIcon icon={<SiMysql />} label="MySQL" />
						<SkillIcon icon={<SiMongodb />} label="MongoDB" />
						<SkillIcon icon={<SiSass />} label="SCSS/Sass" />
					</SkillStack>
				</Modal>
				<Modal
					open={openContactModal}
					title="Contact"
					onCloseClick={() => setOpenContactModal(false)}
				>
					<h3>Let&apos;s code?</h3>
					<p>
						I&apos;m currently looking for new teams, projects or ideas. You can
						call me and we might schedule a meeting to talk about any questions
						or my Although I&apos;m not currently looking for any new
						opportunities, my inbox is always open. Whether you have a question
						or just want to say hi, I&apos;ll try my best to get back to you!
					</p>
					<p style={{ textAlign: "center" }}>
						<a href="mailto:nicopa_rs@hotmail.com">SEND ME AN EMAIL</a>
					</p>
					<p>Or, you can send me a message on my LinkedIn:</p>
					<p style={{ textAlign: "center" }}>
						<a
							href="https://www.linkedin.com/in/nicopa/"
							target="_blank"
							rel="noreferrer"
						>
							<SiLinkedin size={28} />
						</a>
					</p>
				</Modal>
			</main>
		</Desktop>
	);
}
