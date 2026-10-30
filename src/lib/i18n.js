import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

function readStored() {
	if (!browser) return null;
	try {
		return localStorage.getItem('locale');
	} catch {
		return null;
	}
}

// Siden bygges på norsk. Lagret språkvalg hentes først etter at siden er lastet (se initLocale).
const stored = readStored();

/** @type {import('svelte/store').Writable<'no' | 'en'>} */
export const locale = writable('no');

/** Kalles én gang fra layout når siden er lastet i nettleseren. */
export function initLocale() {
	if (stored === 'en' || stored === 'no') locale.set(stored);
}

if (browser) {
	locale.subscribe((value) => {
		try {
			localStorage.setItem('locale', value);
		} catch {
			/* privat modus o.l. – språket gjelder da bare denne økten */
		}
		document.documentElement.lang = value === 'en' ? 'en' : 'no';
	});
}

/*
 * Alle tekster på nettsiden.
 * Rekkefølgen i lister (tjenester, trinn, nyheter, historikk) er rekkefølgen på siden.
 * Nyheter: legg nye saker øverst i lista – den øverste vises stort.
 */
export const translations = {
	no: {
		meta: {
			homeTitle: 'Optiram – Optimalisering, robotikk og automasjon',
			homeDescription:
				'Optiram utvikler og leverer robot- og automasjonsløsninger, PLC/HMI-programmering og prosjektering for industri, marine og offshore.',
			aboutTitle: 'Om oss – Optiram',
			aboutDescription:
				'Optiram ble etablert i 2019 og har nærmere 50 års samlet erfaring innen automasjon. Møt teamet på Rubbestadneset.',
			newsTitle: 'Nyheter – Optiram',
			newsDescription: 'Siste nytt fra Optiram: ansettelser, partnere og selskapsnytt.'
		},
		nav: {
			home: 'Hjem',
			news: 'Nyheter',
			about: 'Om oss',
			contact: 'Kontakt oss',
			mainMenu: 'Hovedmeny',
			openMenu: 'Åpne meny',
			closeMenu: 'Lukk meny',
			toDark: 'Bytt til mørk modus',
			toLight: 'Bytt til lys modus',
			language: 'Språk',
			homeLink: 'Optiram – til forsiden'
		},
		footer: {
			tagline: 'Optimalisering, robotikk og automasjon.',
			visit: 'Besøk oss',
			pages: 'Sider',
			contact: 'Kontakt',
			country: 'Norge',
			phone: 'Telefon',
			email: 'E-post'
		},
		cookie: {
			text: 'Vi bruker informasjonskapsler (cookies) for å forbedre opplevelsen.',
			accept: 'Godta'
		},
		roles: {
			ceo: 'CEO – Daglig leder',
			cto: 'CTO – Teknisk leder',
			senior: 'Senior automasjonsingeniør',
			ceoShort: 'Daglig leder',
			ctoShort: 'Teknisk leder'
		},
		home: {
			eyebrow: 'Optimalisering · Robotikk · Automasjon',
			title: 'Neste generasjons produksjon og automasjon',
			lead: 'Vi utvikler og leverer robot- og automasjonsløsninger som øker kvalitet, effektivitet og kapasitet – fra enkle robotceller til helautomatiserte produksjonslinjer.',
			heroAlt: 'Optiram-robotarm som betjener en maskin',
			ctaSolutions: 'Våre løsninger',
			ctaAbout: 'Om oss',
			solutionsEyebrow: 'Våre løsninger',
			solutionsTitle: 'Fra enkel robotcelle til helautomatisert linje',
			solutionsLead:
				'Løsningene tilpasses dine behov og eksisterende systemer, med vekt på driftssikkerhet, presisjon og repeterbar kvalitet.',
			readMore: 'Les mer',
			close: 'Lukk',
			showLess: 'Vis mindre',
			services: [
				{
					id: 'robotikk',
					title: 'Robotikk og automasjon',
					alt: 'Robotarm med griper som holder et emne',
					short:
						'Robotløsninger som optimaliserer flyt, reduserer kostnader og øker kapasiteten i produksjonen.',
					paras: [
						'Vår lidenskap er å skape innovative løsninger som øker kvalitet, effektivitet og som gir langsiktig verdiskaping for deg og din virksomhet. Gjennom tett samarbeid utvikler og leverer vi robot- og automasjonsløsninger som optimaliserer flyt, reduserer kostnader og øker kapasiteten i produksjonen.',
						'Vi kombinerer teknisk innsikt med praktisk forståelse for produksjonsprosesser, og legger stor vekt på driftssikkerhet, presisjon og repeterbar kvalitet. Våre løsninger tilpasses dine behov – fra enkle robotceller til komplekse, helautomatiserte produksjonslinjer.'
					]
				},
				{
					id: 'automasjon',
					title: 'Automasjonssystemer',
					alt: 'Åpent styreskap med PLC, I/O-moduler og rekkeklemmer',
					short:
						'Komplette leveranser – fra konsept og prosjektering til programmering, testing og idriftsettelse.',
					paras: [
						'Vi har lang erfaring med levering av komplette automasjonssystemer til industrien. Våre løsninger skreddersys for å møte dine tekniske og operasjonelle krav, med særlig fokus på driftssikkerhet, brukervennlighet og effektivitet.',
						'Vi tar ansvar for hele leveransen – fra konsept og prosjektering til programmering, testing og idriftsettelse. Gjennom tett samarbeid med kundene våre sikrer vi at løsningen er tilpasset både dagens behov og fremtidig utvikling.',
						'Med solid kompetanse innen PLC-, HMI- og drivsystemer leverer vi stabile og fremtidsrettede løsninger som er enkle å drifte og vedlikeholde.'
					]
				},
				{
					id: 'programmering',
					title: 'Programmering og prosjektering',
					alt: 'Bærbar PC med programmering og Optiram-kopp',
					short: 'PLC- og HMI-programmering, prosjektgjennomføring og webbaserte løsninger.',
					paras: [
						'Vi tilbyr programmering og prosjekteringstjenester innen industriell automasjon, robotikk og digitale løsninger. Gjennom tett og profesjonelt samarbeid leverer vi løsninger som er tilpasset dine behov og eksisterende systemer.',
						'Vi har solid erfaring med prosjektgjennomføring, PLC- og HMI-programmering samt utvikling av webbaserte løsninger.',
						'Vår kompetanse omfatter blant annet systemer fra Beckhoff, Siemens, Beijer, Wago, Mitsubishi og Omron, samt plattformer basert på CODESYS.'
					]
				}
			],
			processEyebrow: 'Slik jobber vi',
			processTitle: 'Vi tar ansvar for hele leveransen',
			step: 'Trinn',
			steps: [
				{
					title: 'Konsept',
					text: 'Vi kartlegger prosessen og de tekniske og operasjonelle kravene sammen med deg.'
				},
				{
					title: 'Prosjektering',
					text: 'Løsningen skreddersys for dagens behov og fremtidig utvikling.'
				},
				{
					title: 'Programmering og test',
					text: 'PLC, HMI og drivsystemer programmeres og testes grundig.'
				},
				{
					title: 'Idriftsettelse',
					text: 'Stabile løsninger som er enkle å drifte og vedlikeholde.'
				}
			],
			platformsLabel: 'Vi jobber med systemer fra blant annet',
			quote: '«Husk at en robot ikke sover – den kan ha klargjort for deg når du kommer på jobb.»',
			contactTitle: 'Har du et prosjekt på gang?',
			contactLead: 'Ta kontakt, så finner vi løsningen sammen.'
		},
		about: {
			eyebrow: 'Om oss',
			title: 'Automasjonsfolk med vernesko i bagasjen',
			intro1:
				'Optiram ble etablert i 2019, og tidlig i 2025 overtok vi selskapet fra de tidligere eierne. Til sammen har vi nærmere 50 års erfaring innen automasjonsfaget.',
			intro2:
				'Vi har bred erfaring fra industri, marine og offshore, og har arbeidet som montører, serviceteknikere, prosjektledere og produktutviklere. De siste årene har hovedfokuset vært på produktutvikling, men vi tar gjerne på oss vernesko og er ute på oppdrag når det er behov.',
			visionEyebrow: 'Vår visjon',
			vision:
				'Å levere smarte, effektive og pålitelige automasjonsløsninger som hjelper bedrifter med å optimalisere sine prosesser og øke produktiviteten.',
			teamEyebrow: 'Ansatte',
			teamTitle: 'Menneskene bak Optiram',
			historyEyebrow: 'Historikk',
			historyTitle: 'Fra 2019 til i dag',
			history: [
				{ date: '2019', text: 'Optiram etableres.' },
				{ date: 'Jan 2025', text: 'Nye eiere med lang erfaring innen automasjon overtar selskapet.' },
				{ date: 'Jun 2025', text: 'Sveinung Mæland blir daglig leder.' },
				{
					date: 'Okt 2025',
					text: 'Stian S. Alvsvåg blir teknisk leder, og vi flytter inn i nye lokaler på Rubbestadneset.'
				},
				{
					date: 'Des 2025',
					text: 'Systemintegrator for Kameleon Robotics, distributør av Universal Robots i Norge.'
				},
				{ date: 'Sep 2026', text: 'Torbjørn Grønås begynner som senior automasjonsingeniør.' }
			],
			whereEyebrow: 'Hvor finner du oss?',
			whereTitle: 'Rubbestadneset, Bømlo',
			directions: 'Veibeskrivelse',
			sendEmail: 'Send e-post',
			mapTitle: 'Kart som viser Austbøvegen 44, Rubbestadneset'
		},
		news: {
			eyebrow: 'Nyheter',
			title: 'Siste nytt fra Optiram',
			tags: { hire: 'Ansettelse', partner: 'Partner', company: 'Selskap' },
			items: [
				{
					id: 'torbjorn',
					tag: 'hire',
					date: 'September 2026',
					title: 'Optiram har ansatt Torbjørn Grønås',
					text: 'Torbjørn tiltrer stillingen 1. september 2026 og har lang og solid erfaring innen automasjon.'
				},
				{
					id: 'kameleon',
					tag: 'partner',
					date: 'Desember 2025',
					title: 'Systemintegrator for Kameleon Robotics',
					text: 'Kameleon Robotics er distributør av Universal Robots i Norge.',
					link: { href: 'https://www.kameleonrobotics.no/', label: 'kameleonrobotics.no' }
				},
				{
					id: 'stian',
					tag: 'hire',
					date: 'Oktober 2025',
					title: 'Stian blir ny teknisk leder',
					text: 'Stian tiltrer i oktober 2025 og har lang og solid erfaring innen automasjon.'
				},
				{
					id: 'lokaler',
					tag: 'company',
					date: 'Oktober 2025',
					title: 'Nye lokaler på Rubbestadneset',
					text: 'Bedre fasiliteter for å betjene kundene våre og utvikle løsningene våre.'
				},
				{
					id: 'i4factory',
					tag: 'partner',
					date: '',
					title: 'Samarbeidsavtale med i4Factory',
					text: 'i4Factory utvikler og leverer autonome maskineringsfabrikker. Vi gleder oss til videre samarbeid!',
					link: { href: 'https://www.i4factory.no/nb/', label: 'i4factory.no' }
				},
				{
					id: 'sveinung',
					tag: 'hire',
					date: 'Juni 2025',
					title: 'Sveinung blir ny daglig leder',
					text: 'Sveinung tiltrer i juni 2025 og har lang og solid erfaring innen automasjon.'
				},
				{
					id: 'eiere',
					tag: 'company',
					date: 'Januar 2025',
					title: 'Optiram får nye eiere',
					text: 'De nye eierne har lang erfaring innen automasjon.'
				}
			]
		}
	},

	en: {
		meta: {
			homeTitle: 'Optiram – Optimization, robotics and automation',
			homeDescription:
				'Optiram develops and delivers robotic and automation solutions, PLC/HMI programming and engineering for industry, marine and offshore.',
			aboutTitle: 'About us – Optiram',
			aboutDescription:
				'Optiram was founded in 2019 and has nearly 50 years of combined experience in automation. Meet the team in Rubbestadneset, Norway.',
			newsTitle: 'News – Optiram',
			newsDescription: 'The latest from Optiram: new hires, partners and company news.'
		},
		nav: {
			home: 'Home',
			news: 'News',
			about: 'About',
			contact: 'Contact us',
			mainMenu: 'Main menu',
			openMenu: 'Open menu',
			closeMenu: 'Close menu',
			toDark: 'Switch to dark mode',
			toLight: 'Switch to light mode',
			language: 'Language',
			homeLink: 'Optiram – home'
		},
		footer: {
			tagline: 'Optimization, robotics and automation.',
			visit: 'Visit us',
			pages: 'Pages',
			contact: 'Contact',
			country: 'Norway',
			phone: 'Phone',
			email: 'Email'
		},
		cookie: {
			text: 'We use cookies to improve your experience.',
			accept: 'Accept'
		},
		roles: {
			ceo: 'CEO – Managing Director',
			cto: 'CTO – Technical Director',
			senior: 'Senior Automation Engineer',
			ceoShort: 'Managing Director',
			ctoShort: 'Technical Director'
		},
		home: {
			eyebrow: 'Optimization · Robotics · Automation',
			title: 'Next-generation production and automation',
			lead: 'We develop and deliver robotic and automation solutions that increase quality, efficiency and capacity – from simple robot cells to fully automated production lines.',
			heroAlt: 'Optiram robot arm tending a machine',
			ctaSolutions: 'Our solutions',
			ctaAbout: 'About us',
			solutionsEyebrow: 'Our solutions',
			solutionsTitle: 'From a single robot cell to a fully automated line',
			solutionsLead:
				'Our solutions are tailored to your needs and existing systems, with a focus on reliability, precision and repeatable quality.',
			readMore: 'Read more',
			close: 'Close',
			showLess: 'Show less',
			services: [
				{
					id: 'robotikk',
					title: 'Robotics and automation',
					alt: 'Robot arm with a gripper holding a workpiece',
					short:
						'Robotic solutions that optimize flow, reduce costs and increase production capacity.',
					paras: [
						'Our passion is to create innovative solutions that increase quality and efficiency, and that deliver long-term value for you and your business. Through close collaboration we develop and deliver robotic and automation solutions that optimize flow, reduce costs and increase production capacity.',
						'We combine technical insight with practical understanding of production processes, placing great emphasis on reliability, precision and repeatable quality. Our solutions are tailored to your needs – from simple robotic cells to complex, fully automated production lines.'
					]
				},
				{
					id: 'automasjon',
					title: 'Automation systems',
					alt: 'Open control cabinet with PLC, I/O modules and terminal blocks',
					short:
						'Complete deliveries – from concept and engineering to programming, testing and commissioning.',
					paras: [
						'We have extensive experience delivering complete automation systems to industry. Our solutions are tailored to meet your technical and operational requirements, with a particular focus on reliability, usability and efficiency.',
						'We take responsibility for the entire delivery – from concept and engineering to programming, testing and commissioning. Through close collaboration with our customers we ensure the solution fits both current needs and future development.',
						'With solid expertise in PLC, HMI and drive systems, we deliver stable and future-oriented solutions that are easy to operate and maintain.'
					]
				},
				{
					id: 'programmering',
					title: 'Programming and engineering',
					alt: 'Laptop with programming and an Optiram mug',
					short: 'PLC and HMI programming, project execution and web-based solutions.',
					paras: [
						'We offer programming and engineering services within industrial automation, robotics and digital solutions. Through close and professional collaboration we deliver solutions tailored to your needs and existing systems.',
						'We have solid experience with project execution, PLC and HMI programming, as well as development of web-based solutions.',
						'Our expertise includes systems from Beckhoff, Siemens, Beijer, Wago, Mitsubishi and Omron, as well as platforms based on CODESYS.'
					]
				}
			],
			processEyebrow: 'How we work',
			processTitle: 'We take responsibility for the entire delivery',
			step: 'Step',
			steps: [
				{
					title: 'Concept',
					text: 'Together with you, we map the process and the technical and operational requirements.'
				},
				{
					title: 'Engineering',
					text: 'The solution is tailored to current needs and future development.'
				},
				{
					title: 'Programming and testing',
					text: 'PLC, HMI and drive systems are programmed and thoroughly tested.'
				},
				{
					title: 'Commissioning',
					text: 'Stable solutions that are easy to operate and maintain.'
				}
			],
			platformsLabel: 'We work with systems from, among others',
			quote: '“Remember that a robot never sleeps – it can have things ready for you by the time you arrive at work.”',
			contactTitle: 'Have a project in mind?',
			contactLead: 'Get in touch and we will find the solution together.'
		},
		about: {
			eyebrow: 'About us',
			title: 'Automation people with safety boots packed',
			intro1:
				'Optiram was established in 2019, and in early 2025 we took over the company from the previous owners. Together we have nearly 50 years of experience within automation.',
			intro2:
				'We have broad experience from industry, marine and offshore, and have worked as fitters, service technicians, project managers and product developers. In recent years our main focus has been product development, but we are happy to put on our safety boots and go out on assignments when needed.',
			visionEyebrow: 'Our vision',
			vision:
				'To deliver smart, efficient and reliable automation solutions that help businesses optimize their processes and increase productivity.',
			teamEyebrow: 'Team',
			teamTitle: 'The people behind Optiram',
			historyEyebrow: 'History',
			historyTitle: 'From 2019 to today',
			history: [
				{ date: '2019', text: 'Optiram is founded.' },
				{
					date: 'Jan 2025',
					text: 'New owners with long experience in automation take over the company.'
				},
				{ date: 'Jun 2025', text: 'Sveinung Mæland becomes managing director.' },
				{
					date: 'Oct 2025',
					text: 'Stian S. Alvsvåg becomes technical director, and we move into new premises in Rubbestadneset.'
				},
				{
					date: 'Dec 2025',
					text: 'System integrator for Kameleon Robotics, the Universal Robots distributor in Norway.'
				},
				{ date: 'Sep 2026', text: 'Torbjørn Grønås joins as senior automation engineer.' }
			],
			whereEyebrow: 'Where to find us',
			whereTitle: 'Rubbestadneset, Bømlo',
			directions: 'Get directions',
			sendEmail: 'Send email',
			mapTitle: 'Map showing Austbøvegen 44, Rubbestadneset'
		},
		news: {
			eyebrow: 'News',
			title: 'The latest from Optiram',
			tags: { hire: 'New hire', partner: 'Partner', company: 'Company' },
			items: [
				{
					id: 'torbjorn',
					tag: 'hire',
					date: 'September 2026',
					title: 'Optiram has hired Torbjørn Grønås',
					text: 'Torbjørn starts on 1 September 2026 and brings long and solid experience within automation.'
				},
				{
					id: 'kameleon',
					tag: 'partner',
					date: 'December 2025',
					title: 'System integrator for Kameleon Robotics',
					text: 'Kameleon Robotics is the distributor of Universal Robots in Norway.',
					link: { href: 'https://www.kameleonrobotics.no/', label: 'kameleonrobotics.no' }
				},
				{
					id: 'stian',
					tag: 'hire',
					date: 'October 2025',
					title: 'Stian becomes technical director',
					text: 'Stian starts in October 2025 and brings long and solid experience within automation.'
				},
				{
					id: 'lokaler',
					tag: 'company',
					date: 'October 2025',
					title: 'New premises in Rubbestadneset',
					text: 'Better facilities to serve our customers and develop our solutions.'
				},
				{
					id: 'i4factory',
					tag: 'partner',
					date: '',
					title: 'Partnership agreement with i4Factory',
					text: 'i4Factory develops and delivers autonomous machining factories. We look forward to the continued collaboration!',
					link: { href: 'https://www.i4factory.no/nb/', label: 'i4factory.no' }
				},
				{
					id: 'sveinung',
					tag: 'hire',
					date: 'June 2025',
					title: 'Sveinung becomes managing director',
					text: 'Sveinung starts in June 2025 and brings long and solid experience within automation.'
				},
				{
					id: 'eiere',
					tag: 'company',
					date: 'January 2025',
					title: 'Optiram gets new owners',
					text: 'The new owners have long experience within automation.'
				}
			]
		}
	}
};

export const t = derived(locale, ($locale) => translations[$locale] ?? translations.no);
