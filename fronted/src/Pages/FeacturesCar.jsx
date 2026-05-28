import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FeactureContent from "../Components/FeactureComp/CardContent.jsx";
import HeaderFeacture from "../Components/FeactureComp/HeaderFeacture.jsx";
import HistoryNav from "../Components/FeactureComp/HistoryNav.jsx";
import ImagesGalery from "../Components/FeactureComp/ImagesGalery.jsx";
import HeaderComp from "../Components/OthersComp/HeaderComp.jsx";
import SideBarMenu from "../Components/OthersComp/SideBarMenu.jsx";
import useGetCardDetails from "../hooks/GetCardDetails.jsx";
import style from "../styles/Features.module.css";
function FeaturesCar() {

  const { CarID } = useParams();

  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  const [selectedCar, setSelectedCar] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState([]);

  //Almacenar las imagenes para luego crear el carrito
  const [images_store, setImages_store] = useState([]);

  // OBTENER DATOS
  useGetCardDetails({
    setCars,
    setFilteredCars,
  });

  // BUSCAR VEHICULO
  useEffect(() => {

    filteredCars.forEach((car) => {

      const foundVehicle = car.vehicles?.find(
        (vehicle) => vehicle.id == CarID
      );

      if (foundVehicle) {

        setSelectedCar(car);
        setSelectedVehicle(foundVehicle);

      }

    });

  }, [CarID, filteredCars]);
 




  // LOADING
  if (!selectedCar || !selectedVehicle) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <main className={style.main_container_feactures}>
        <SideBarMenu />


        <article className={style.feacture_container}>
          <div className={style.content_container}>
            <HeaderComp />

            <div className={style.subfeacture_container}>
              <HeaderFeacture selectedCar={selectedCar} selectedVehicle={selectedVehicle} />
              <div className={style.Subcontent_container}>
                <FeactureContent selectedCar={selectedCar} selectedVehicle={selectedVehicle} />
                <ImagesGalery selectedCar={selectedCar} selectedVehicle={selectedVehicle} />
              </div>
              <HistoryNav selectedCar={selectedCar} selectedVehicle={selectedVehicle}/>
             </div>
          </div>
        </article>
      </main>
    </>
  );
  //vehicle_images
}

export default FeaturesCar;