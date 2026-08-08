import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

const stored = browser ? localStorage.getItem('locale') : null;
const initial = stored === 'en' || stored === 'no' ? stored : 'no';

export const locale = writable(initial);

if (browser) {
	locale.subscribe((value) => {
		localStorage.setItem('locale', value);
		document.documentElement.lang = value === 'en' ? 'en' : 'no';
	});
}

export const translations = {
	no: {
		nav: { home: 'HJEM', news: 'NYHETER', about: 'OM OSS' },
		footer: { phone: 'Mobil', email: 'E-post', country: 'Norge' },
		home: {
			heroWords: ['OPTIMALISERING', 'AUTOMASJON', 'ROBOTIKK'],
			heroSubtitle:
				'Din partner for neste generasjons produksjons- og automasjonsløsninger',
			solutions: 'Våre løsninger',
			aboutBtn: 'Om oss',
			welcomeTitle: 'Velkommen til Optiram',
			welcomeSubtitle:
				'Din partner for neste generasjons produksjons- og automasjonsløsninger',
			robotikk: {
				title: 'Robotikk og automasjon',
				body:
					'Vår lidenskap er å skape innovative løsninger som øker kvalitet, effektivitet og som gir langsiktig verdiskaping for deg og din virksomhet. Gjennom tett samarbeid utvikler og leverer vi robot- og automasjonsløsninger som optimaliserer flyt, reduserer kostnader og øker kapasiteten i produksjonen.<br><br>Vi kombinerer teknisk innsikt med praktisk forståelse for produksjonsprosesser, og legger stor vekt på driftssikkerhet, presisjon og repeterbar kvalitet. Våre løsninger tilpasses dine behov – fra enkle robotceller til komplekse, helautomatiserte produksjonslinjer.<br>Husk at en robot ikke sover, men kan ha klargjort for deg når du kommer på jobb.'
			},
			automation: {
				title: 'Automation system',
				body:
					'Vi har lang erfaring med levering av komplette automasjonssystemer til industrien. Våre løsninger skreddersys for å møte dine tekniske og operasjonelle krav, med særlig fokus på driftssikkerhet, brukervennlighet og effektivitet.<br><br>Vi tar ansvar for hele leveransen – fra konsept og prosjektering til programmering, testing og idriftsettelse. Gjennom tett samarbeid med kundene våre sikrer vi at løsningen er tilpasset både dagens behov og fremtidig utvikling.<br><br>Med solid kompetanse innen PLC-, HMI- og drivesystemer leverer vi stabile og fremtidsrettede løsninger som er enkle å drifte og vedlikeholde.'
			},
			programmering: {
				title: 'Programmering og prosjekteringstjenester',
				body:
					'Vi tilbyr programmering og prosjekteringstjenester innen industriell automasjon, robotikk og digitale løsninger. Gjennom tett og profesjonelt samarbeid leverer vi løsninger som er tilpasset dine behov og eksisterende systemer.<br><br>Vi har solid erfaring med prosjektgjennomføring, PLC- og HMI-programmering samt utvikling av webbaserte løsninger.<br><br>Vår kompetanse omfatter blant annet systemer fra Beckhoff, Siemens, Beijer, Wago, Mitsubishi og Omron, samt plattformer basert på CODESYS.'
			},
			opticloud: {
				title: 'OptiCloud og Opti-IoT',
				body:
					'Med OptiCloud og Opti-IoT samler, analyserer og visualiserer vi data i sanntid. Dette gir deg bedre innsikt i drift, ytelse og tilstand – og et solid grunnlag for datadrevne beslutninger.<br><br>Våre løsninger knytter sammen maskiner, sensorer og systemer på en trygg og skalerbar måte, og gjør det enkelt å overvåke prosesser både lokalt og via skybaserte løsninger. Informasjonen presenteres i oversiktlige dashbord som gir operatører og ledelse rask tilgang til riktig data til riktig tid.<br><br>Avanserte algoritmer identifiserer avvik, optimaliseringspotensial og foreslår målrettede tiltak. Resultatet er bedre ressursutnyttelse, høyere kvalitet og mer stabil drift.'
			},
			cookie: 'Vi bruker informasjonskapsler (cookies) for å forbedre opplevelsen.',
			accept: 'Godta'
		},
		about: {
			title: 'Om oss',
			intro1:
				'Optiram ble etablert i 2019, og tidlig i 2025 overtok vi selskapet fra de tidligere eierne. Til sammen har vi nærmere 50 års erfaring innen automasjonsfaget. Vi har bred erfaring fra industri, marine og offshore, og har arbeidet som montører, serviceteknikere, prosjektledere og produktutviklere. De siste årene har hovedfokuset vært på produktutvikling, men vi tar gjerne på oss vernesko og er ute på oppdrag når det er behov.',
			intro2:
				'Vår visjon er å levere smarte, effektive og pålitelige automasjonsløsninger som hjelper bedrifter med å optimalisere sine prosesser og øke produktiviteten.',
			whereTitle: 'Hvor finner du oss?',
			country: 'Norge',
			employees: 'Ansatte',
			ceoRole: 'CEO – Daglig leder',
			ctoRole: 'CTO – Teknisk leder'
		},
		news: {
			title: 'Alle nyheter',
			kameleon:
				'Desember 2025 blei Optiram <strong>system integrator</strong> for Kameleon Robotics. Kameleon Robotics er distributør av Universal Robots i Norge.<br><a href="https://www.kameleonrobotics.no/" target="_blank" rel="noopener noreferrer">www.kameleonrobotics.no</a>',
			stian:
				'Optiram har <strong>ansatt Stian</strong> som ny teknisk leder. Han tiltrer stillingen i Oktober 2025 og har lang og solid erfaring innen automasjon.',
			lokaler:
				'Optiram flytter inn i <strong>nye lokaler</strong> i Rubbestadneset Oktober 2025. Dette gir oss bedre fasiliteter for å betjene våre kunder og utvikle våre løsninger.',
			i4factory:
				'Optiram & i4Factory har inngått ein <strong>sammarbeidsavtale</strong>. i4Factory utvikler og leverer autonome maskineringsfabrikker. Me gleder oss til videre sammerarbeid!<br><a href="https://www.i4factory.no/nb/" target="_blank" rel="noopener noreferrer">www.i4factory.no</a>',
			sveinung:
				'Optiram har <strong>ansatt Sveinung</strong> som ny daglig leder. Han tiltrer stillingen i Juni 2025 og har lang og solid erfaring innen automasjon.',
			eiere:
				'Optiram har fått <strong>nye eigere</strong> Januar 2025. Dei nye eigarane har lang erfaring innan automasjon.'
		}
	},
	en: {
		nav: { home: 'HOME', news: 'NEWS', about: 'ABOUT' },
		footer: { phone: 'Mobile', email: 'Email', country: 'Norway' },
		home: {
			heroWords: ['OPTIMIZATION', 'AUTOMATION', 'ROBOTICS'],
			heroSubtitle:
				'Your partner for next-generation production and automation solutions',
			solutions: 'Our solutions',
			aboutBtn: 'About us',
			welcomeTitle: 'Welcome to Optiram',
			welcomeSubtitle:
				'Your partner for next-generation production and automation solutions',
			robotikk: {
				title: 'Robotics and automation',
				body:
					'Our passion is to create innovative solutions that increase quality and efficiency, and that deliver long-term value for you and your business. Through close collaboration we develop and deliver robotic and automation solutions that optimize flow, reduce costs and increase production capacity.<br><br>We combine technical insight with practical understanding of production processes, placing great emphasis on reliability, precision and repeatable quality. Our solutions are tailored to your needs – from simple robotic cells to complex, fully automated production lines.<br>Remember that a robot never sleeps, and can have things ready for you by the time you arrive at work.'
			},
			automation: {
				title: 'Automation systems',
				body:
					'We have extensive experience delivering complete automation systems to industry. Our solutions are tailored to meet your technical and operational requirements, with a particular focus on reliability, usability and efficiency.<br><br>We take responsibility for the entire delivery – from concept and engineering to programming, testing and commissioning. Through close collaboration with our customers we ensure the solution fits both current needs and future development.<br><br>With solid expertise in PLC, HMI and drive systems, we deliver stable and future-oriented solutions that are easy to operate and maintain.'
			},
			programmering: {
				title: 'Programming and engineering services',
				body:
					'We offer programming and engineering services within industrial automation, robotics and digital solutions. Through close and professional collaboration we deliver solutions tailored to your needs and existing systems.<br><br>We have solid experience with project execution, PLC and HMI programming, as well as development of web-based solutions.<br><br>Our expertise includes systems from Beckhoff, Siemens, Beijer, Wago, Mitsubishi and Omron, as well as platforms based on CODESYS.'
			},
			opticloud: {
				title: 'OptiCloud and Opti-IoT',
				body:
					'With OptiCloud and Opti-IoT we collect, analyze and visualize data in real time. This gives you better insight into operation, performance and condition – and a solid foundation for data-driven decisions.<br><br>Our solutions connect machines, sensors and systems in a secure and scalable way, making it easy to monitor processes both locally and via cloud-based solutions. The information is presented in clear dashboards that give operators and management quick access to the right data at the right time.<br><br>Advanced algorithms identify deviations and optimization potential and propose targeted measures. The result is better resource utilization, higher quality and more stable operation.'
			},
			cookie: 'We use cookies to improve your experience.',
			accept: 'Accept'
		},
		about: {
			title: 'About us',
			intro1:
				'Optiram was established in 2019, and in early 2025 we took over the company from the previous owners. Together we have nearly 50 years of experience within automation. We have broad experience from industry, marine and offshore, and have worked as fitters, service technicians, project managers and product developers. In recent years our main focus has been product development, but we are happy to put on our safety boots and go out on assignments when needed.',
			intro2:
				'Our vision is to deliver smart, efficient and reliable automation solutions that help businesses optimize their processes and increase productivity.',
			whereTitle: 'Where to find us?',
			country: 'Norway',
			employees: 'Team',
			ceoRole: 'CEO – Managing Director',
			ctoRole: 'CTO – Technical Director'
		},
		news: {
			title: 'All news',
			kameleon:
				'In December 2025 Optiram became <strong>system integrator</strong> for Kameleon Robotics. Kameleon Robotics is the distributor of Universal Robots in Norway.<br><a href="https://www.kameleonrobotics.no/" target="_blank" rel="noopener noreferrer">www.kameleonrobotics.no</a>',
			stian:
				'Optiram has <strong>hired Stian</strong> as its new technical director. He starts in October 2025 and brings long and solid experience within automation.',
			lokaler:
				'Optiram is moving into <strong>new premises</strong> in Rubbestadneset in October 2025. This gives us better facilities to serve our customers and develop our solutions.',
			i4factory:
				'Optiram & i4Factory have entered into a <strong>partnership agreement</strong>. i4Factory develops and delivers autonomous machining factories. We look forward to the continued collaboration!<br><a href="https://www.i4factory.no/nb/" target="_blank" rel="noopener noreferrer">www.i4factory.no</a>',
			sveinung:
				'Optiram has <strong>hired Sveinung</strong> as its new managing director. He starts in June 2025 and brings long and solid experience within automation.',
			eiere:
				'Optiram got <strong>new owners</strong> in January 2025. The new owners have long experience within automation.'
		}
	}
};

export const t = derived(locale, ($locale) => translations[$locale] ?? translations.no);
