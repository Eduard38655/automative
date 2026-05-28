import { useEffect, useState } from "react";
import style from "../../styles/Features.module.css";

function CarFeature({ selectedVehicle }) {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        // Validar que selectedVehicle y sus propiedades existan
        if (selectedVehicle?.vehicle_features && Array.isArray(selectedVehicle.vehicle_features)) {
            // Extraer las características directamente
            const extractedFeatures = selectedVehicle.vehicle_features
                .map((item) => item.features)
                .filter(Boolean); // Filtrar valores null/undefined

            setFeatures(extractedFeatures);
        }
    }, [selectedVehicle]);

    // Si no hay características
    if (!features || features.length === 0) {
        return (
            <aside className={style.history_container}>
                <p className={style.no_history}>No hay características disponibles</p>
            </aside>
        );
    }

    return (

        <>
            {
                features.map((feature, index) => (
                    <div key={`${feature.id || index}`} className={style.feature_item}>
                        <div className={style.feature_header}>

                            <div className={style.circle_status}>
                                <div>

                                </div>
                            </div>


                            <span className={style.feature_name}>{feature.name}</span>
                            {"•"}
                            <span className={style.feature_date}>{feature.created_at}</span>
                        </div>

                        {feature.description && (
                            <p className={style.feature_description}>{feature.description}</p>
                        )}
                    </div>
                ))
            }



        </>
    );
}

export default CarFeature;