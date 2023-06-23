import { nip19 } from 'nostr-tools';


export const PROD = true;

// Used by client to interact with the backend service
export const API_BASE_URL = 'https://api.satellite.earth/v1';

// Used by client to load media from content deliver network
export const CDN_BASE_URL = 'https://cdn.satellite.earth';

// Relays for non-signed in users
export const DEFAULT_RELAYS = [
	'wss://relay.damus.io',
	'wss://nos.lol',
	'wss://relay.current.fyi',
	'wss://relay.orangepill.dev',
	'wss://relay.nostrplebs.com',
	'wss://eden.nostr.land',
	'wss://relay.plebstr.com',
	'wss://relay.nostr.band',
	'wss://nostr.wine'
];

export const COLORS = {
	primary: 'rgb(23, 24, 25)',
	secondary: 'rgb(47, 54, 61)',
	secondaryBright: 'rgb(105, 116, 128)',
	satelliteGold: 'rgb(219, 170, 49)',
	blue: 'rgb(62, 137, 184)',
	red: 'rgb(219, 40, 40)',
	green: 'rgb(40, 167, 69)'
};

export const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

// Layout config
export const GALLERY_MIN_COL_WIDTH = 380;
export const CONTENT_MAX_WIDTH = 1600;
export const MOBILE_BREAKPOINT = 884;
export const EDITOR_LINE_HEIGHT = 24;
export const MENU_WIDTH = 192;
export const NAV_HEIGHT = 48;

