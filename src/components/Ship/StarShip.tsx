import { useContext, useEffect, useState } from 'react';
// import Health from './Health/Health';
import ShipInfo from './Info/ShipInfo';
import Ship, { Info, Weapon } from './Ship';
import Weapons from './Weapons/Weapons';
import { ShipContext } from '../ShipContext';

interface Props {
	ship: Ship;
}

export default function StarShip({ ship }: Props) {
	const [shipInfo, setShipInfo] = useState<Ship>(ship);
	// @ts-ignore
	const { shipDetails, setShipDetails } = useContext(ShipContext);

	const handleShipUpdate = () => {
		const tempShip = { ...shipInfo };
		return tempShip;
	};

	useEffect(() => {
		console.log(shipDetails);
	});

	return (
		<div id='columns' onClick={() => setShipDetails('something else')}>
			<ShipInfo info={shipInfo?.info as Info} />
			<Weapons position='Port' />
			{/* <CrewPositions /> */}
			{/* <Notes /> */}
			{/* <Modifiers /> */}
			<Weapons position='Turrets' />
			<Weapons position='For' />
			{/* <Health /> */}
			<Weapons position='Aft' />
			{/* <CriticalDamage /> */}
			{/* <Image /> */}
			{/* <Stats /> */}
			<Weapons position='Starboard' />
			{/* <Systems /> */}
			{/* <ExspansionBays /> */}
			{/* <CargoPassengers /> */}
		</div>
	);
}
