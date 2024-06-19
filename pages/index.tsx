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
import { BsPersonFill, BsFillBookmarksFill /* BsAwardFill */ } from "react-icons/bs";
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
	SiNestjs,
	SiNodedotjs,
	SiDocker,
} from "react-icons/si";
import styles from "./index.module.scss";
import Dialog from "../components/dialog/Dialog";

export default function Home() {
	const [openAboutMeModal, setOpenAboutMeModal] = useState<boolean>(false);
	const [openExperienceModal, setOpenExperienceModal] = useState<boolean>(false);
	const [openMyProjectsModal, setOpenMyProjectsModal] =
		useState<boolean>(false);
	const [openSkillsModal, setOpenSkillsModal] = useState<boolean>(false);
	const [openContactModal, setOpenContactModal] = useState<boolean>(false);
	const [openResumeDialog, setOpenResumeDialog] = useState<boolean>(false);
	return (
		<Desktop>
			<Head>
				<title>Nícolas Amarante | Software Engineer | Homepage</title>
				<meta
					name="description"
					content="Hi! I'm a software engineer and here you can find some of my projects, informations and contacts."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				></meta>
				<link rel="icon" href="./favicon.ico" />
			</Head>
			<style jsx global>
				{`
					html:before {
						content: "";
						background-color: #282828;
						background-image: url("loading.svg");
						background-repeat: no-repeat;
						background-position: center;
						position: absolute;
						z-index: 1000;
						top: 0;
						left: 0;
						width: 100vw;
						height: 100vh;
						overflow: hidden;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					html.loaded:before {
						animation-name: loading;
						animation-duration: 2s;
						animation-iteration-count: 1;
						background-image: none;
					}
					@keyframes loading {
						0% {
							opacity: 1;
						}
						99% {
							opacity: 0;
						}
						100% {
							content: none;
							display: none;
						}
					}
				`}
			</style>
			<main className={styles.root}>
				<ShortcutStack>
					<Shortcut
						icon={<BsPersonFill size={36} />}
						label="About Me"
						onClick={() => setOpenAboutMeModal(true)}
					/>
					<Shortcut
						icon={<BsFillBookmarksFill size={36} />}
						label="Experience"
						onClick={() => setOpenExperienceModal(true)}
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
						onClick={() => setOpenResumeDialog(true)}
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
						I&apos;m Nícolas (you can call me Nick) and I&apos;m a remote
						software engineer. I&apos;m from{" "}
						<a
							href="https://goo.gl/maps/t97YgircM7rjYBGs7"
							target="_blank"
							rel="noreferrer"
						>
							Flores da Cunha, RS, Brazil
						</a>{" "}
						and I&apos;m {new Date().getFullYear() - 1991} years old.
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
						I'm passionate about building scalable applications that aim at sustainability and innovation.
					</p>
					<h3>Stacks</h3>
					<p>
						In the backend, my main experience is with Node.js with Typescript, specially with NestJS framework, and I have experience with PHP and Codeigniter framework. In the frontend, I use React and/or Angular, and I have experience with Next.js. I also have experience with databases such as MySQL, Postgres and MongoDB.
					</p>
					<h3>Routine</h3>
					<p>
						My typical workday involves starting off with a simple breakfast while catching up on the latest updates from my team and browsing through some daily news. Following that, I prioritize tasks for the day to ensure that I can tackle the most important ones during my peak productivity time in the morning.<br />
						Once the main task of the day is accomplished, I typically spend my afternoons reviewing my team's code and participating in video call meetings to keep up with the team's roadmap.
					</p>
				</Modal>
				<Modal
					open={openExperienceModal}
					title="Experience"
					onCloseClick={() => setOpenExperienceModal(false)}
				>
					<h3>Experience</h3>
					<h4>Backend Software Engineer - Void.gg | Dec 2022 - May 2024</h4>
					<p>I specialized in developing and maintaining backend services for game statistics tracker APIs, specially for Valorant. Utilizing technologies such as <b>NestJS (Node.js and Typescript)</b>, alongside the Riot API, I ensured high performance and responsiveness for the APIs. A key achievement was successfully refactoring our applications in order to support different infrastructures through required migrations and reducing database costs. Other stacks used were <b>Docker</b>, <b>Kafka</b> (microservices), <b>Redis</b>, <b>BullMQ</b>, <b>AWS</b> and <b>Python</b> for small scripts. I worked collaboratively within a team of remote developers, providing suggestions, testing support and application reviews.</p>
					<h4>Full Stack Software Engineer - Coopertec Soluções | Jan 2022 - Nov 2022 (11 months)</h4>
					<p>I managed to code and maintain very different web applications. I developed and fixed features for a logistics client that required using <b>legacy PHP (version 4)</b> and <b>CodeIgniter</b>. I also worked using <b>Angular</b> and <b>Next.js/React (Typescript)</b> in frontend projects for other clients.</p>
					<h4>Full Stack Software Engineer - Agência Orin | Jun 2014 - Mar 2016 (1 year, 10 months)</h4>
					<p>
						I was the backend and frontend lead. I was responsible for building web pages using (<b>PHP</b>) and jQuery.
						Working with a small team allowed me to learn a little about everything that a project involves (design, SEO, brainstorms, etc) and help and give suggestions about the team's work process and projects.
						One of the projects I worked on was a new CMS for the company, allowing to fastly create the backend for new projects.
					</p>
					<h4>Full Stack Software Engineer - BF2 Tecnologia | Dec 2012 - Dec 2013 (1 year, 1 months)</h4>
					<p>I started by doing some front pages using jQuery and pure <b>HTML/CSS</b> and managed to be a full stack engineer after a few months. I worked with a team of 5 developers, mainly with <b>PHP</b> as backend language.</p>
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
						can control all my trades easier, faster and with custom reports.
					</p>
					<ProjectTags
						techs={[
							"Typescript",
							"Finances",
							"React",
							"Material UI | MUI",
							"MySQL",
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
					<ProjectLinks
						github="https://github.com/Nicopa/team-draft-web"
						app="https://team-draft.netlify.app/"
					/>
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
					<ProjectLinks app="/pokemon" />
					{/* <ProjectLinks github="https://github.com/Nicopa/pokemon-memory-game" /> */}
				</Modal>
				<Modal
					open={openSkillsModal}
					title="Skills"
					onCloseClick={() => setOpenSkillsModal(false)}
				>
					<SkillStack>
						<SkillIcon icon={<SiTypescript title="Typescript" />} label="Typescript"></SkillIcon>
						<SkillIcon icon={<SiNestjs title="Nest.js" />} label="Nest.js" />
						<SkillIcon icon={<SiNodedotjs title="Node.js" />} label="Node.js" />
						<SkillIcon icon={<SiNextdotjs title="Next.js" />} label="Next.js" />
						<SkillIcon icon={<SiReact title="React" />} label="React" />
						<SkillIcon icon={<SiAngular title="Angular" />} label="Angular" />
						<SkillIcon icon={<SiDocker title="Docker" />} label="Docker" />
						<SkillIcon icon={<SiPython title="Python" />} label="Python" />
						<SkillIcon icon={<SiPhp title="PHP" />} label="PHP" />
						<SkillIcon icon={<SiCodeigniter title="Codeigniter" />} label="Codeigniter" />
						<SkillIcon icon={<SiMysql title="MySQL" />} label="MySQL" />
						<SkillIcon icon={<SiMongodb title="MongoDB" />} label="MongoDB" />
						<SkillIcon icon={<SiSass title="SCSS/Sass" />} label="SCSS/Sass" />
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
				<Dialog
					open={openResumeDialog}
					onCloseClick={() => setOpenResumeDialog(false)}
				>
					<a
						href="resume"
						target="_blank"
						rel="noreferrer"
						onClick={() => setOpenResumeDialog(false)}
						className={styles["resume-link"]}
					>
						English resume
					</a>
					<a
						href="resume-br"
						target="_blank"
						rel="noreferrer"
						onClick={() => setOpenResumeDialog(false)}
						className={styles["resume-link"]}
					>
						Portuguese(BR) resume
					</a>
				</Dialog>
			</main>
		</Desktop>
	);
}
