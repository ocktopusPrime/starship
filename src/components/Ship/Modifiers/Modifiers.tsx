import ShipContext from 'components/ShipContext';
import { useContext } from 'react';

export default function Modifiers() {
	const { shipDetails } = useContext(ShipContext);
	const { modifiers } = { ...shipDetails };

	// need the ability to add a modifier to the list {skill} {value}

	return (
		<div id='modifiers'>
			<p>Modifiers</p>
			{modifiers &&
				modifiers.map((modifier) => (
					<p>
						{modifier.skill} {modifier.value}
					</p>
				))}
		</div>
	);
}
