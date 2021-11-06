export default interface Ship {
	info?: Info;
	weapons?: Weapon[];
	crew?: CrewPositions;
	complement?: number; // number of people on the ship
	notes?: string;
	modifiers?: Modifier[];
	image?: string;
	armorClass?: ArmorClass;
	targetLock?: TargetLock;
	hull?: Hull;
	damageTrheshold?: number;
	criticalThreshold?: number;
	criticalDamage?: CriticalDamage[];
	systems?: string[];
	expansionBays?: string[];
	cargoPassengers?: string[];
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
	captain: string[];
	engineer: string[];
	gunner: string[];
	pilot: string[];
	scienceOfficer: string[];
}

export interface CriticalDamage {
	startRange: number;
	endRange: number;
	name: string;
	status: keyof Status;
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
	size: keyof Size;
	speed: number;
	manuverability: Manuverability;
	rating: number;
	engine: keyof Engine;
	pcu: number;
	powercore: PowerCore;
	shields?: Shields;
	sensors?: Sensor[];
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
	size: keyof Size;
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
	range: keyof EquipmentRange;
	speed: number;
	damage: string;
	pcu: number;
	cost: number;
	specialProperties: string;
	position: keyof Position;
	status: keyof Status;
}

enum Engine {
	tiny,
	small,
	medium,
	large,
}

enum EquipmentRange {
	short = 5,
	medium = 10,
	long = 20,
}

enum Position {
	'For',
	'Port',
	'Starboard',
	'Aft',
	'Turret',
}

enum Size {
	tiny,
	small,
	medium,
	large,
	huge,
	gargantuan,
	colossal,
}

enum Status {
	glitching = 1,
	malfunctioning = 2,
	wrecked = 3,
}
