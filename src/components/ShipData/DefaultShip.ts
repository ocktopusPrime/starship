import Ship, { Size, Engine, EquipmentRange } from './Ship';

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
		sensors: {
			type: '',
			range: EquipmentRange.short,
			modifier: 0,
			bpCost: 0
		}
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

export default defaultShip;
