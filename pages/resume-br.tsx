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
	SiOpenai,
	SiGithub,
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
				age: "34 anos",
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
				<h2>Experiência</h2>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Full Stack Software Engineer</div>
					<div className={styles.place}>Turbo Tenant</div>
					<div className={styles.period}>Abr 2025 - Presente</div>
					<p className={styles.description}>
						A TurboTenant é uma empresa de tecnologia pioneira no segmento de proptech, reconhecida por sua plataforma digital inovadora que simplifica o processo de locação para proprietários e inquilinos.
						A empresa utiliza um conjunto abrangente de ferramentas projetadas para otimizar o marketing, a gestão e a seleção de inquilinos, possibilitando uma abordagem moderna, eficiente e centrada no cliente para a gestão de imóveis.
						Reconhecida por sua cultura inovadora e compromisso com a melhoria contínua, a TurboTenant continua a transformar o cenário das experiências de locação no dinâmico mercado imobiliário atual.
					</p>
				</div>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Full Stack Software Engineer</div>
					<div className={styles.place}>ElectroNeek</div>
					<div className={styles.period}>Jul 2024 - Mar 2025</div>
					<p className={styles.description}>
						Eu mantive e desenvolvi novos recursos para a plataforma da empresa, tanto no frontend quanto no backend.
						Utilizando tecnologias como <b>NestJS</b>, <b>Typescript</b>, <b>NodeJS</b>, <b>Angular</b>, <b>OpenAI</b>, <b>Google OCR</b>, <b>Docker</b>, <b>Kafka</b>, <b>MongoDB</b>, <b>Redis</b> e <b>Electron</b>, eu garanti a robustez e escalabilidade da plataforma.
						Uma conquista significativa foi a refatoração completa de uma ferramenta de reconhecimento de documentos que converte PDFs e imagens em JSON com alta precisão, utilizando prompt engineering e tool binding.
						Eu colaborei com revisões de código, solução de problemas de bugs, discussões de melhores práticas e brainstorms. A empresa se concentra na automação de processos robóticos, guiada pela metodologia Kanban, com recursos e ferramentas de IA como negócio principal.
					</p>
				</div>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Backend Software Engineer</div>
					<div className={styles.place}>Void.gg</div>
					<div className={styles.period}>Dez 2022 - Mai 2024</div>
					<p className={styles.description}>
						Eu me especializei em desenvolver e manter serviços de backend para APIs de estatísticas de jogos, como foco principal no Valorant.
						Utilizando tecnologias como <b>NestJS (Node.js e Typescript)</b>, juntamente com a API da Riot, garanti alto desempenho e capacidade de resposta para as APIs.
						Uma conquista importante foi refatorar com sucesso as aplicações backend da empresa para dar suporte a diferentes infraestruturas por meio de migrações e redução de custos de banco de dados.
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
				<h2>Sobre</h2>
				<p>Sou um engenheiro de software full-stack remoto com mais de seis anos de experiência na criação de aplicativos web de ponta a ponta. Apaixonado por soluções escaláveis ​e inovadoras, sou especialista em desenvolvimento de backend com <b>Node.js (TypeScript)</b>, particularmente usando o <b>framework NestJS</b>, e tenho experiência com <b>PHP (CodeIgniter)</b> e <b>Python (Django)</b>.</p>
				<p>No frontend, trabalho com <b>React</b>, <b>Angular</b> e <b>Next.js</b>, proporcionando experiências de usuário dinâmicas e eficientes. Minha experiência em banco de dados inclui <b>MySQL</b>, <b>PostgreSQL</b> e <b>MongoDB</b>.</p>
				<p>Sinto-me confortável trabalhando de forma assíncrona com equipes globais e tenho experiência com ferramentas de controle de tempo como <b>Toptal</b> e <b>Time Doctor</b> se necessário.</p>
			</ResumeSection>
			<ResumeSection className={styles.projects}>
				<h2>Projetos pessoais</h2>
				<div className={styles.stack}>
					<div className={styles.project}>
						<div className={styles.title}>
							Django Document Recognition - versão Web
							<span className={styles.link}>
								<AiOutlineLink />
								<a href="https://github.com/Nicopa/django-document-recognition">
									nicopa.github.io/Nicopa/django-document-recognition
								</a>
							</span>
						</div>
						<p className={styles.description}>
							Esta solução alimentada por IA foi projetada para agilizar o reconhecimento e o processamento de documentos.
							Ela suporta vários formatos de imagem, incluindo PNG e JPEG, e oferece recursos robustos, como gerenciamento de campo personalizável e a capacidade de exportar e importar configurações de campo.
							O aplicativo processa documentos e gera os dados extraídos em um formato JSON estruturado, garantindo fluxos de trabalho contínuos e fácil integração com outros sistemas, mesmo ao recarregar ou transferir dados entre sessões.
						</p>
						<div className={styles.techs}>
							Python, OpenAI API, Django, Tailwind, Vanilla Javascript
						</div>
					</div>
					<div className={styles.project}>
						<div className={styles.title}>
							DevLog - Desktop App e Web
							<span className={styles.link}>
								<AiOutlineLink />
								<a href="https://nicopa.github.io/Nicopa/devlog">
									nicopa.github.io/Nicopa/devlog
								</a>
							</span>
						</div>
						<p className={styles.description}>
							Um aplicativo de desktop para registrar as atividades de trabalho, criado com Electron, Angular e Angular Material.
							Registrar seu progresso em tickets de tarefas ou projetos é essencial, mas às vezes você precisa centralizar seu progresso diário de trabalho em um só lugar.
							É por isso que o DevLog é um simples Logger que salva arquivos TXT e pode ser usado tanto em um aplicativo local (Windows) quanto no navegador.
						</p>
						<div className={styles.techs}>
							Typescript, Electron, Angular, Angular Material UI, Node.js, Desktop
						</div>
					</div>
					{/* <div className={styles.project}>
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
					</div> */}
					<div className={styles.project}>
						<div className={styles.title}>
							Team Draft - Versão Web
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
					<SkillIcon icon={<SiOpenai title="OpenAI" />} label="OpenAI" />
					{/* <SkillIcon icon={<SiGithub title="Github" />} label="Github" /> */}
				</SkillStack>
			</ResumeSection>
			<ResumeSection>
				<h2>Licenças e Certificações</h2>
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
					<div className={styles.period}>Abr 2023</div>
					<div className={styles["credential-url"]}>https://ll-app-certificates.s3.sa-east-1.amazonaws.com/92f9c153-7bd9-4357-8492-5406337c68cf.png</div>
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
