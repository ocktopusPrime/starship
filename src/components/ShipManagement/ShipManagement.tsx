import Ship from 'components/ShipData/Ship';
import { Button } from '@mui/material';

interface Props {
	shipList: Ship[];
}
export default function ShipManagement({ shipList }: Props) {
	return (
		<div id='ship-management'>
			ShipManagement
			{shipList.map((ship: Ship) => (
				<p>{ship.info?.name}</p>
			))}
			<Button variant='contained' color='success'>
				Add Ship
			</Button>
		</div>
	);
}
