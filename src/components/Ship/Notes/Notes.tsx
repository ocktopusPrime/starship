import { useContext, useState } from 'react';
import ShipContext from 'components/ShipContext';

export default function Notes() {
	const { shipDetails, setShipDetails } = useContext(ShipContext);
	const { notes } = { ...shipDetails };

	const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
		const attribute = event.target.name;
		const value = event.target.value;
		setShipDetails({ ...shipDetails, [attribute]: value });
	};

	return (
		<div id='notes' style={{ display: 'flex', flexDirection: 'column' }}>
			Notes
			{/* textarea goes here instead of the singular input field */}
			<input
				type='text'
				name='notes'
				placeholder='EMPTY'
				value={notes}
				onChange={handleUpdate}
			/>
		</div>
	);
}
