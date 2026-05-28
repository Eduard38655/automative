import { useState } from "react";
import style from "../../styles/Features.module.css";
import CarFeatureSection from "../FeactureComp/CarFeacture.jsx";
import CarHistorySection from "./CarHistorySection.jsx";
function HistoryNav({ selectedCar, selectedVehicle }) {
    const [userSelection, setUserSelection] = useState("history");



    return (<>
        <aside className={style.history_container}>
            <div className={style.history_nav}>
                <button className={userSelection === "history" ? style.buttons_active : ""} onClick={() => setUserSelection("history")} className={userSelection === "history" ? style.buttons_active : ""}>
                    History
                </button>
                <button className={userSelection === "feature" ? style.buttons_active : ""} onClick={() => setUserSelection("feature")}>
                    Feature
                </button>
            </div>

            <div className={style.history_container_options}>
                {userSelection === "history" && (
                    <CarHistorySection selectedCar={selectedCar} selectedVehicle={selectedVehicle} />
                )}
                {userSelection === "feature" && (
                    <CarFeatureSection selectedCar={selectedCar} selectedVehicle={selectedVehicle} />
                )}
            </div>
        </aside>
    </>)
}

export default HistoryNav;