import { ShipContext } from 'components/ShipContext';
import { useContext } from 'react';
import { Position, Weapon } from '../Ship';

interface Props {
	position: Position;
}

export default function Weapons({ position }: Props) {
	//@ts-ignore
	const { shipDetails, setShipDetails } = useContext(ShipContext);
	const { weapons } = shipDetails;
	const weaponList = weapons.filter((weapon: Weapon) => weapon.position === position);

	return (
		<div>
			<p>
				{position} {position.toString().toLowerCase() !== 'turrets' && 'Weapons'}
			</p>
			{weaponList.map((weapon: any) => (
				<p>{`${weapon.name} - ${weapon.damage} (${weapon.range}) -- ${weapon.status}`}</p>
			))}
		</div>
	);
}
