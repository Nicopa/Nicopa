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
	SiNestjs,
	SiNodedotjs,
	SiDocker,
	SiPostgresql,
} from "react-icons/si";
import { AiOutlineLink } from "react-icons/ai";
import ResumeLayout from "../components/resume/ResumeLayout";
import ResumeSection from "../components/resume/ResumeSection";
import profilePicture from "../public/nicolas.webp";

export default function ResumeBR() {
	return (
		<ResumeLayout
			head={{
				title: "Nícolas Amarante | Software Engineer | Currículo",
				description:
					"Olá! Eu sou engenheiro de software remoto e este é o meu currículo completo.",
			}}
			personalInfo={{
				fullname: "Nícolas Panazzolo do Amarante",
				age: "33 anos",
				email: "nicopa_rs@hotmail.com",
				linkedinURL: "https://www.linkedin.com/in/nicopa/",
				linkedinShort: "linkedin.com/in/nicopa/",
				githubURL: "https://nicopa.github.io/Nicopa",
				githubShort: "nicopa.github.io/Nicopa",
				address: "Flores da Cunha, RS, Brasil",
				profilePicture,
			}}
		>
			<ResumeSection>
				<h2>Sobre</h2>
				<p>Olá! Sou um engenheiro de software remoto com mais de 5 anos de experiência e tenho trabalhado construindo aplicações e recursos web de ponta a ponta. Sou apaixonado por criar aplicações escaláveis que visem sustentabilidade e inovação.</p>
				<p>No backend, minha experiência principal é com Node.js com Typescript, especialmente com o framework NestJS, e eu tenho experiência com PHP e o framework Codeigniter. No frontend, eu uso React e/ou Angular, e tenho experiência com Next.js. Eu também tenho experiência com bancos de dados como MySQL, Postgres e MongoDB.</p>
				<p>Eu também estou acostumado a trabalhar com rastreadores de tempo (como Toptal e Time Doctor) quando requerido e estou acostumado a trabalhar assíncronamente com equipes globais.</p>
			</ResumeSection>
			<ResumeSection>
				<h2>Experiência</h2>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Backend Software Engineer</div>
					<div className={styles.place}>Void.gg</div>
					<div className={styles.period}>Dez 2022 - Mai 2024</div>
					<p className={styles.description}>
						Eu me especializei em desenvolver e manter serviços de backend para APIs de estatísticas de jogos, especialmente para Valorant.
						Utilizando tecnologias como <b>NestJS (Node.js e Typescript)</b>, juntamente com a API da Riot, garanti alto desempenho e capacidade de resposta para as APIs.
						Uma conquista importante foi refatorar com sucesso nossas aplicações para dar suporte a diferentes infraestruturas por meio de migrações e redução de custos de banco de dados.
						Trabalhei em colaboração com uma equipe de desenvolvedores remotos, fornecendo sugestões, testando suporte e revisões de aplicativos.
					</p>
				</div>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Full Stack Software Engineer</div>
					<div className={styles.place}>Coopertec Soluções</div>
					<div className={styles.period}>Jan 2022 - Nov 2022</div>
					<p className={styles.description}>
						Consegui programar e dar suporte para diferentes tipos de aplicações web. Eu desenvolvi e consertei recursos para um cliente da área logística que requeriu usar <b>PHP (versão 4)</b> legado e CodeIgniter. Eu também trabalhei usando <b>Angular</b> e <b>Next.js/React (Typescript)</b> no frontend para projectos de outros clientes.
					</p>
				</div>
				{/* <div className={styles["experience-item"]}>
					<div className={styles.title}>Transição de carreira</div>
					<div className={styles.period}>
						Abr 2016 - Out 2021 (5 anos, 7 meses)
					</div>
					<p className={styles.description}>
						Fiz uma transição de carreira porque eu aprendi a fazer sushi e não
						haviam restaurantes em minha cidade. Então eu decidi começar do
						zero, e consegui abrir o meu próprio restaurante e trabalhar nele
						por 3 anos (mesmo durante a pandemia). Eu decidi parar porque o
						retorno financeiro deste tipo de negócio na minha região não estava
						valendo a pena.
						<br />
						P.S: Em março de 2017, eu fui para Tokyo, no Japão, para fazer um
						curso de sushi. Todas as aulas foram lecionadas em inglês.
					</p>
				</div> */}
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Full Stack Software Engineer</div>
					<div className={styles.place}>
						Agência Orin - Flores da Cunha, RS, Brasil
					</div>
					<div className={styles.period}>
						Jun 2014 - Mar 2016 (1 ano, 10 meses)
					</div>
					<p className={styles.description}>
						Fui líder de backend a frontend. Eu era responsável pela construção de páginas web usando <b>PHP</b> e jQuery.
						Trabalhar com uma pequena equipe me permitiu aprender um pouco de tudo que está envolvido no desenvolvimento de um projeto (design, SEO, brainstorms, etc) e também ajudar e dar sugestões sobre o processo de trabalho da equipe.
						Um dos projetos em que trabalhei foi um sistema de gerenciamento de conteúdo <b>CMS</b> para a empresa, permitindo criar rapidamente o backend de novos projetos.
					</p>
				</div>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Full Stack Engineer</div>
					<div className={styles.place}>
						BF2 Tecnologia - Caxias do Sul, RS, Brasil
					</div>
					<div className={styles.period}>
						Dez 2012 - Dez 2013 (1 ano, 1 mês)
					</div>
					<p className={styles.description}>
						Eu comecei fazendo algumas páginas frontend jQuery e puro HTML/CSS e consegui me tornar full-stack depois de alguns meses. Eu trabalhei com uma equipe de 5 desenvolvedores, primariamente com <b>PHP</b> no backend.
					</p>
				</div>
			</ResumeSection>
			<ResumeSection>
				<h2>Habilidades</h2>
				<p>
					Estas são algumas das tecnologias que eu consegui, ao menos,
					desenvolver uma aplicação.
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
				</SkillStack>
			</ResumeSection>
			<ResumeSection className={styles.projects}>
				<h2>Projetos pessoais</h2>
				<div className={styles.stack}>
					<div className={styles.project}>
						<div className={styles.title}>
							Gerenciador Financeiro Pessoal de Ativos
							<span className={styles.link}>
								<AiOutlineLink />
								<a href="https://nicopa.github.io/Nicopa/">
									nicopa.github.io/Nicopa/
								</a>
							</span>
						</div>
						<p className={styles.description}>
							Este é o meu gerenciador financeiro pessoal de ativos. Desde que
							comecei a investir em ações, tesouro, fundos e entre outros
							ativos, eu tenho utilizado planilhas para controlar meus
							investimentos. Agora, com esta aplicação, eu posso controlar todas
							minhas negociações de forma mais fácil, rápida e com relatórios
							customizados.
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
							Algumas vezes, você só precisa de um jeito rápido de dividir o
							seus amigos em times para os esportes que você joga. E de
							preferência sem ter que se registrar em qualquer serviço ou
							aplicação. Então, aqui está o Team Draft!
						</p>
						<div className={styles.techs}>
							Typescript, React, Material UI MUI
						</div>
					</div>
					<div className={styles.project}>
						<div className={styles.title}>
							SNES Bomberman 3 em Python
							<span className={styles.link}>
								<AiOutlineLink />
								<a href="https://nicopa.github.io/Nicopa/">
									nicopa.github.io/Nicopa/
								</a>
							</span>
						</div>
						<p className={styles.description}>
							Para os fãs do velho Bomberman, este é o modo batalha do SNES
							Bomberman 3 feito com a engine <b>PyGame</b> (<b>Python</b>).
						</p>
						<div className={styles.techs}>Python, PyGame, OOP</div>
					</div>
					<div className={styles.project}>
						<div className={styles.title}>
							Pokemon Memory Game em Angular
							<span className={styles.link}>
								<AiOutlineLink />
								<a href="https://nicopa.github.io/Nicopa/pokemon">
									nicopa.github.io/Nicopa/pokemon
								</a>
							</span>
						</div>
						<p className={styles.description}>
							Este é um jogo de memória do Pokemon feito em Angular, onde ao
							invés de procurar por cartas iguais, você deve procurar por cada
							conjunto de evoluções da primeira geração de pokemons.
						</p>
						<div className={styles.techs}>Typescript, Angular</div>
					</div>
				</div>
			</ResumeSection>
			<ResumeSection>
				<h2>Idiomas</h2>
				<ul className={styles["item-list"]}>
					<li>Português(BR) - Nativo</li>
					<li>Inglês - Fluente</li>
				</ul>
			</ResumeSection>
		</ResumeLayout>
	);
}
