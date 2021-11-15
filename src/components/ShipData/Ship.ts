export enum Engine {
	tiny = 'tiny',
	small = 'small',
	medium = 'medium',
	large = 'large'
}

export enum EquipmentRange {
	short = 5,
	medium = 10,
	long = 20
}

export enum Position {
	for = 'For',
	port = 'Port',
	starboard = 'Starboard',
	aft = 'Aft',
	turret = 'Turret',
	hull = 'Hull'
}

export enum Size {
	tiny = 'tiny',
	small = 'small',
	medium = 'medium',
	large = 'large',
	huge = 'huge',
	gargantuan = 'gargantuan',
	colossal = 'colossal'
}

export enum Status {
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
	hull: number[]; // [current, total]
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
	sensors: Sensor;
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
	range: EquipmentRange;
	modifier: number;
	bpCost: number;
}

export interface Shields {
	max: number;
	// [current, total]
	forShield: number[];
	port: number[];
	starboard: number[];
	aft: number[];
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
