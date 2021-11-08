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
	normal = 0,
	glitching = 1,
	malfunctioning = 2,
	wrecked = 3
}
export default interface Ship {
	id: string;
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
	},
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
	]
};

interface Base {
	base?: number; // +10
	pilot?: number;
	size?: number;
	misc?: number;
}

export interface ArmorClass extends Base {
	armor?: number;
}

export interface CrewPositions {
	captain?: string[];
	engineer?: string[];
	gunner?: string[];
	pilot?: string[];
	scienceOfficer?: string[];
}

export interface CriticalDamage {
	startRange?: number;
	endRange?: number;
	name?: string;
	status?: Status;
}

export interface Hull {
	current?: number;
	total?: number;
}

export interface Info {
	name?: string;
	make?: string;
	model?: string;
	class?: string;
	tier?: number;
	size?: Size;
	speed?: number;
	manuverability?: Manuverability;
	rating?: number;
	engine?: Engine;
	pcu?: number;
	powercore?: PowerCore;
	shields?: Shields;
	sensors?: Sensor[];
}

export interface Manuverability {
	type?: string;
	distanceBeforeTurns?: number;
	pilotingCheckModifier?: number;
}

export interface Modifier {
	skill?: string;
	value?: number;
}

export interface PowerCore {
	core?: string;
	size?: Size;
	pcuCost?: number;
	bpCost?: number;
}

export interface Sensor {
	type?: string;
	range?: Range;
	modifier?: number;
	bpCost?: number;
}

export interface Shields {
	max?: number;
	total?: {
		forShield?: number;
		port?: number;
		starboard?: number;
		aft?: number;
	};

	current?: {
		forShield?: number;
		port?: number;
		starboard?: number;
		aft?: number;
	};
}

export interface TargetLock extends Base {
	counter?: number;
}

export interface Weapon {
	name?: string;
	type?: string;
	range?: EquipmentRange;
	speed?: number;
	damage?: string;
	pcu?: number;
	cost?: number;
	specialProperties?: string;
	position?: Position;
	status?: Status;
}
