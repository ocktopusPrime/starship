// import Health from './Health/Health';
import ShipInfo from './Info/ShipInfo';
import Weapons from './Weapons/Weapons';
import { Position } from './Ship';

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
			{/* <Image /> */}
			{/* <Stats /> */}
			{/* <Weapons position={Position.starboard} /> */}
			{/* <Systems /> */}
			{/* <ExspansionBays /> */}
			{/* <CargoPassengers /> */}
		</div>
	);
}
