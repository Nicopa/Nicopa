import styles from "./resume.module.scss";
import SkillStack from "../components/skill/SkillStack";
import SkillIcon from "../components/skill/SkillIcon";
import {
	SiTypescript,
	SiNodedotjs,
	SiPython,
	SiNextdotjs,
	SiReact,
	SiAngular,
	SiCodeigniter,
	SiPhp,
	SiMysql,
	SiMongodb,
	SiSass,
	SiNestjs,
	SiPostgresql,
	SiDocker,
	SiOpenai,
	SiGithub
} from "react-icons/si";
import { AiOutlineLink } from "react-icons/ai";
import ResumeLayout from "../components/resume/ResumeLayout";
import ResumeSection from "../components/resume/ResumeSection";
import profilePicture from "../public/nicolas.webp";

export default function Resume() {
	return (
		<ResumeLayout
			head={{
				title: "Nicholas Amarante | Software Engineer | Resume",
				description:
					"Hi! I'm a remote software engineer and this is my complete resume.",
			}}
			personalInfo={{
				fullname: "Nicholas Panazzolo Amarante",
				age: "34 years old",
				email: "nicopa_rs@hotmail.com",
				linkedinURL: "https://www.linkedin.com/in/nicopa/",
				linkedinShort: "linkedin.com/in/nicopa/",
				githubURL: "https://nicopa.github.io/Nicopa",
				githubShort: "nicopa.github.io/Nicopa",
				address: "Flores da Cunha, RS, Brazil",
				profilePicture,
			}}
		>
			<ResumeSection>
				<h2>Summary</h2>
				<p>I'm a remote full-stack software engineer with over six years of experience building end-to-end web applications. Passionate about scalable and innovative solutions, I specialize in backend development with <b>Node.js (TypeScript)</b>, particularly using the <b>NestJS framework</b>, and have experience with <b>PHP (CodeIgniter)</b> and <b>Python (Django)</b>.</p>
				<p>On the frontend, I work with <b>React</b>, <b>Angular</b>, and <b>Next.js</b>, delivering dynamic and efficient user experiences. My database expertise includes <b>MySQL</b>, <b>PostgreSQL</b>, and <b>MongoDB</b>.</p>
				<p>I'm comfortable working asynchronously in global teams and have experience with time-tracking tools like <b>Toptal</b> and <b>Time Doctor</b> when required.</p>
			</ResumeSection>
			<ResumeSection>
				<h2>Experience</h2>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Full Stack Software Engineer</div>
					<div className={styles.place}>ElectroNeek</div>
					<div className={styles.period}>Jul 2024 - Present</div>
					<p className={styles.description}>
						I maintain and develop new features for the company platform, both on the frontend and backend.
						Utilizing technologies such as <b>NestJS</b>, <b>Typescript</b>, <b>NodeJS</b>, <b>Angular</b>, <b>OpenAI</b>, <b>Google OCR</b>, <b>Docker</b>, <b>Kafka</b>, <b>MongoDB</b>, <b>Redis</b>, and <b>Electron</b>, I ensure the platform's robustness and scalability.
						A significant achievement was the complete refactor of a document recognition tool that converts PDFs and images to JSON with high accuracy, leveraging prompt engineering and tool binding.
						I collaborate on code reviews, bug troubleshooting, best practices discussions, and brainstorms. The company focuses on Robotic Process Automation, guided by Kanban methodology, with AI features and tools being the core business.
					</p>
				</div>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Backend Software Engineer</div>
					<div className={styles.place}>Void.gg</div>
					<div className={styles.period}>Dec 2022 - May 2024</div>
					<p className={styles.description}>
						I specialized in developing and maintaining backend services for game statistics tracker APIs, mainly focused on Valorant.
						Utilizing technologies such as <b>NestJS (Node.js and Typescript)</b>, alongside the Riot API, I ensured high performance and responsiveness for the APIs.
						A key achievement was successfully refactoring the company backend applications in order to support different infrastructures through required migrations and reducing database costs.
						Other stacks used were <b>Docker</b>, <b>Kafka</b> (microservices), <b>Redis</b>, <b>BullMQ</b>, <b>AWS</b> and <b>Python</b> for small scripts.
						I worked collaboratively within a team of remote developers, providing suggestions, testing support and application reviews.
					</p>
				</div>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Full Stack Software Engineer</div>
					<div className={styles.place}>Coopertec Soluções</div>
					<div className={styles.period}>Jan 2022 - Nov 2022 (11 months)</div>
					<p className={styles.description}>
						I managed to code and maintain very different web applications. I developed and fixed features for a logistics client that required using <b>legacy PHP (version 4)</b> and <b>CodeIgniter</b>. I also worked using <b>Angular</b> and <b>Next.js/React (Typescript)</b> in frontend projects for other clients.
					</p>
				</div>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Full Stack Software Engineer</div>
					<div className={styles.place}>
						Agência Orin - Flores da Cunha, RS, Brazil
					</div>
					<div className={styles.period}>
						Jun 2014 - Mar 2016 (1 year, 10 months)
					</div>
					<p className={styles.description}>
						I was the backend and frontend lead. I was responsible for building web pages using (<b>PHP</b>) and jQuery.
						Working with a small team allowed me to learn a little about everything that a project involves (design, SEO, brainstorms, etc) and help and give suggestions about the team's work process and projects.
						One of the projects I worked on was a new CMS for the company, allowing to fastly create the backend for new projects.
					</p>
				</div>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Full Stack Software Engineer</div>
					<div className={styles.place}>
						BF2 Tecnologia - Caxias do Sul, RS, Brazil
					</div>
					<div className={styles.period}>
						Dec 2012 - Dec 2013 (1 year, 1 months)
					</div>
					<p className={styles.description}>
						I started by doing some front pages using jQuery and pure <b>HTML/CSS</b> and managed to be a full stack engineer after a few months. I worked with a team of 5 developers, mainly with <b>PHP</b> as backend language.
					</p>
				</div>
			</ResumeSection>
			<ResumeSection>
				<h2>Skills</h2>
				<p>
					These are some of the technologies that I managed to make at least one
					application:
				</p>
				<SkillStack>
					<SkillIcon
						icon={<SiTypescript title="Typescript" />}
						label="Typescript"
					></SkillIcon>
					<SkillIcon icon={<SiNestjs title="Nest.js" />} label="Nest.js" />
					<SkillIcon icon={<SiNodedotjs title="Node.js" />} label="Node.js" />
					<SkillIcon icon={<SiNextdotjs title="Next.js" />} label="Next.js" />
					<SkillIcon icon={<SiReact title="React" />} label="React" />
					<SkillIcon icon={<SiAngular title="Angular" />} label="Angular" />
					<SkillIcon icon={<SiDocker title="Docker" />} label="Docker" />
					<SkillIcon icon={<SiPython title="Python" />} label="Python" />
					<SkillIcon icon={<SiPhp title="PHP" />} label="PHP" />
					<SkillIcon
						icon={<SiCodeigniter title="Codeigniter" />}
						label="Codeigniter"
					/>
					<SkillIcon icon={<SiPostgresql title="Postgres" />} label="Postgres" />
					<SkillIcon icon={<SiMysql title="MySQL" />} label="MySQL" />
					<SkillIcon icon={<SiMongodb title="MongoDB" />} label="MongoDB" />
					<SkillIcon icon={<SiSass title="SCSS/Sass" />} label="SCSS/Sass" />
					<SkillIcon icon={<SiOpenai title="OpenAI" />} label="OpenAI" />
					<SkillIcon icon={<SiGithub title="Github" />} label="Github" />
				</SkillStack>
			</ResumeSection>
			<ResumeSection className={styles.projects}>
				<h2>Personal projects</h2>
				<div className={styles.stack}>
					<div className={styles.project}>
						<div className={styles.title}>
							Financial Asset Manager
							<span className={styles.link}>
								<AiOutlineLink />
								<a href="https://nicopa.github.io/Nicopa/">
									nicopa.github.io/Nicopa/
								</a>
							</span>
						</div>
						<p className={styles.description}>
							This is my personal finance asset manager. Since I started
							investing in stocks, bonds, funds, and other assets, I've been
							using spreadsheets to keep track of my investments. Now, with this
							app, I can control all my trades easier, faster and with custom
							reports.
						</p>
						<div className={styles.techs}>
							Typescript, Clean Architecture, TDD, DDD, Event Driven
							Architecture, Finances, SOLID, API, React, Material UI MUI, MySQL,
							MongoDB
						</div>
					</div>
					<div className={styles.project}>
						<div className={styles.title}>
							Team Draft - Web App version
							<span className={styles.link}>
								<AiOutlineLink />
								<a href="https://team-draft.netlify.app/">
									team-draft.netlify.app
								</a>
							</span>
						</div>
						<p className={styles.description}>
							Sometimes you just need a quick way to split your friends into
							teams for the sports or games you like. And preferably without
							having to register for any services. So, here is the Team Draft!
						</p>
						<div className={styles.techs}>
							Typescript, React, Material UI MUI
						</div>
					</div>
					<div className={styles.project}>
						<div className={styles.title}>
							SNES Bomberman 3 in Python
							<span className={styles.link}>
								<AiOutlineLink />
								<a href="https://nicopa.github.io/Nicopa/">
									nicopa.github.io/Nicopa/
								</a>
							</span>
						</div>
						<p className={styles.description}>
							For the old SNES Bomberman fans, this is the battle mode of the
							SNES Bomberman 3 built with <b>PyGame</b> engine (<b>Python</b>).
						</p>
						<div className={styles.techs}>Python, PyGame, OOP</div>
					</div>
					<div className={styles.project}>
						<div className={styles.title}>
							Pokemon Memory Game in Angular
							<span className={styles.link}>
								<AiOutlineLink />
								<a href="https://nicopa.github.io/Nicopa/pokemon">
									nicopa.github.io/Nicopa/pokemon
								</a>
							</span>
						</div>
						<p className={styles.description}>
							This is a pokemon memory game built in Angular, where instead of
							searching for equal cards, you have to find each evolution set of
							the first pokemon generation.
						</p>
						<div className={styles.techs}>Typescript, Angular</div>
					</div>
				</div>
			</ResumeSection>
			<ResumeSection>
				<h2>Licenses & certifications</h2>
				<div className={styles["certification-item"]}>
					<div className={styles.name}>CS50X: CS50's Introduction to Computer Science</div>
					<div className={styles.place}>CS50 - edX</div>
					<div className={styles.period}>Jan 2025</div>
					<div className={styles["credential-id"]}>Credential ID: bbe08eb36b1c4912b0889a1c0b32962c</div>
					<div className={styles["credential-url"]}>https://courses.edx.org/certificates/bbe08eb36b1c4912b0889a1c0b32962c</div>
				</div>
				<div className={styles["certification-item"]}>
					<div className={styles.name}>Clean Code and Clean Architecture</div>
					<div className={styles.place}>Branas.io</div>
					<div className={styles.period}>Apr 2023</div>
					<div className={styles["credential-url"]}>https://ll-app-certificates.s3.sa-east-1.amazonaws.com/92f9c153-7bd9-4357-8492-5406337c68cf.png</div>
				</div>
			</ResumeSection>
			<ResumeSection>
				<h2>Languages</h2>
				<ul className={styles["item-list"]}>
					<li>Portuguese(BR) - Native</li>
					<li>English - Fluent</li>
				</ul>
			</ResumeSection>
		</ResumeLayout>
	);
}
