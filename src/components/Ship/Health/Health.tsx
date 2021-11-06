import { useState } from 'react';
import { Typography } from '@mui/material';
import ShieldEffect from './ShieldEffect';
import './Health.scss';

export default function Health() {
	// [current value, max value]
	const [forShield, setForShield] = useState([6, 12]);
	const [starboard, setStarboard] = useState([7, 12]);
	const [aft, setAft] = useState([8, 12]);
	const [port, setPort] = useState([4, 12]);
	const [hull, setHull] = useState([20, 20]);

	const [shieldEffectOpen, setShieldEffectOpen] = useState<string[]>([]);
	const shipPositions = ['For', 'Port', 'Starboard', 'Aft', 'Hull'];

	const isEffectOpen = (label: string) => shieldEffectOpen.includes(label);

	const setSelected = (label: string) => {
		if (shieldEffectOpen.includes(label)) return 'selected';
	};

	const handleShowShieldEffect = (label: string) => {
		const tempArray = [...shieldEffectOpen];
		const index = tempArray.indexOf(label, 0);

		index > -1 ? tempArray.splice(index, 1) : tempArray.push(label);
		setShieldEffectOpen(tempArray);
	};

	const shieldComponent = (label: string, position: string, shieldValue: number[]) => {
		const handleShieldUpdate = (effectValue: number) => {
			let tempArray: number[] = [];
			const total = shieldValue[0] + effectValue < 0 ? 0 : shieldValue[0] + effectValue;
			const carryover =
				effectValue < 0 && Math.abs(effectValue) > Math.abs(shieldValue[0])
					? Math.abs(effectValue) - Math.abs(shieldValue[0])
					: undefined;

			if (label === shipPositions[0]) {
				tempArray = [...forShield];
				tempArray[0] = total;
				setForShield(tempArray);
			} else if (label === shipPositions[1]) {
				tempArray = [...port];
				tempArray[0] = total;
				setPort(tempArray);
			} else if (label === shipPositions[2]) {
				tempArray = [...starboard];
				tempArray[0] = total;
				setStarboard(tempArray);
			} else if (label === shipPositions[3]) {
				tempArray = [...aft];
				tempArray[0] = total;
				setAft(tempArray);
			} else if (label === shipPositions[4]) {
				tempArray = [...hull];
				tempArray[0] = total;
				setHull(tempArray);
			}

			if (carryover) {
				tempArray = [...hull];
				tempArray[0] = hull[0] - carryover;
				setHull(tempArray);
			}
		};

		return (
			<div className='effect-and-value'>
				{isEffectOpen(label) && (
					<ShieldEffect
						updateShield={(val: number) => handleShieldUpdate(val)}
						position={position}
					/>
				)}
				<div
					className={`container ${setSelected(label)}`}
					onClick={() => handleShowShieldEffect(label)}
				>
					<div className='shield-value'>
						{shieldValue[0]}/{shieldValue[1]}
					</div>
					<Typography className='shield-label'>{label}</Typography>
				</div>
			</div>
		);
	};

	return (
		<div id='ship'>
			<div id='shield-circle' />
			<div id='ship-circle' />
			{shieldComponent(shipPositions[0], shipPositions[0].toLowerCase(), forShield)}
			<div id='port-hull-starboard'>
				{shieldComponent(shipPositions[1], shipPositions[1].toLowerCase(), port)}
				{shieldComponent(shipPositions[4], shipPositions[4].toLowerCase(), hull)}
				{shieldComponent(shipPositions[2], shipPositions[2].toLowerCase(), starboard)}
			</div>
			{shieldComponent(shipPositions[3], shipPositions[3].toLowerCase(), aft)}
		</div>
	);
}
