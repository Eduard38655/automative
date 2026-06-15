import { useState } from "react"
import CardsContent from "../Components/InventoryComp/CardsContent.jsx"
import FilterCards from "../Components/InventoryComp/FilterCards.jsx"
import PaginationInv from "../Components/InventoryComp/PaginationInv.jsx"
import HeaderComp from "../Components/OthersComp/HeaderComp.jsx"
import SideBarMenu from "../Components/OthersComp/SideBarMenu.jsx"
import useGetCardDetails from "../hooks/GetCardDetails"
import styles from "../styles/Inventory.module.css"
function InventoryPage() {
    const [Cars, setCars] = useState([])
    const [Backup, setBackup] = useState([])
    /* TODOS LOS CARROS */
    const [FilteredCars, setFilteredCars] = useState([])
    useGetCardDetails({
        setCars,
        setFilteredCars,
        Cars,
        Backup, setBackup
    });

    /* CARROS VISIBLES */



    return (

        <main className={styles.main_Container_Inventory}>

            <SideBarMenu />

            <article className={styles.main_Container_Inventory_article}>


                <HeaderComp />
                <article className={styles.main_Container}>

                    <div className={styles.main_Container_Inventory_article_header}>

                        <div className={styles.main_Container_Inventory_article_header_filter}>

                            <div className={styles.Inv_Header}>
                                <h3>Vehicle Inventory</h3>

                                <span>
                                    Showing {FilteredCars.length} vehicles
                                </span>
                            </div>

                            <PaginationInv
                                Cars={Cars}
                                setCars={setCars}
                                FilteredCars={FilteredCars}
                                setFilteredCars={setFilteredCars}
                            />

                        </div>

                        <FilterCards
                            Cars={FilteredCars}
                            setCars={setFilteredCars}
                            Backup={Backup} setBackup={setBackup}

                        />

                        <CardsContent
                            Cars={Cars}
                             setCars={setFilteredCars}
                            Backup={Backup} 
                            setBackup={setBackup}
                        />

                    </div>

                </article>

            </article>

        </main>
    )
}

export default InventoryPage