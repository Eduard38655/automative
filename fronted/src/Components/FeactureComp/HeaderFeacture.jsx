import styles from "../../styles/Features.module.css";
function HeaderFeacture({ selectedCar, selectedVehicle }) {

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

  return (
    <>

      <div className={styles.header_feacture_container}>

        <div className={styles.header_feacture_content}>

          <h3>
            {selectedVehicle.year} {" "} {selectedCar.brands?.name}
          </h3>

          <p><span>{selectedVehicle.status}</span> {"•"} <small>VIN: {selectedVehicle.vin}</small></p>




        </div>


        <div className={styles.header_feacture_price}>

          <label htmlFor="">
            Asking Price
          </label>
          <span>
            <strong>  {formatPrice(selectedVehicle.purchase_price)}</strong>
          </span>


        </div>








      </div>
      
    </>
  );

}

export default HeaderFeacture;