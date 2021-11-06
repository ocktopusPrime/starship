import { Weapon } from '../Ship';

interface Props {
	position: string;
	weapons?: Weapon[];
}

export default function Weapons({ position, weapons }: Props) {
	return (
		<div>
			<p>
				{position} {position.toLowerCase() !== 'turrets' && 'Weapons'}
			</p>
			{weapons?.map((weapon) => (
				<p>{weapon.name}</p>
			))}
		</div>
	);
}
