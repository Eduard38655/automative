import { useEffect } from "react";

function useGetCardDetails({
  setCars,
  setFilteredCars,
  Cars,
  FindCard,
    
}) {

  useEffect(() => {

    const GetAllCars = async () => {

      try {

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/v1/cars/GetAllCars`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const result = await response.json();

        if (result.ok) {

          // TODOS LOS CARROS
          setFilteredCars(result.data);
 
          // PRIMERA PAGINA
          setCars(result.data.slice(0, 2));

        }

      } catch (error) {

        console.log(error);

      }

    };

    GetAllCars();

  }, [setCars, setFilteredCars]);

}

export default useGetCardDetails;