/*
 * Faste opplysninger som er like på norsk og engelsk:
 * kontaktpersoner, adresse og hvilke bilder som brukes hvor.
 * Tekstene (titler, roller osv.) ligger i i18n.js.
 */

/** @type {Record<string, {name: string, role: 'ceo'|'cto'|'senior', roleShort: 'ceoShort'|'ctoShort'|'senior', phone: string, tel: string, email: string, img: string, imgPos: string}>} */
export const people = {
	sveinung: {
		name: 'Sveinung Mæland',
		role: 'ceo',
		roleShort: 'ceoShort',
		phone: '+47 909 46 768',
		tel: '+4790946768',
		email: 'sm@optiram.no',
		img: '/img/sveinung.webp',
		imgPos: 'center 20%'
	},
	stian: {
		name: 'Stian S. Alvsvåg',
		role: 'cto',
		roleShort: 'ctoShort',
		phone: '+47 905 72 687',
		tel: '+4790572687',
		email: 'ssa@optiram.no',
		img: '/img/stian.webp',
		imgPos: 'center 25%'
	},
	torbjorn: {
		name: 'Torbjørn Grønås',
		role: 'senior',
		roleShort: 'senior',
		phone: '+47 945 08 673',
		tel: '+4794508673',
		email: 'tg@optiram.no',
		img: '/img/torbjorn.webp',
		imgPos: 'center 25%'
	}
};

/** Rekkefølgen på teamet på Om oss-siden */
export const team = ['sveinung', 'stian', 'torbjorn'];

/** Kontaktpersonene nederst på forsiden */
export const contacts = ['sveinung', 'stian'];

export const address = {
	street: 'Austbøvegen 44',
	postal: '5420 Rubbestadneset',
	mapsLink: 'https://maps.google.com/?q=Austb%C3%B8vegen+44,+5420+Rubbestadneset',
	mapEmbed:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2265.210944828763!2d5.2728393!3d59.8162208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463c80d9df0d5573:0x9cac4120e3bb051e!2sAustb%C3%B8vegen%2044%2C%205420%20Rubbestadneset!5e1!3m2!1sen!2sno!4v1735740000000'
};

/** Bilde per tjeneste. `pos` styrer hvilken del av bildet som vises i kortet. */
/** @type {Record<string, {src: string, pos: string}>} */
export const serviceImages = {
	robotikk: { src: '/img/robotikk.webp', pos: 'center 70%' },
	automasjon: { src: '/img/automasjon.webp', pos: 'center 20%' },
	programmering: { src: '/img/programmering.webp', pos: 'center' }
};

export const platforms = [
	'Beckhoff',
	'Siemens',
	'Beijer',
	'Wago',
	'Mitsubishi',
	'Omron',
	'CODESYS',
	'Universal Robots'
];

/**
 * Bilde per nyhetssak.
 * kind: 'photo' = foto som fyller hele feltet, 'logo' = logo på farget bakgrunn.
 * tone: 'light' | 'dark' | 'accent' – bakgrunnsfarge bak logoer.
 */
/** @type {Record<string, {kind: 'photo'|'logo', src: string, pos?: string, tone?: 'light'|'dark'|'accent'}>} */
export const newsImages = {
	torbjorn: { kind: 'photo', src: '/img/torbjorn.webp', pos: 'center 30%' },
	kameleon: { kind: 'logo', src: '/img/kameleon.svg', tone: 'light' },
	stian: { kind: 'photo', src: '/img/stian.webp', pos: 'center 25%' },
	lokaler: { kind: 'logo', src: 'optiram', tone: 'accent' },
	i4factory: { kind: 'logo', src: '/img/i4factory.png', tone: 'dark' },
	sveinung: { kind: 'photo', src: '/img/sveinung.webp', pos: 'center 20%' },
	eiere: { kind: 'logo', src: 'optiram', tone: 'accent' }
};
