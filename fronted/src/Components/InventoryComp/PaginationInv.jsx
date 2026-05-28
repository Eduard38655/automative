import { useEffect, useState } from "react"
import styles from "../../styles/Inventory.module.css"

function PaginationInv({
    Cars,
    setCars,
    FilteredCars,
    setFilteredCars
}) {

    const [currentPage, setCurrentPage] = useState(1)

    const carsPerPage = 6

    /* CARGA LOS DATOS SOLO UNA VEZ */
    useEffect(() => {

        if (FilteredCars.length > 0) {

            const firstCars = FilteredCars.slice(0, carsPerPage)

            setCars(firstCars)
        }

    }, [FilteredCars])

    const totalPages = Math.ceil(
        FilteredCars.length / carsPerPage
    )

    const ChangePage = (page) => {

        const newCars = FilteredCars.slice(
            (page - 1) * carsPerPage,
            page * carsPerPage
        )

        setCars(newCars)

        setCurrentPage(page)
    }

    const NextPage = () => {

        if (currentPage < totalPages) {

            ChangePage(currentPage + 1)
        }
    }

    const PrevPage = () => {

        if (currentPage > 1) {

            ChangePage(currentPage - 1)
        }
    }

    return (
        <div className={styles.pagination_Container}>

            <button
                onClick={PrevPage}
                disabled={currentPage === 1}
            >
               <i className="fa-solid fa-angle-left"></i>
            </button>

            <span>
                {currentPage} / {totalPages}
            </span>

            <button
                onClick={NextPage}
                disabled={currentPage === totalPages}
            >
                <i className="fa-solid fa-angle-right"></i>
            </button>

        </div>
    )
}

export default PaginationInv