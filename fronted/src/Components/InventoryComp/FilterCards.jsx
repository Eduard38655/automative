
import { useEffect, useState } from "react"
import styles from "../../styles/Inventory.module.css"
function FilterCards({ Cars, setCars }) {
    const [FilteredCars, setFilteredCars] = useState([])
    const [Brand, setBrand] = useState([])

    
   

    useEffect(() => {

     const brands   = Cars.map((car) => {



            setBrand((prev) => [...prev, car.brands.name])

            return car.brands.name

        })
          

    }, [Cars])

    useEffect(() => {

   
         const info=Cars.map((car) => {
           const info= car.vehicles.map((vehicle) => {
      console.log(vehicle,"vehiclexx");
      
                if (FilteredCars.includes(vehicle.status)) {
                   setCars((prev) => [prev, vehicle])
                    
                }
            })
 

        })
 

    }, [FilteredCars])

    return (<>
        <aside className={styles.aside_Container_filter}>


            <div className={styles.aside_Container_filter_sections_status}>


                <div className={styles.aside_Container_filter_status}>
                    <label htmlFor="">Availavilituy Status</label>
                    <div className={styles.aside_Container_filter_status_options}>
                        <div>
                            <input type="checkbox" onClick={(e)=>setFilteredCars((prev)=>[...prev,"available"])}  /><label htmlFor="">Available</label>
                        </div>
                        <div>
                            <input type="checkbox"  onClick={(e)=>setFilteredCars((prev)=>[...prev,"reserved"])}/><label htmlFor="">Reserved</label>
                        </div>
                        <div>
                            <input type="checkbox" onClick={(e)=>setFilteredCars((prev)=>[...prev,"sold"])} /><label htmlFor="">Sold</label>
                        </div>
                    </div>
                </div>

                <div className={styles.aside_Container_filter_brand}>
                    <label htmlFor="">Brand</label>
                    <select name="" id="" onChange={(e)=>{setFilteredCars((prev)=>[...prev,e.target.value])}}>
                        <option value="">All Brands</option>
                        {Brand.map((brand,index) => <option key={index} value={brand}>{brand}</option>)}
                    </select>
                </div>

                <div className={styles.aside_Container_filter_price}>
                    <label htmlFor="">Price Range</label>

                    <div className={styles.aside_Container_filter_price_range}>
                        <div>
                            $
                            <input type="number" placeholder="Min" />

                        </div>
                        {" - "}
                        <div>
                            $
                            <input type="number" placeholder="Max" />

                        </div>

                    </div>

                </div>
                <button><i className="fa-solid fa-arrow-rotate-left"></i>Reset All</button>

            </div>


        </aside>



    </>)
}

export default FilterCards