import ShipContext from 'components/ShipContext';
import { useContext, useState } from 'react';
import { Button, TextField } from '@mui/material';

export default function ShipInfo() {
	const { shipDetails, setShipDetails } = useContext(ShipContext);
	const { info } = { ...shipDetails };
	const [tempInfo, setTempInfo] = useState(info);
	const [isEdit, setIsEdit] = useState(false);

	const handleSetTempInfo = (label: string, value: string | number) => {
		const tempData = { ...tempInfo };
		const arg = Object.keys(tempData).filter((k) => k === label);
		console.log(arg);
	};

	return (
		<>
			<Button variant='contained' onClick={() => setIsEdit(!isEdit)}>
				Edit
			</Button>
			<div>
				Ship Info
				{info &&
					Object.entries(info).map(([key, value]) =>
						isEdit ? (
							<TextField
								label={key}
								defaultValue={value}
								onChange={() => handleSetTempInfo(key, value)}
							/>
						) : (
							<p>
								{key} : {value}
							</p>
						)
					)}
			</div>
		</>
	);
}
