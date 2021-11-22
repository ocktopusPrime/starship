import { Tooltip, Typography } from "@mui/material";
import ShipContext from "components/ShipContext";
import { Status } from "components/ShipData/Ship";
import { useContext } from "react";
import { getToolTip } from '../Weapons/Weapons';


interface Props {
    currentStatus: string;
    currentSystem: string;
}
export default function SystemStatus({ currentStatus, currentSystem }: Props) {
    const { shipDetails, setShipDetails } = useContext(ShipContext);
    const statusList: Status[] = [Status.wrecked, Status.malfunctioning, Status.glitching, Status.normal];

    const isCurrent = (status1: string, status2: string) => {
        return status2 === status1 ? `${status2} selected` : status1
    }

    // make this more generic to be able to handle weapon systems
    const handleSetStatus = (status: Status) => {
        const tempArray = shipDetails.criticalDamage;
        const currSystemIndex = tempArray.findIndex((system) => system.name === currentSystem)
        tempArray[currSystemIndex].status = status;
        setShipDetails({ ...shipDetails, 'criticalDamage': tempArray })
    }

    return (
        <>
            {statusList.map((status) => (
                <div className={`status ${isCurrent(status, currentStatus)}`} onClick={() => handleSetStatus(status)}>
                    <Tooltip enterDelay={700} title={getToolTip(status)}>
                        <Typography variant='subtitle2'>{status[0].toUpperCase()}</Typography>
                    </Tooltip>
                </div>
            ))}
        </>

    )
}
