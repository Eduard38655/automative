import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Inventory.module.css";
const formatPrice = (price) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

function CarCard({ car, vehicle,Backup, setBackup }) {
  const navigate = useNavigate()
  const primaryImage = vehicle.vehicle_images?.find((img) => img.is_primary);

  useEffect(() => {
    console.log( vehicle);
  }, [car]);

  
  return (
    <div className={styles.card} onClick={() => {
            navigate("/inventory/" + vehicle.id)
            }}>


      <div className={styles.card_imageWrapper}>
        <div className={styles.card_status}>
          <p className={
            vehicle.status === "available"
              ? styles.status_available
              : vehicle.status === "sold"
                ? styles.status_sold
                : vehicle.status === "inactive"
                  ? styles.status_inactive
                  : vehicle.status === "rented"
                    ? styles.status_rented :
                    vehicle.status === "reserved"
                      ? styles.status_reserved
                    : styles.status_pending
          } >{vehicle.status}</p>

        </div>

        {primaryImage && (
          <img
            src={primaryImage.image_url}
            alt={`${vehicle.year} ${car.name}`}
            loading="lazy"
            className={styles.card_image}
          />
        )}
      </div>


      <div className={styles.card_content}>

        <div className={styles.card_info}>
          <div>
            <h2>{car.name}</h2>
            <span>{vehicle.year} • {vehicle.body_style}</span>
          </div>
          <strong>{formatPrice(vehicle.sale_price)}</strong>
        </div>


        <div className={styles.card_specs}>
          <p><i className="fa-solid fa-gas-pump" aria-hidden="true" /> {vehicle.fuel_type}</p>
          <p><i className="fa-solid fa-gear" aria-hidden="true" /> {vehicle.transmission}</p>
          <p><i className="fa-solid fa-car-tunnel" aria-hidden="true" /> {Number(vehicle.mileage).toLocaleString()} mi</p>
        </div>
      </div>

    </div>
  );
}

function CardsContent({ Backup = [] }) {
  return (
    <article className={styles.card_Container}>
      {Backup.map((car) =>
        car.vehicles?.map((vehicle) => (
          <CarCard
            key={vehicle.id}
            car={car}
            vehicle={vehicle}
            
          />
        ))
      )}
    </article>
  );
}

export default CardsContent;