import { Dispatch, createContext, SetStateAction } from 'react';
import Ship from './Ship/Ship';

export interface IShipContext {
	shipDetails: Ship | null;
	setShipDetails: Dispatch<SetStateAction<Ship | null>>;
}

export default createContext<IShipContext>({
	shipDetails: null,
	setShipDetails: () => undefined
});
