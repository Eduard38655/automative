import { useEffect, useState } from "react";
function CarSales({salesOverview, setSalesOverview}) {

 const [salesCard, setSalesCard] = useState([]);

 
 useEffect(() => {
const sortedSales =salesOverview.sort((a, b) => b.sales - a.sales);


 },[salesOverview])
  return (<> 
  
  </>)
}

export default CarSales;