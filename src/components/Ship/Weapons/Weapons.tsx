import ShipContext from 'components/ShipContext';
import { useContext, useState } from 'react';
import { Position, Weapon } from '../Ship';

interface Props {
	position: Position;
}

export default function Weapons({ position }: Props) {
	const { shipDetails } = useContext(ShipContext);
	const { weapons } = { ...shipDetails };
	const [tempWeapons, setTempWeapons] = useState(weapons);
	const weaponList: Weapon[] =
		weapons?.filter((weapon: Weapon) => weapon.position === position) || [];

	return (
		<div>
			<p>
				{position} {position.toString().toLowerCase() !== 'turrets' && Weapons}{' '}
				{weaponList.length}
			</p>
			{/* {weaponList.map((weapon: any) => (
				<p>{`${weapon.name} - ${weapon.damage} (${weapon.range}) -- ${weapon.status}`}</p>
			))} */}
		</div>
	);
}
