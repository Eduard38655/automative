import { useEffect, useState } from "react";
import style from "../../styles/Features.module.css";
function CarHistorySection({ selectedCar, selectedVehicle }) {

    const [history, setHistory] = useState([]);

    useEffect(() => {
        
        setHistory(selectedVehicle.vehicle_status_history);
    }, [selectedVehicle]);
    if (!history || history.length === 0) {
        return (
            <aside className={style.history_container}>
                <p className={style.no_history}>No hay historial disponible</p>
            </aside>
        );
    }

    return (<>


        {history.map((status) => (



            <div key={status.id} className={style.history_status}>

                <div className={style.history_status_header}>
                    <div className={style.circle_status}>
                        <div>

                        </div>
                    </div>

                    <p>{status.old_status} <span>{new Date(status.created_at).toLocaleString()}</span></p>

                </div>

                <p className={style.history_status_notes}> {status.notes}</p>
            </div>
        ))}

    </>)
}

export default CarHistorySection;