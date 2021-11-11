import { Dispatch, createContext, SetStateAction } from 'react';
import Ship, { tempShip } from './Ship/Ship';

export interface IShipContext {
	shipDetails: Ship;
	setShipDetails: Dispatch<SetStateAction<Ship>>;
}

export default createContext<IShipContext>({
	shipDetails: tempShip,
	setShipDetails: () => undefined
});
