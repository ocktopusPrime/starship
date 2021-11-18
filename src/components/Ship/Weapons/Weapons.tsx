import { Button, Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from '@mui/material';
import ShipContext from 'components/ShipContext';
import { useContext } from 'react';
import { Position, Status } from '../../ShipData/Ship';
import './Weapons.scss';

interface Props {
	position: Position;
}

export const getToolTip = (status: string) => {
	switch (status) {
		case Status.glitching:
			return `Crew actions involving the system (except the hold it together and patch engineer actions; see page 323) take a –2 penalty.`;
		case Status.malfunctioning:
			return `Crew actions involving the system (except the hold it together and patch engineer actions) take a –4 penalty. Also, crew members 
			can’t take push actions (see page 322) using that system. If the power core is malfunctioning, all actions aboard the starship not involving 
			the power core take a –2 penalty; this penalty stacks with penalties from critical damage conditions affecting other systems.`;
		case Status.wrecked:
			return `Crew actions involving the system (except the hold it together and patch engineer actions and minor crew actions; see page 326)
			automatically fail. If the power core is wrecked, all crew actions aboard the starship not involving the power core take a –4
			penalty; this penalty stacks with penalties from critical damage conditions affecting other systems.`;
		default:
			return 'Normal - No penalties';
	}
};

export default function Weapons({ position }: Props) {
	const { shipDetails, setShipDetails } = useContext(ShipContext);
	const weapons = shipDetails.weapons;
	const weaponList = Object.values(weapons).filter((weapon) => weapon.position === position);
	const weaponStates = [Status.normal, Status.glitching, Status.malfunctioning, Status.wrecked];

	const handleUpdateWeaponStatus = (id: string, weapStatus: Status) => {
		const tempWeapons = weapons;
		const weaponIdx = Object.values(tempWeapons).findIndex((weapon) => weapon.id === id);

		const currentIndex = weaponStates.findIndex((state) => state === weapStatus);
		let nextIndex;
		if (currentIndex === weaponStates.length - 1) {
			nextIndex = 0;
		} else {
			nextIndex = currentIndex + 1;
		}
		tempWeapons[weaponIdx].status = weaponStates[nextIndex];

		setShipDetails({ ...shipDetails, weapons: { ...tempWeapons } });
	};

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
					{weaponList.length > 0 &&
						weaponList.map((weapon: any, idx) => {
							const { id, name, damage, range, status } = weapon;
							return (
								<TableRow key={`name${idx}`}>
									<TableCell>{name}</TableCell>
									<TableCell>{damage}</TableCell>
									<TableCell>{range}</TableCell>
									<TableCell>
										{/* make the status less cycle through, and more click to select */}
										{/* another consideration is to extract this as a component for anything else that cares about status */}
										<Tooltip enterDelay={700} title={getToolTip(status)}>
											<div
												className={status}
												onClick={() => handleUpdateWeaponStatus(id, status)}
											>
												{status}
											</div>
										</Tooltip>
									</TableCell>
								</TableRow>
							);
						})}
					<TableRow>
						<TableCell>
							{/* I probably want a dialog here so the user can confirm their addition */}
							<Button variant='contained'>+ Add weapon</Button>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
}
