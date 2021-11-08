import { useState } from 'react';
import { Info } from '../Ship';

interface Props {
    info?: Info;
}

const tempInfo = {
    name: '',
    make: '',
    model: '',
    class: '',
    size: '',
    speed: '',
    manuverability: '',
    rating: '',
    engine: '',
    pcu: '',
    powercore: '',
    shields: { max: '' },
    sensors: ''
};

export default function ShipInfo({ info }: Props) {
    const [sInfo, setSInfo] = useState(info || tempInfo);

    return (
        <div>
            <div id='ship-name'>{sInfo.name}</div>
            <div id='ship-name'>{sInfo.make}</div>
            <div id='ship-name'>{sInfo.model}</div>
            <div id='ship-name'>{sInfo.class}</div>
            <div id='ship-name'>{sInfo.size}</div>
            <div id='ship-name'>{sInfo.speed}</div>
            <div id='ship-name'>{sInfo.manuverability}</div>
            <div id='ship-name'>{sInfo.rating}</div>
            <div id='ship-name'>{sInfo.engine}</div>
            <div id='ship-name'>{sInfo.pcu}</div>
            <div id='ship-name'>{sInfo.powercore}</div>
            <div id='ship-name'>{sInfo.shields?.max}</div>
            <div id='ship-name'>{sInfo.sensors}</div>
        </div>
    );
}
