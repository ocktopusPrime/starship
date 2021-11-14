import { Dispatch, createContext, SetStateAction } from 'react';
import Ship from './ShipData/Ship';
import tempShip from './ShipData/TempShip';

export interface IShipContext {
	shipDetails: Ship;
	setShipDetails: Dispatch<SetStateAction<Ship>>;
}

export default createContext<IShipContext>({
	shipDetails: tempShip,
	setShipDetails: () => undefined
});
