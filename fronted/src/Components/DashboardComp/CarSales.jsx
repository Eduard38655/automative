import { useEffect, useState } from "react";
function CarSales({ salesOverview, setSalesOverview }) {

  const [salesCard, setSalesCard] = useState([]);


  useEffect(() => {
    const sortedSales = salesOverview.sort((a, b) => b.sales - a.sales);
    console.log(sortedSales);

  }, [salesOverview])
  return (<>

  </>)
}

export default CarSales;