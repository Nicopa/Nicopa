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

export default function ResumeBR() {
	return (
		<ResumeLayout
			head={{
				title: "Nícolas Amarante | Software Developer | Currículo",
				description:
					"Olá! Eu sou desenvolvedor de software e este é o meu currículo completo.",
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
				<p>Olá! Sou um desenvolvedor de software remoto. Meu objetivo é trabalhar com pessoas do mundo todo e melhorar minhas habilidades para agregar valor a projetos que visam inovação e sustentabilidade. Saber o impacto que meu trabalho tem na sociedade é crucial para mim.</p>
				<p>Meu dia de trabalho típico envolve começar com um café da manhã simples enquanto acompanho as últimas atualizações da minha equipe e navego por algumas notícias diárias. Depois disso, priorizo ​​as tarefas do dia para garantir que posso lidar com as mais importantes durante meu pico de produtividade pela manhã.</p>
				<p>Depois que a tarefa principal do dia é concluída, normalmente passo minhas tardes revisando o código da minha equipe e participando de reuniões por videochamada para acompanhar o roteiro da equipe.</p>
				<p>Eu me considero um profissional autodidata (como qualquer desenvolvedor deve ser) e sempre disposto a aprender novas tecnologias.</p>
			</ResumeSection>
			<ResumeSection>
				<h2>Experiência</h2>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Backend software developer</div>
					<div className={styles.place}>Void.gg</div>
					<div className={styles.period}>Dez 2022 - Presente</div>
					<p className={styles.description}>
						Eu me especializei em desenvolver e manter serviços de backend para aplicativos de rastreamento de jogos, com foco em estatísticas de jogadores do Valorant.
						Utilizando tecnologias como NestJS (Node.js e Typescript), juntamente com a API da Riot, garanto alto desempenho e capacidade de resposta de nossos aplicativos.
						Uma conquista importante foi refatorar com sucesso nossos aplicativos para dar suporte a diferentes infraestruturas por meio de migrações e redução de custos de banco de dados.
						Trabalho em colaboração com uma equipe de desenvolvedores, fornecendo sugestões, testando suporte e revisões de aplicativos.
					</p>
				</div>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Software developer</div>
					<div className={styles.place}>Freelancer</div>
					<div className={styles.period}>Jan 2022 - Nov 2022</div>
					<p className={styles.description}>
						Eu tenho dividido o meu tempo entre estudar novas tecnologias e
						fazer algumas requisições de freelances para empresas locais. Nos
						últimos meses, tenho conseguido programar e dar manutenção para
						diferentes tipos de aplicações, desde sistemas legados web em PHP,{" "}
						<b>CodeIgniter</b>, até o desenvolvimento de aplicações/páginas em{" "}
						<b>Angular</b> e <b>Next.js/React</b> em <b>Typescript</b>.
						<br />
						Eu também estou estudando o desenvolvimento de jogos, que é uma
						oportunidade pela qual eu também me interesso.
					</p>
				</div>
				<div className={styles["experience-item"]}>
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
				</div>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Full Stack Developer</div>
					<div className={styles.place}>
						Agência Orin - Flores da Cunha, RS, Brasil
					</div>
					<div className={styles.period}>
						Jun 2014 - Mar 2016 (1 ano, 10 meses)
					</div>
					<p className={styles.description}>
						Eu fui responsável pelo backend (<b>PHP</b>) e frontend de
						aplicações web. A empresa era pequena (5 colaboradores) então eu
						pude aprender um pouco de tudo que está envolvido no desenvolvimento
						de um projeto (design, SEO, brainstorms, etc) e também ajudar e dar
						sugestões sobre o processo de trabalho da equipe.
					</p>
				</div>
				<div className={styles["experience-item"]}>
					<div className={styles.title}>Full Stack Developer</div>
					<div className={styles.place}>
						BF2 Tecnologia - Caxias do Sul, RS, Brasil
					</div>
					<div className={styles.period}>
						Dez 2012 - Dez 2013 (1 ano, 1 mês)
					</div>
					<p className={styles.description}>
						Eu comecei fazendo algumas páginas frontend e consegui me tornar
						full-stack depois de alguns meses. Eu trabalhei com uma equipe de 5
						desenvolvedores. E também trabalhei principalmente com o <b>PHP</b>{" "}
						no backend.
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
								<a href="https://nicopa.github.io/Nicopa/">
									nicopa.github.io/Nicopa/
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
					<li>
						English - Advanced: I can talk, read and write. I just need a daily
						habit of talking to people to get fluent.
					</li>
				</ul>
			</ResumeSection>
		</ResumeLayout>
	);
}
