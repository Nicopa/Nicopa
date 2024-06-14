import styles from "./resume.module.scss";
import SkillStack from "../components/skill/SkillStack";
import SkillIcon from "../components/skill/SkillIcon";
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
} from "react-icons/si";
import { AiOutlineLink } from "react-icons/ai";
import ResumeLayout from "../components/resume/ResumeLayout";
import ResumeSection from "../components/resume/ResumeSection";
import profilePicture from "../public/nicolas.webp";

export default function Resume() {
	return (
		<ResumeLayout
			head={{
				title: "Nicholas Amarante | Software Developer | Resume",
				description:
					"Hi! I'm a software developer and this is my complete resume.",
			}}
			personalInfo={{
				fullname: "Nicholas Panazzolo Amarante",
				age: "33 years old",
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
				<p>Hello there! I'm Nick, short for Nicholas, and I am a remote software developer. My goal is to work with people from all around the world and improve my skills to add value to projects that aim at innovation and sustainability. Knowing the impact that my work has on society is crucial to me.</p>
				<p>My typical workday involves starting off with a simple breakfast while catching up on the latest updates from my team and browsing through some daily news. Following that, I prioritize tasks for the day to ensure that I can tackle the most important ones during my peak productivity time in the morning.</p>
				<p>Once the main task of the day is accomplished, I typically spend my afternoons reviewing my team's code and participating in video call meetings to keep up with the team's roadmap.</p>
				<p>I consider myself a self-taught professional (as any developer should be) and always willing to learn new technologies.</p>
			</ResumeSection>
			<ResumeSection>
				<h2>Experience</h2>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Backend software developer</div>
					<div className={styles.place}>Void.gg</div>
					<div className={styles.period}>Dec 2022 - Present</div>
					<p className={styles.description}>
						I specialized in developing and maintaining backend services for game tracker applications, focusing on Valorant player statistics.
						Utilizing technologies such as NestJS (Node.js and Typescript), alongside the Riot API, I ensure high performance and responsiveness of our applications.
						A key achievement was successfully refactoring our applications to support different infrastructures through migrations and reducing database costs.
						I was also able to learn new skills such as Docker, Kafka (microservices), and AWS.
						I work collaboratively within a team of developers, providing suggestions, testing support and application reviews.
					</p>
				</div>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Software developer</div>
					<div className={styles.place}>Self-employed / freelance</div>
					<div className={styles.period}>Jan 2022 - Nov 2022</div>
					<p className={styles.description}>
						I divided my time between studying the new technologies
						and doing some freelance demands for a local company (Coopertec
						Soluções -{" "}
						<a
							href="https://www.linkedin.com/company/coopertec-solucoes/"
							target="_blank"
							rel="noreferrer"
						>
							linkedin.com/company/coopertec-solucoes/
						</a>
						. I managed to code and maintain very
						different applications, from <b>legacy PHP</b> web systems,
						<b>CodeIgniter</b>, to <b>Angular</b> and{" "}
						<b>Next.js/React (Typescript)</b> web page development.
					</p>
				</div>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Career transition</div>
					<div className={styles.period}>
						Apr 2016 - Oct 2021 (5 years, 7 months)
					</div>
					<p className={styles.description}>
						I made a career transition because I learned to make sushi and there
						were no restaurants in my town. So I decided to start from the
						scratch, and I managed to open my own restaurant and work in it for
						3 years (even during the pandemic). <br />I decided to leave because
						the financial return of this type of business in my region was not
						worth it.
						<br />
						P.S: In March, 2017, I went to Tokyo, Japan, to do a sushi course.
						Every class was given in English.
					</p>
				</div>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Full Stack Developer</div>
					<div className={styles.place}>
						Agência Orin - Flores da Cunha, RS, Brazil
					</div>
					<div className={styles.period}>
						Jun 2014 - Mar 2016 (1 year, 10 months)
					</div>
					<p className={styles.description}>
						I was responsible for the backend (<b>PHP</b>) and frontend of web
						page development. The company was very small (5 people) so I was
						able to learn a little about everything that a project involves
						(design, SEO, brainstorms, etc) and help and give suggestions about
						the team's work process and projects.
					</p>
				</div>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Full Stack Developer</div>
					<div className={styles.place}>
						BF2 Tecnologia - Caxias do Sul, RS, Brazil
					</div>
					<div className={styles.period}>
						Dec 2012 - Dec 2013 (1 year, 1 months)
					</div>
					<p className={styles.description}>
						I started by doing some front pages and managed to be a full stack
						developer after a few months. I worked with a team that had 5
						developers. I also worked mainly with <b>PHP</b> as backend
						language.
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
					<SkillIcon icon={<SiPython title="Python" />} label="Python" />
					<SkillIcon icon={<SiPhp title="PHP" />} label="PHP" />
					<SkillIcon icon={<SiNextdotjs title="Next.js" />} label="Next.js" />
					<SkillIcon icon={<SiReact title="React" />} label="React" />
					<SkillIcon icon={<SiAngular title="Angular" />} label="Angular" />
					<SkillIcon
						icon={<SiCodeigniter title="Codeigniter" />}
						label="Codeigniter"
					/>
					<SkillIcon icon={<SiMysql title="MySQL" />} label="MySQL" />
					<SkillIcon icon={<SiMongodb title="MongoDB" />} label="MongoDB" />
					<SkillIcon icon={<SiSass title="SCSS/Sass" />} label="SCSS/Sass" />
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
								<a href="https://nicopa.github.io/Nicopa/">
									nicopa.github.io/Nicopa/
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
				<h2>Languages</h2>
				<ul className={styles["item-list"]}>
					<li>Portuguese(BR) - Native</li>
					<li>
						English - Advanced: I can talk, read and write. I just need a daily
						habit of talking to people to get fluent.
					</li>
				</ul>
			</ResumeSection>
		</ResumeLayout>
	);
}
