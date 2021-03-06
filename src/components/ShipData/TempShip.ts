import Ship, { Size, Engine, EquipmentRange, Position, Status } from './Ship';

export const tempShip: Ship = {
	id: '1',
	info: {
		name: 'Tie Fighter',
		make: 'make',
		model: 'x2j9',
		shipClass: 'warrior',
		tier: 1,
		size: Size.small,
		speed: 2,
		manuverability: {
			type: 'agile',
			distanceBeforeTurns: 2,
			pilotingCheckModifier: 2
		},
		rating: 10,
		engine: Engine.small,
		pcu: 10,
		powercore: {
			core: 'super core',
			size: Size.small,
			pcuCost: 10,
			bpCost: 10
		},
		shields: {
			max: 60,
			type: 'medium',
			forShield: [6, 15],
			port: [7, 15],
			starboard: [8, 15],
			aft: [0, 15]
		},
		sensors: {
			type: 'advanced',
			range: EquipmentRange.medium,
			modifier: 2,
			bpCost: 12
		}
	},
	weapons: [
		{
			id: '1',
			name: 'super gun',
			type: 'turret',
			range: EquipmentRange.short,
			speed: 5,
			damage: '2d6',
			pcu: 20,
			cost: 5,
			specialProperties: 'magic',
			position: Position.turret,
			status: Status.glitching
		},
		{
			id: '2',
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
		captain: 'diplomacy +20',
		engineer: 'engineering +13',
		gunner: 'gunnery +25',
		pilot: 'piloting +15',
		scienceOfficer: 'computers +20'
	},
	complement: 0, // number of people on the ship
	notes: 'here is one note',
	modifiers: [
		{
			skill: 'piloting',
			value: -10
		},
		{
			skill: 'gunnery',
			value: +10
		},
		{
			skill: 'engineering',
			value: +10
		},
		{
			skill: 'computers',
			value: +10
		},
		{
			skill: 'diplomacy',
			value: +10
		},
		{
			skill: 'bluff',
			value: +10
		}
	],
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
	hull: [80, 80],
	damageTrheshold: 0,
	criticalThreshold: 0,
	criticalDamage: [
		{
			startRange: 1,
			endRange: 10,
			name: 'life support',
			effect: 'Condition applies to all captain actions',
			status: Status.wrecked
		},
		{
			startRange: 11,
			endRange: 30,
			name: 'sensors',
			effect: 'Condition applies to all science officer actions',
			status: Status.malfunctioning
		},
		{
			startRange: 31,
			endRange: 60,
			name: 'weapons array',
			effect: 'Randomly determine one arc containing weapons; condition applies to all gunner actions using weapons in that arc (a turret counts as being in all arcs)',
			status: Status.glitching
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
			effect: 'Condition applies to all engineer actions except hold it together and patch; a malfunctioning or wrecked power core affects other crew members??? actions',
			status: Status.normal
		}
	],
	systems: ['L6 Thrusters'],
	expansionBays: ['Escape Pods'],
	cargoPassengers: ['Grand Arbiter Spongebob']
};

export default tempShip;
