enum Engine {
	tiny = 'tiny',
	small = 'small',
	medium = 'medium',
	large = 'large'
}

enum EquipmentRange {
	short = 5,
	medium = 10,
	long = 20
}

export enum Position {
	for = 'For',
	port = 'Port',
	starboard = 'Starboard',
	aft = 'Aft',
	turret = 'Turret'
}

enum Size {
	tiny = 'tiny',
	small = 'small',
	medium = 'medium',
	large = 'large',
	huge = 'huge',
	gargantuan = 'gargantuan',
	colossal = 'colossal'
}

enum Status {
	normal = 'normal',
	glitching = 'glitching',
	malfunctioning = 'malfunctioning',
	wrecked = 'wrecked'
}
export default interface Ship {
	id: string;
	info: Info;
	weapons: Weapon[];
	crew: CrewPositions;
	complement: number; // number of people on the ship
	notes: string;
	modifiers: Modifier[];
	image: string;
	armorClass: ArmorClass;
	targetLock: TargetLock;
	hull: Hull;
	damageTrheshold: number;
	criticalThreshold: number;
	criticalDamage: CriticalDamage[];
	systems: string[];
	expansionBays: string[];
	cargoPassengers: string[];
}

interface Base {
	base: number; // +10
	pilot: number;
	size: number;
	misc: number;
}

export interface ArmorClass extends Base {
	armor: number;
}

export interface CrewPositions {
	captain: string;
	engineer: string;
	gunner: string;
	pilot: string;
	scienceOfficer: string;
}

export interface CriticalDamage {
	startRange: number;
	endRange: number;
	name: string;
	status: Status;
	effect: string;
}

export interface Hull {
	current: number;
	total: number;
}

export interface Info {
	name: string;
	make: string;
	model: string;
	class: string;
	tier: number;
	size: Size;
	speed: number;
	manuverability: Manuverability;
	rating: number;
	engine: Engine;
	pcu: number;
	powercore: PowerCore;
	shields: Shields;
	sensors: Sensor[];
}

export interface Manuverability {
	type: string;
	distanceBeforeTurns: number;
	pilotingCheckModifier: number;
}

export interface Modifier {
	skill: string;
	value: number;
}

export interface PowerCore {
	core: string;
	size: Size;
	pcuCost: number;
	bpCost: number;
}

export interface Sensor {
	type: string;
	range: Range;
	modifier: number;
	bpCost: number;
}

export interface Shields {
	max: number;
	total: {
		forShield: number;
		port: number;
		starboard: number;
		aft: number;
	};

	current: {
		forShield: number;
		port: number;
		starboard: number;
		aft: number;
	};
}

export interface TargetLock extends Base {
	counter: number;
}

export interface Weapon {
	name: string;
	type: string;
	range: EquipmentRange;
	speed: number;
	damage: string;
	pcu: number;
	cost: number;
	specialProperties: string;
	position: Position;
	status: Status;
}

// default and temp ship values
export const defaultShip: Ship = {
	id: '',
	info: {
		name: '',
		make: '',
		model: '',
		class: '',
		tier: 0,
		size: Size.small,
		speed: 0,
		manuverability: {
			type: '',
			distanceBeforeTurns: 0,
			pilotingCheckModifier: 0
		},
		rating: 0,
		engine: Engine.tiny,
		pcu: 0,
		powercore: {
			core: '',
			size: Size.small,
			pcuCost: 0,
			bpCost: 0
		},
		shields: {
			max: 0,
			total: {
				forShield: 0,
				port: 0,
				starboard: 0,
				aft: 0
			},

			current: {
				forShield: 0,
				port: 0,
				starboard: 0,
				aft: 0
			}
		},
		sensors: []
	},
	weapons: [],
	crew: {
		captain: '',
		engineer: '',
		gunner: '',
		pilot: '',
		scienceOfficer: ''
	},
	complement: 0, // number of people on the ship
	notes: '',
	modifiers: [],
	image: '',
	armorClass: {
		base: 0, // +10
		pilot: 0,
		size: 0,
		misc: 0,
		armor: 0
	},
	targetLock: {
		base: 0, // +10
		pilot: 0,
		size: 0,
		misc: 0,
		counter: 0
	},
	hull: {
		current: 0,
		total: 0
	},
	damageTrheshold: 0,
	criticalThreshold: 0,
	criticalDamage: [],
	systems: [],
	expansionBays: [],
	cargoPassengers: []
};

export const tempShip: Ship = {
	id: '1',
	info: {
		name: 'Temp Ship',
		make: 'make',
		model: 'x2j9',
		class: 'warrior',
		tier: 1,
		size: Size.small,
		speed: 2
	} as Info,
	weapons: [
		{
			name: 'super gun',
			type: 'turret',
			range: EquipmentRange.short,
			speed: 5,
			damage: '2d6',
			pcu: 20,
			cost: 5,
			specialProperties: 'magic',
			position: Position.turret,
			status: Status.normal
		},
		{
			name: 'blat blat',
			type: 'gat',
			range: EquipmentRange.medium,
			speed: 10,
			damage: '4d6',
			pcu: 10,
			cost: 6,
			specialProperties: 'physical',
			position: Position.for,
			status: Status.normal
		}
	],
	crew: {
		captain: 'squadbreaker',
		engineer: 'goliath',
		gunner: 'J477',
		pilot: 'Capy, other',
		scienceOfficer: ''
	},
	complement: 0, // number of people on the ship
	notes: '',
	modifiers: [
		{
			skill: 'piloting',
			value: -2
		}
	],
	image: '',
	armorClass: {} as ArmorClass,
	targetLock: {} as TargetLock,
	hull: {} as Hull,
	damageTrheshold: 0,
	criticalThreshold: 0,
	criticalDamage: [
		{
			startRange: 1,
			endRange: 10,
			name: 'life support',
			effect: 'Condition applies to all captain actions',
			status: Status.normal
		},
		{
			startRange: 11,
			endRange: 30,
			name: 'sensors',
			effect: 'Condition applies to all science officer actions',
			status: Status.normal
		},
		{
			startRange: 31,
			endRange: 60,
			name: 'weapons array',
			effect: 'Randomly determine one arc containing weapons; condition applies to all gunner actions using weapons in that arc (a turret counts as being in all arcs)',
			status: Status.normal
		},
		{
			startRange: 61,
			endRange: 80,
			name: 'engines',
			effect: 'Condition applies to all pilot actions',
			status: Status.normal
		},
		{
			startRange: 81,
			endRange: 100,
			name: 'power core',
			effect: 'Condition applies to all engineer actions except hold it together and patch; a malfunctioning or wrecked power core affects other crew members’ actions',
			status: Status.normal
		}
	],
	systems: [],
	expansionBays: [],
	cargoPassengers: []
};
