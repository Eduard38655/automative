import style from "../../styles/Features.module.css";

import FeactDoc from "../FeactureComp/FeactDoc";
function CardContent({ selectedCar, selectedVehicle }) {


  return (
    <aside className={style.CardContent_container}>


      <div className={style.CardDetils} >
        <label htmlFor="" className={style.CardDetils_title}>
          <strong>Specifications</strong>
        </label>



        <div className={style.CardDetils_content}>

          <div className={style.content_div}>
            <label htmlFor="">Brand</label>
            <span><strong> {selectedCar.brands?.name}</strong></span>
          </div>

          <div className={style.content_div}>
            <label htmlFor="">year</label>
            <span>  <strong>{selectedVehicle.year}</strong></span>
          </div>

          <div className={style.content_div}>
            <label htmlFor="">Model</label>
            <span><strong>{selectedVehicle.models?.name}</strong></span>
          </div>

          <div className={style.CardDetils_content_div}>
            <label htmlFor="">Color</label>
            <div className={style.SpeciSectColor}  >
              <span style={{ background: `${selectedVehicle.color}` }}></span>
              <strong>{selectedVehicle.color}</strong>
            </div>

          </div>

          <div className={style.content_div}>
            <label htmlFor="">Transmission</label>
            <span><strong>{selectedVehicle.transmission}</strong></span>
          </div>

          <div className={style.content_div}>
            <label htmlFor="">Mileage</label>
            <span><strong>{selectedVehicle.mileage}</strong></span>
          </div>

          <div className={style.content_div}>
            <label htmlFor="">Fuel</label>
            <span><strong>{selectedVehicle.fuel_type}</strong></span>
          </div>

          <div className={style.content_div}>
            <label htmlFor="">Created at</label>
            <span><strong>23/06/2023{/*selectedCar.brands?.created_at */}</strong></span>
          </div>

        </div>







      </div>
< FeactDoc />
    </aside>
  );

}

export default CardContent;