// Popular accounts for the "featured" feed so  new users
// who are not signed in have something to look at
export const FEATURED_AUTHORS = ([
	'npub1xtscya34g58tk0z605fvr788k263gsu6cy9x0mhnm87echrgufzsevkk5s',
	'npub1sg6plzptd64u62a878hep2kev88swjh3tw00gjsfl8f237lmu63q0uf63m',
	'npub1qqqqqqyz0la2jjl752yv8h7wgs3v098mh9nztd4nr6gynaef6uqqt0n47m',
	'npub1qny3tkh0acurzla8x3zy4nhrjz5zd8l9sy9jys09umwng00manysew95gx',
	'npub1z4m7gkva6yxgvdyclc7zp0vz4ta0s2d9jh8g83w03tp5vdf3kzdsxana6p',
	'npub1dergggklka99wwrs92yz8wdjs952h2ux2ha2ed598ngwu9w7a6fsh9xzpc',
	'npub180cvv07tjdrrgpa0j7j7tmnyl2yr6yr7l8j4s3evf6u64th6gkwsyjh6w6',
	'npub18ams6ewn5aj2n3wt2qawzglx9mr4nzksxhvrdc4gzrecw7n5tvjqctp424',
	'npub107jk7htfv243u0x5ynn43scq9wrxtaasmrwwa8lfu2ydwag6cx2quqncxg',
	'npub1sn0wdenkukak0d9dfczzeacvhkrgz92ak56egt7vdgzn8pv2wfqqhrjdv9',
	'npub1s5yq6wadwrxde4lhfs56gn64hwzuhnfa6r9mj476r5s4hkunzgzqrs6q7z',
	'npub1lrnvvs6z78s9yjqxxr38uyqkmn34lsaxznnqgd877j4z2qej3j5s09qnw5',
	'npub1cj8znuztfqkvq89pl8hceph0svvvqk0qay6nydgk9uyq7fhpfsgsqwrz4u',
	'npub1hu3hdctm5nkzd8gslnyedfr5ddz3z547jqcl5j88g4fame2jd08qh6h8nh',
	'npub1tvqc82mv8cezhax5r34n4muc2c4pgjz8kaye2smj032nngg52clq0rkrq4',
	'npub16vrkgd28wq6n0h77lqgu8h4fdu0eapxgyj0zqq6ngfvjf2vs3nuq5mp2va',
	'npub1cjw49ftnxene9wdxujz3tp7zspp0kf862cjud4nm3j2usag6eg2smwj2rh',
	'npub1cn4t4cd78nm900qc2hhqte5aa8c9njm6qkfzw95tszufwcwtcnsq7g3vle',
	'npub1sqaxzwvh5fhgw9q3d7v658ucapvfeds3dcd2587fcwyesn7dnwuqt2r45v',
	'npub1gcxzte5zlkncx26j68ez60fzkvtkm9e0vrwdcvsjakxf9mu9qewqlfnj5z',
	'npub1csamkk8zu67zl9z4wkp90a462v53q775aqn5q6xzjdkxnkvcpd7srtz4x9',
	'npub1jt0x3vsnqtazzda3ewa8ykdch2t8k566qhrd9vyy0k0ntleu744q8h6q3n',
	'npub1a2cww4kn9wqte4ry70vyfwqyqvpswksna27rtxd8vty6c74era8sdcw83a',
	'npub17u5dneh8qjp43ecfxr6u5e9sjamsmxyuekrg2nlxrrk6nj9rsyrqywt4tp',
	'npub1hqaz3dlyuhfqhktqchawke39l92jj9nt30dsgh2zvd9z7dv3j3gqpkt56s',
	'npub1r0rs5q2gk0e3dk3nlc7gnu378ec6cnlenqp8a3cjhyzu6f8k5sgs4sq9ac',
	'npub1g53mukxnjkcmr94fhryzkqutdz2ukq4ks0gvy5af25rgmwsl4ngq43drvk',
	'npub1pyp9fqq60689ppds9ec3vghsm7s6s4grfya0y342g2hs3a0y6t0segc0qq',
	'npub1clk6vc9xhjp8q5cws262wuf2eh4zuvwupft03hy4ttqqnm7e0jrq3upup9',
	'npub12rv5lskctqxxs2c8rf2zlzc7xx3qpvzs3w4etgemauy9thegr43sf485vg',
	'npub1rxysxnjkhrmqd3ey73dp9n5y5yvyzcs64acc9g0k2epcpwwyya4spvhnp8',
	'npub1du8vg3lqmfddfwdr52h08etty3speg45dttmyvup6x2pqq5jxf6qdhu524',
	'npub1v6xwae25wh6etmqw3m6yce9lnk5dnhtqpzk9fhxjfvjsryctjc8q2kxk5t',
	'npub1cn4t4cd78nm900qc2hhqte5aa8c9njm6qkfzw95tszufwcwtcnsq7g3vle',
	'npub13pnmakf738yn6rv2ex9jgs7924renmderyp5d9rtztsr7ymxg3gqej06vw',
	'npub1ktt8phjnkfmfrsxrgqpztdjuxk3x6psf80xyray0l3c7pyrln49qhkyhz0',
	'npub14xu4ykvj5jr2594nc8fln5mqf09q3u7ptdcj6ur3rwdwekxrm3zq86428l',
	'npub1teawtzxh6y02cnp9jphxm2q8u6xxfx85nguwg6ftuksgjctvavvqnsgq5u',
	'npub1504jj42t6flu5l6n7e389e9mt8gxduhnzuyv7dq4gr95w20mmpqscx0cg0',
	'npub1fl7pr0azlpgk469u034lsgn46dvwguz9g339p03dpetp9cs5pq5qxzeknp',
	'npub1nxy4qpqnld6kmpphjykvx2lqwvxmuxluddwjamm4nc29ds3elyzsm5avr7',
	'npub15wcvuhts6rdj9zzhq6etru2yc6ry5ljg9zk070u0q89xk065452sjvqy0q',
	'npub1l2vyh47mk2p0qlsku7hg0vn29faehy9hy34ygaclpn66ukqp3afqutajft',
	'npub198auqkkwueclk4u3st9r8v8yrdz4hv0e2e9epg7c7teemm3lyausht0p3g',
	'npub1excellx58e497gan6fcsdnseujkjm7ym5yp3m4rp0ud4j8ss39js2pn72a',
	'npub10jnx6stxk9h4fgtgdqv3hgwx8p4fwe3y73357wykmxm8gz3c3j3sjlvcrd',
	'npub18a63c0ht3xyc577yj3jh2fu7dplj0uzrhlw00lqg9uwzzwq6f89qej7r8q',
	'npub14hlzw4sywt23drreaqs8ruf00dsrnnv5hfnyu49g2hpheq836umssur6nl',
	'npub1rqe7upz9nl4jef9wdyx47vfxnt2g3357tl5s8fpt2vkxwlz2s9cq9w3jdt',
	'npub14f26g7dddy6dpltc70da3pg4e5w2p4apzzqjuugnsr2ema6e3y6s2xv7lu',
	'npub1lunaq893u4hmtpvqxpk8hfmtkqmm7ggutdtnc4hyuux2skr4ttcqr827lj',
	'npub16dmvfhm7uwkxnhxg30k6aczw23wxhgvs62n3puzl5tykpa4aa8esja83yd',
	'npub19mduaf5569jx9xz555jcx3v06mvktvtpu0zgk47n4lcpjsz43zzqhj6vzk'
]).map(npub => {
	return nip19.decode(npub).data;
});

