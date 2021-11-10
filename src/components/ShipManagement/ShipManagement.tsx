import Ship from 'components/Ship/Ship';

interface Props {
	shipList: Ship[];
}
export default function ShipManagement({ shipList }: Props) {
	return (
		<div>
			<p>ShipManagement</p>
			{shipList.map((ship: Ship) => (
				<p>{ship.info?.name}</p>
			))}
		</div>
	);
}
