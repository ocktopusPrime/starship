import CrewPositions from './CrewPositions/CrewPositions';
import CriticalDamage from './CriticalDamage/CriticalDamage';
import ShipPortrait from './ShipPortrait/ShipPortrait';
import Modifiers from './Modifiers/Modifiers';
import Notes from './Notes/Notes';
import ShipInfo from './Info/ShipInfo';

export default function Starship() {
	return (
		<div id='columns'>
			<ShipInfo />
			{/* <Weapons position={Position.port} /> */}
			{/* <CrewPositions /> */}
			{/* <Notes /> */}
			{/* <Modifiers /> */}
			{/* <Weapons position={Position.turret} /> */}
			{/* <Weapons position={Position.for} /> */}
			{/* <Health /> */}
			{/* <Weapons position={Position.aft} /> */}
			{/* <CriticalDamage /> */}
			<ShipPortrait />
			{/* <Stats /> */}
			{/* <Weapons position={Position.starboard} /> */}
			{/* <Systems /> */}
			{/* <ExspansionBays /> */}
			{/* <CargoPassengers /> */}
		</div>
	);
}
