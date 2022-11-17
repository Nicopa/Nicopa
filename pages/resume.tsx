import Head from "next/head";
import styles from "./resume.module.scss";
import SkillStack from "../components/skill/SkillStack";
import SkillIcon from "../components/skill/SkillIcon";
import ProjectTags from "../components/project/tags/ProjectTags";
import Image from "next/image";
import profilePicture from "../public/nicolas.webp";
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
import { FiMail } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";

export default function Resume() {
	return (
		<main className={styles.root}>
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
			<div className={styles.container}>
				<div className={styles.sidebox}>
					<div className={styles["profile-picture"]}>
						<Image
							src={profilePicture}
							alt="Nícolas Panazzolo do Amarante"
							placeholder="blur"
							className={styles["profile-img"]}
						/>
					</div>
				</div>
				<div className={styles.content}>
					<section className={styles["personal-info-box"]}>
						<h1>Nicholas Panazzolo Amarante</h1>
						<p>31 years old</p>
						<p>
							<a href="mailto:nicopa_rs@hotmail.com">
								<FiMail />
								&nbsp;nicopa_rs@hotmail.com
							</a>
							<br />
							<a
								href="https://www.linkedin.com/in/nicopa/"
								target="_blank"
								rel="noreferrer"
							>
								<SiLinkedin />
								&nbsp;linkedin.com/in/nicopa/
							</a>
							<br />
							<a
								href="https://github.com/Nicopa"
								target="_blank"
								rel="noreferrer"
							>
								<SiGithub />
								&nbsp;github.com/Nicopa
							</a>
						</p>
						<address>Flores da Cunha, RS, Brazil</address>
					</section>
					<section className={styles["standard-box"]}>
						<h2>Summary</h2>
						<p>
							I'm looking for a remote job opportunity in software development.
							My biggest professional dream is to be working with companies
							around the world and with the best developer teams.
						</p>
						<p>
							I consider myself a self-taught professional (as any developer
							should be) and always willing to learn new technologies.
						</p>
					</section>
					<section className={styles["standard-box"]}>
						<h2>Experience</h2>
						<div className={styles["experience-item"]}>
							<div className={styles.title}>Software developer</div>
							<div className={styles.place}>Self-employed / freelance</div>
							<div className={styles.period}>Jan 2022 - Present</div>
							<p className={styles.description}>
								I have been splitting my time between studying the new
								technologies and doing some freelance demands for a local
								company (Coopertec Soluções -{" "}
								<a
									href="https://www.linkedin.com/company/coopertec-solucoes/"
									target="_blank"
									rel="noreferrer"
								>
									linkedin.com/company/coopertec-solucoes/
								</a>
								. Over the last few months, I've been able to code and maintain
								very different applications, from <b>legacy PHP</b> web systems,
								<b>CodeIgniter</b>, to <b>Angular</b> and{" "}
								<b>Next.js/React (Typescript)</b> web page development.
								<br />
								I'm also studying game development, which is an opportunity I'm
								also looking for.
							</p>
						</div>
						<div className={styles["experience-item"]}>
							<div className={styles.title}>Career transition</div>
							<div className={styles.period}>
								Apr 2016 - Oct 2021 (5 years, 7 months)
							</div>
							<p className={styles.description}>
								I made a career transition because I learned to make sushi and
								there were no restaurants in my town. So I decided to start from
								the scratch, and I managed to open my own restaurant and work in
								it for 3 years (even during the pandemic). <br />I decided to
								leave because the financial return of this type of business in
								my region was not worth it.
								<br />
								P.S: In March, 2017, I went to Tokyo, Japan, to do a sushi
								course. Every class was given in English.
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
								I was responsible for the backend (<b>PHP</b>) and frontend of
								web page development. The company was very small (5 people) so I
								was able to learn a little about everything that a project
								involves (design, SEO, brainstorms, etc) and help and give
								suggestions about the team's work process and projects.
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
								I started by doing some front pages and managed to be a full
								stack developer after a few months. I worked with a team that
								had 5 developers. I also worked mainly with <b>PHP</b> as
								backend language.
							</p>
						</div>
					</section>
					<section className={styles["standard-box"]}>
						<h2>Education</h2>
						<div className={styles["experience-item"]}>
							<div className={styles.title}>
								Digital Technologies Bachelor Degree
							</div>
							<div className={styles.place}>
								UCS - Universidade de Caxias do Sul
							</div>
							<div className={styles.period}>
								Jan 2009 - Dec 2015 (not finished)
							</div>
							<p className={styles.description}>
								This bachelor's degree offered a combination of computer science
								courses and arts courses. Some of the subjects included art
								history, data structure, 3D animation, programming, drawing,
								etc.
								<br />I discovered programming in college, but I didn't want to
								finish my degree because I was dissatisfied with the course.
							</p>
						</div>
					</section>
					<section className={`${styles["standard-box"]} ${styles.icons}`}>
						<h2>Skills</h2>
						<p>
							These are some of the technologies that I managed to make at least
							one application:
						</p>
						<SkillStack>
							<SkillIcon
								icon={<SiTypescript title="Typescript" />}
								label="Typescript"
							></SkillIcon>
							<SkillIcon icon={<SiPython title="Python" />} label="Python" />
							<SkillIcon icon={<SiPhp title="PHP" />} label="PHP" />
							<SkillIcon
								icon={<SiNextdotjs title="Next.js" />}
								label="Next.js"
							/>
							<SkillIcon icon={<SiReact title="React" />} label="React" />
							<SkillIcon icon={<SiAngular title="Angular" />} label="Angular" />
							<SkillIcon
								icon={<SiCodeigniter title="Codeigniter" />}
								label="Codeigniter"
							/>
							<SkillIcon icon={<SiMysql title="MySQL" />} label="MySQL" />
							<SkillIcon icon={<SiMongodb title="MongoDB" />} label="MongoDB" />
							<SkillIcon
								icon={<SiSass title="SCSS/Sass" />}
								label="SCSS/Sass"
							/>
						</SkillStack>
					</section>
					<section className={styles.projects}>
						<h2>Personal projects</h2>
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
								using spreadsheets to keep track of my investments. Now, with
								this app, I can control all my trades easier, faster and with
								better reports.
							</p>
							<div className={styles.techs}>
								Typescript, Clean Architecture, TDD, DDD, Event Driven
								Architecture, Finances, SOLID, API, React, Material UI MUI,
								MySQL, MongoDB
							</div>
						</div>
						<div className={styles.project}>
							<div className={styles.title}>
								Team Draft - Web App version
								<span className={styles.link}>
									<AiOutlineLink />
									<a href="https://nicopa.github.io/Nicopa/">
										nicopa.github.io/Nicopa/
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
								SNES Bomberman 3 built with PyGame engine (Python).
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
								searching for equal cards, you have to find each evolution set
								of the first pokemon generation.
							</p>
							<div className={styles.techs}>Typescript, Angular</div>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}
