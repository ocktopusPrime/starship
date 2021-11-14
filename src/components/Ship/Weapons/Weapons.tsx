import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import ShipContext from 'components/ShipContext';
import { useContext } from 'react';
import { Position, Weapon } from '../../ShipData/Ship';
import './Weapons.scss';

interface Props {
	position: Position;
}

export default function Weapons({ position }: Props) {
	const { shipDetails } = useContext(ShipContext);
	const { weapons } = { ...shipDetails };
	const weaponList: Weapon[] =
		weapons?.filter((weapon: Weapon) => weapon.position === position) || [];

	return (
		<div className='weapons'>
			{position.toLowerCase() !== 'turret' ? `${position} Weapons` : `${position}s`}
			<Table className='weapon-table'>
				<TableHead>
					<TableRow>
						<TableCell>name</TableCell>
						<TableCell>damage</TableCell>
						<TableCell>range</TableCell>
						<TableCell>status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{weaponList.map((weapon: any, idx) => (
						<TableRow key={`name${idx}`}>
							<TableCell>{weapon.name}</TableCell>
							<TableCell>{weapon.damage}</TableCell>
							<TableCell>{weapon.range}</TableCell>
							<TableCell>{weapon.status}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
