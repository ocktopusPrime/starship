import { useState, useContext, useEffect } from 'react';
import ShipContext from 'components/ShipContext';
import ShieldComponent from './ShieldComponent';
import { Position } from 'components/ShipData/Ship';
import './Health.scss';

export default function Health() {
	const { shipDetails, setShipDetails } = useContext(ShipContext);

	// [current, total]
	const { forShield, starboard, aft, port } = { ...shipDetails.info.shields };
	const hull = { ...shipDetails.hull };

	// list of the effect displays that are open
	const [shieldEffectOpen, setShieldEffectOpen] = useState<string[]>([]);

	const isOpen = (position: string) => shieldEffectOpen.includes(position.toLowerCase());

	const handleShowShieldEffect = (label: string) => {
		const tempArray = [...shieldEffectOpen];
		const index = tempArray.indexOf(label, 0);

		index > -1 ? tempArray.splice(index, 1) : tempArray.push(label.toLowerCase());
		setShieldEffectOpen(tempArray);
	};

	return (
		<div id='ship'>
			<div id='shield-circle' />
			<div id='ship-circle' />
			<ShieldComponent
				position={Position.for}
				shieldValue={forShield}
				isOpen={isOpen(Position.for)}
				toggleDisplayShieldEffect={handleShowShieldEffect}
			/>
			<div id='port-hull-starboard'>
				<ShieldComponent
					position={Position.port}
					shieldValue={port}
					isOpen={isOpen(Position.port)}
					toggleDisplayShieldEffect={handleShowShieldEffect}
				/>
				<ShieldComponent
					position={Position.hull}
					shieldValue={hull}
					isOpen={isOpen(Position.hull)}
					toggleDisplayShieldEffect={handleShowShieldEffect}
				/>
				<ShieldComponent
					position={Position.starboard}
					shieldValue={starboard}
					isOpen={isOpen(Position.starboard)}
					toggleDisplayShieldEffect={handleShowShieldEffect}
				/>
			</div>
			<ShieldComponent
				position={Position.aft}
				shieldValue={aft}
				isOpen={isOpen(Position.aft)}
				toggleDisplayShieldEffect={handleShowShieldEffect}
			/>
		</div>
	);
}
