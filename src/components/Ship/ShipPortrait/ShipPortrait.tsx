import './ShipPortrait.scss';

export default function ShipPortrait() {
	return (
		<div id='ship-portrait'>
			<div id='animated-background' />
			<img
				id='foreground-ship'
				src={`https://www.dronethusiast.com/wp-content/uploads/2017/01/star-wars-starfighter-drone-300x252.png`}
			/>
		</div>
	);
}
