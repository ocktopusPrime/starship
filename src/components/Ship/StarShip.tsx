import { useContext } from 'react';
// import Health from './Health/Health';
import ShipInfo from './Info/ShipInfo';
import Weapons from './Weapons/Weapons';
import { ShipContext } from 'components/ShipContext';
import { Position } from './Ship';

export default function Starship() {
	//@ts-ignore
	const { shipDetails, setShipDetails } = useContext(ShipContext);
	return (
		<div id='columns'>
			{/* {Object.keys(shipDetails).map((value) => (
				<div>{shipDetails[value]}</div>
			))} */}
			<ShipInfo />
			<Weapons position={Position.port} />
			{/* <CrewPositions /> */}
			{/* <Notes /> */}
			{/* <Modifiers /> */}
			<Weapons position={Position.turret} />
			<Weapons position={Position.for} />
			{/* <Health /> */}
			<Weapons position={Position.aft} />
			{/* <CriticalDamage /> */}
			{/* <Image /> */}
			{/* <Stats /> */}
			<Weapons position={Position.starboard} />
			{/* <Systems /> */}
			{/* <ExspansionBays /> */}
			{/* <CargoPassengers /> */}
		</div>
	);
}
