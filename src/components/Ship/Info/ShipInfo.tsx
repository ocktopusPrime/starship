import ShipContext from 'components/ShipContext';
import { useContext } from 'react';
import { Typography } from '@mui/material';
import './ShipInfo.scss';

export default function ShipInfo() {
	const { shipDetails, setShipDetails } = useContext(ShipContext);
	const {
		name,
		make,
		model,
		shipClass,
		size,
		speed,
		manuverability,
		rating,
		engine,
		pcu,
		powercore,
		shields,
		sensors
	} = { ...shipDetails.info };

	const manuverabilityString = `${manuverability.type} Turn ${manuverability.distanceBeforeTurns}, Pilot +${manuverability.pilotingCheckModifier}`;
	const sensorsString = `${sensors.type} ${sensors.range} range`;
	const shieldString = `${shields.type} shields ${shields.max}`;

	const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
		const attribute = event.target.name;
		const value = event.target.value;
		setShipDetails({ ...shipDetails, info: { ...shipDetails.info, [attribute]: value } });
	};

	const getInfoField = (label: string, field: string, val: number | string) => {
		return (
			<div className='info-text'>
				<Typography>{label}:</Typography>
				<input
					type='text'
					name={field}
					defaultValue={val}
					placeholder='N/A'
					onChange={handleUpdate}
				/>
			</div>
		);
	};

	return (
		<div id='ship-info'>
			Ship Info
			{getInfoField('Ship Name', 'name', name)}
			{getInfoField('Make', 'make', make)}
			{getInfoField('Model', 'model', model)}
			{getInfoField('Class', 'shipClass', shipClass)}
			{getInfoField('Size', 'size', size)}
			{getInfoField('Speed', 'speed', speed)}
			{getInfoField('Manuverability', 'manuverability', manuverabilityString)}
			{getInfoField('Rating', 'rating', rating)}
			{getInfoField('Engine', 'engine', engine)}
			{getInfoField('PCU', 'pcu', pcu)}
			{getInfoField('Powercore', 'powercore', powercore.core)}
			{getInfoField('Shields', 'shields', shieldString)}
			{getInfoField('Sensors', 'sensors', sensorsString)}
		</div>
	);
}
