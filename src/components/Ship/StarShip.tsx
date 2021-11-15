import CargoPassengers from './CargoPassengers/CargoPassengers';
import CrewPositions from './CrewPositions/CrewPositions';
import CriticalDamage from './CriticalDamage/CriticalDamage';
import ExspansionBays from './ExspansionBays/ExpansionBays';
import Health from './Health/Health';
import Modifiers from './Modifiers/Modifiers';
import Notes from './Notes/Notes';
import ShipInfo from './Info/ShipInfo';
import ShipPortrait from './ShipPortrait/ShipPortrait';
import Systems from './Systems/Systems';
import Weapons from './Weapons/Weapons';
import { Position } from '../ShipData/Ship';

export default function Starship() {
	return (
		<div id='columns'>
			{/* <ShipInfo /> */}
			{/* <Weapons position={Position.port} /> */}
			{/* <CrewPositions /> */}
			{/* <Notes /> */}
			{/* <Modifiers /> */}
			{/* <Weapons position={Position.turret} /> */}
			{/* <Weapons position={Position.for} /> */}
			<Health />
			{/* <Weapons position={Position.aft} /> */}
			{/* <CriticalDamage /> */}
			{/* <ShipPortrait /> */}
			{/* <Weapons position={Position.starboard} /> */}
			{/* <Systems /> */}
			{/* <ExspansionBays /> */}
			{/* <CargoPassengers /> */}
		</div>
	);
}
