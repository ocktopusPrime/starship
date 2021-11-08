import Ship from 'components/Ship/Ship';

interface Props {
	shipList: Ship[];
}
export default function ShipManagement({ shipList }: Props) {
	console.log(shipList);
	return (
		<div>
			<p>ShipManagement</p>
			{shipList.map((ship) => {
				<p>{ship.info?.name}</p>;
			})}
		</div>
	);
}
