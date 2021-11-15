import { Typography } from '@mui/material';
import ShieldEffect from './ShieldEffect';
import { Position } from 'components/ShipData/Ship';
import { useContext } from 'react';
import ShipContext from 'components/ShipContext';
import './Health.scss';

interface Props {
	position: string;
	shieldValue: number[];
	isOpen: boolean;
	toggleDisplayShieldEffect: (position: string) => void;
}

export default function ShieldComponent({
	position,
	shieldValue,
	isOpen,
	toggleDisplayShieldEffect
}: Props) {
	const { shipDetails, setShipDetails } = useContext(ShipContext);

	const handleHullUpdate = (val: number, position: string) => {
		const tempArray: number[] = shipDetails.hull;
		tempArray[0] = tempArray[0] - val;
		setShipDetails({ ...shipDetails, hull: { ...shipDetails.hull, [position]: tempArray } });
	};

	const handleShieldUpdate = (position: string, effectValue: number) => {
		const tempArray: number[] = [...shieldValue];
		const total = shieldValue[0] + effectValue < 0 ? 0 : shieldValue[0] + effectValue;
		const carryover =
			effectValue < 0 && Math.abs(effectValue) > Math.abs(shieldValue[0])
				? Math.abs(effectValue) - Math.abs(shieldValue[0])
				: undefined;
		tempArray[0] = total;

		setShipDetails({
			...shipDetails,
			info: {
				...shipDetails.info,
				shields: { ...shipDetails.info.shields, [position.toLowerCase()]: tempArray }
			}
		});

		if (carryover) handleHullUpdate(carryover, Position.hull.toLowerCase());
	};

	return (
		<div className='effect-and-value'>
			{isOpen && (
				<ShieldEffect
					updateShield={(val: number) =>
						position.toLowerCase() === 'hull'
							? handleHullUpdate(val, Position.hull.toLowerCase())
							: handleShieldUpdate(position, val)
					}
					position={position}
				/>
			)}
			<div
				className={`container ${isOpen ? 'selected' : ''}`}
				onClick={() => toggleDisplayShieldEffect(position.toLowerCase())}
			>
				<Typography variant='h5' className='shield-value'>
					{shieldValue[0]}/{shieldValue[1]}
				</Typography>
				<Typography className='shield-label'>{position}</Typography>
			</div>
		</div>
	);
}
