
import { useEffect, useState } from "react"
import styles from "../../styles/Inventory.module.css"
function FilterCards({ Cars, setCars, Backup, setBackup }) {
    
    
    const [FilteredCars, setFilteredCars] = useState([
        {
            status: [],
            brand: "",
            price: { min: 0, max: 0 }

        }

    ])
    const [Brand, setBrand] = useState([])




    useEffect(() => {

        const brands = Cars.map((car) => {



            setBrand((prev) => [...prev, car.brands.name])

            return car.brands.name

        })


    }, [Cars])

    useEffect(() => {
        const filter = FilteredCars.filter((fil) => {
            return fil.brand || fil.status
        })

    


        const info = FilteredCars.map((e) => {
        
        })

        /*
        Cars.map((car) => {
            console.log(car.brands.name, "111")
            if (car.brands.name == filter.brand) {
                console.log(car.brands.name, "222zz")
            }
            car.vehicles.map((car) => {
                console.log(car.status, "ss")
            })
        })
        */



        console.log(FilteredCars);

    }, [FilteredCars])

    const statusOptions = [
        { value: "available", label: "Available" },
        { value: "reserved", label: "Reserved" },
        { value: "sold", label: "Sold" },
    ];
    return (<>
        <aside className={styles.aside_Container_filter}>


            <div className={styles.aside_Container_filter_sections_status}>


                <div className={styles.aside_Container_filter_status}>
                    <label htmlFor="">Availavilituy Status</label>
                    <div className={styles.aside_Container_filter_status_options}>

                        {statusOptions.map((option, index) => (
                            <div key={index}>
                                <input type="checkbox" onClick={(e) => setFilteredCars((prev) => [...prev, { status: option.value }])} /><label htmlFor="">{option.label}</label>
                            </div>
                        ))}

                    </div>
                </div>

                <div className={styles.aside_Container_filter_brand}>
                    <label htmlFor="">Brand</label>
                    <select name="" id="" onChange={(e) => { setFilteredCars((prev) => [ prev, [ { brand: e.target.value }]]) }}>
                        <option value="">All Brands</option>
                        {Brand.map((brand, index) => <option key={index} value={brand}>{brand}</option>)}
                    </select>
                </div>

                <div className={styles.aside_Container_filter_price}>
                    <label htmlFor="">Price Range</label>

                    <div className={styles.aside_Container_filter_price_range}>
                        <div>
                            $
                            <input type="number" placeholder="Min" onChange={(e) => { setFilteredCars((prev) => [...prev, { price: { min: e.target.value } }]) }} />

                        </div>
                        {" - "}
                        <div>
                            $
                            <input type="number" placeholder="Max" onChange={(e) => { setFilteredCars((prev) => [...prev, { price: { max: e.target.value } }]) }} />

                        </div>

                    </div>

                </div>
                <button><i className="fa-solid fa-arrow-rotate-left"></i>Reset All</button>

            </div>


        </aside>



    </>)
}

export default FilterCards