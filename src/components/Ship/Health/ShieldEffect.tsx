import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import './ShieldEffect.scss';

interface Props {
	updateShield: (val: number) => void;
	position: string;
}

export default function ShieldEffect({ updateShield, position }: Props) {
	const [effectValue, setEffectValue] = useState(0);
	let style = '';
	let message = '';

	const handleEffectValue = (val: number) => {
		setEffectValue(effectValue + val);
	};

	const getButton = (num: number, operation: string) => {
		return (
			<Button
				sx={{ width: '40px', minWidth: 0 }}
				variant='outlined'
				size='small'
				onClick={() => handleEffectValue(operation === 'subtract' ? -Math.abs(num) : num)}
			>
				<Typography>{num.toString()}</Typography>
			</Button>
		);
	};

	if (effectValue > 0) {
		message = '😄Restored😄';
		style = 'restored';
	} else if (effectValue < 0) {
		message = '😡Damaged😡';
		style = 'damaged';
	} else {
		message = '😡/😄';
	}

	return (
		<div className={`action-effect ${position}`}>
			<span className='effect-message'>{message}</span>
			<div className='action'>
				<div className='damage red'>
					<div className='action-buttons'>
						{getButton(5, 'subtract')}
						{getButton(1, 'subtract')}
					</div>
					<span className='damage-span'>Damage</span>
				</div>

				<div
					className={`action-effect-value ${style}`}
					onClick={() => updateShield(effectValue)}
				>
					{effectValue}
				</div>

				<div className='restore'>
					<div className='action-buttons'>
						{getButton(1, 'add')}
						{getButton(5, 'add')}
					</div>
					<span className='restore-span'>Restore</span>
				</div>
			</div>
		</div>
	);
}