// Country code mapped to default currency
export const DEFAULT_LOCALE_CURRENCY = {
	AD: 'EUR',
	AE: 'AED',
	AF: 'AFN',
	AG: 'XCD',
	AI: 'XCD',
	AL: 'ALL',
	AM: 'AMD',
	AO: 'AOA',
	AR: 'ARS',
	AS: 'USD',
	AT: 'EUR',
	AU: 'AUD',
	AW: 'AWG',
	AX: 'EUR',
	AZ: 'AZN',
	BA: 'BAM',
	BB: 'BBD',
	BD: 'BDT',
	BE: 'EUR',
	BF: 'XOF',
	BG: 'BGN',
	BH: 'BHD',
	BI: 'BIF',
	BJ: 'XOF',
	BL: 'EUR',
	BM: 'BMD',
	BN: 'BND',
	BO: 'BOB',
	BQ: 'USD',
	BR: 'BRL',
	BS: 'BSD',
	BT: 'BTN',
	BV: 'NOK',
	BW: 'BWP',
	BY: 'BYN',
	BZ: 'BZD',
	CA: 'CAD',
	CC: 'AUD',
	CD: 'CDF',
	CF: 'XAF',
	CG: 'XAF',
	CH: 'CHF',
	CI: 'XOF',
	CK: 'NZD',
	CL: 'CLP',
	CM: 'XAF',
	CN: 'CNY',
	CO: 'COP',
	CR: 'CRC',
	CU: 'CUP',
	CV: 'CVE',
	CW: 'ANG',
	CX: 'AUD',
	CY: 'EUR',
	CZ: 'CZK',
	DE: 'EUR',
	DJ: 'DJF',
	DK: 'DKK',
	DM: 'XCD',
	DO: 'DOP',
	DZ: 'DZD',
	EC: 'USD',
	EE: 'EUR',
	EG: 'EGP',
	EH: 'MAD',
	ER: 'ERN',
	ES: 'EUR',
	ET: 'ETB',
	FI: 'EUR',
	FJ: 'FJD',
	FK: 'FKP',
	FM: 'USD',
	FO: 'DKK',
	FR: 'EUR',
	GA: 'XAF',
	GB: 'GBP',
	GD: 'XCD',
	GE: 'GEL',
	GF: 'EUR',
	GG: 'GBP',
	GH: 'GHS',
	GI: 'GIP',
	GL: 'DKK',
	GM: 'GMD',
	GN: 'GNF',
	GP: 'EUR',
	GQ: 'XAF',
	GR: 'EUR',
	GS: 'GBP',
	GT: 'GTQ',
	GU: 'USD',
	GW: 'XOF',
	GY: 'GYD',
	HK: 'HKD',
	HM: 'AUD',
	HN: 'HNL',
	HR: 'HRK',
	HT: 'HTG',
	HU: 'HUF',
	ID: 'IDR',
	IE: 'EUR',
	IL: 'ILS',
	IM: 'GBP',
	IN: 'INR',
	IO: 'USD',
	IQ: 'IQD',
	IR: 'IRR',
	IS: 'ISK',
	IT: 'EUR',
	JE: 'GBP',
	JM: 'JMD',
	JO: 'JOD',
	JP: 'JPY',
	KE: 'KES',
	KG: 'KGS',
	KH: 'KHR',
	KI: 'AUD',
	KM: 'KMF',
	KN: 'XCD',
	KP: 'KPW',
	KR: 'KRW',
	KW: 'KWD',
	KY: 'KYD',
	KZ: 'KZT',
	LA: 'LAK',
	LB: 'LBP',
	LC: 'XCD',
	LI: 'CHF',
	LK: 'LKR',
	LR: 'LRD',
	LS: 'LSL',
	LT: 'EUR',
	LU: 'EUR',
	LV: 'EUR',
	LY: 'LYD',
	MA: 'MAD',
	MC: 'EUR',
	MD: 'MDL',
	ME: 'EUR',
	MF: 'EUR',
	MG: 'MGA',
	MH: 'USD',
	MK: 'MKD',
	ML: 'XOF',
	MM: 'MMK',
	MN: 'MNT',
	MO: 'MOP',
	MP: 'USD',
	MQ: 'EUR',
	MR: 'MRO',
	MS: 'XCD',
	MT: 'EUR',
	MU: 'MUR',
	MV: 'MVR',
	MW: 'MWK',
	MX: 'MXN',
	MY: 'MYR',
	MZ: 'MZN',
	NA: 'NAD',
	NC: 'XPF',
	NE: 'XOF',
	NF: 'AUD',
	NG: 'NGN',
	NI: 'NIO',
	NL: 'EUR',
	NO: 'NOK',
	NP: 'NPR',
	NR: 'AUD',
	NU: 'NZD',
	NZ: 'NZD',
	OM: 'OMR',
	PA: 'PAB',
	PE: 'PEN',
	PF: 'XPF',
	PG: 'PGK',
	PH: 'PHP',
	PK: 'PKR',
	PL: 'PLN',
	PM: 'EUR',
	PN: 'NZD',
	PR: 'USD',
	PS: 'ILS',
	PT: 'EUR',
	PW: 'USD',
	PY: 'PYG',
	QA: 'QAR',
	RE: 'EUR',
	RO: 'RON',
	RS: 'RSD',
	RU: 'RUB',
	RW: 'RWF',
	SA: 'SAR',
	SB: 'SBD',
	SC: 'SCR',
	SD: 'SDG',
	SE: 'SEK',
	SG: 'SGD',
	SH: 'SHP',
	SI: 'EUR',
	SJ: 'NOK',
	SK: 'EUR',
	SL: 'SLL',
	SM: 'EUR',
	SN: 'XOF',
	SO: 'SOS',
	SR: 'SRD',
	ST: 'STD',
	SV: 'SVC',
	SX: 'ANG',
	SY: 'SYP',
	SZ: 'SZL',
	TC: 'USD',
	TD: 'XAF',
	TF: 'EUR',
	TG: 'XOF',
	TH: 'THB',
	TJ: 'TJS',
	TK: 'NZD',
	TL: 'USD',
	TM: 'TMT',
	TN: 'TND',
	TO: 'TOP',
	TR: 'TRY',
	TT: 'TTD',
	TV: 'AUD',
	TW: 'TWD',
	TZ: 'TZS',
	UA: 'UAH',
	UG: 'UGX',
	UM: 'USD',
	US: 'USD',
	UY: 'UYU',
	UZ: 'UZS',
	VA: 'EUR',
	VC: 'XCD',
	VE: 'VEF',
	VG: 'USD',
	VI: 'USD',
	VN: 'VND',
	VU: 'VUV',
	WF: 'XPF',
	WS: 'WST',
	YE: 'YER',
	YT: 'EUR',
	ZA: 'ZAR',
	ZM: 'ZMW',
	ZW: 'ZWL'
};
