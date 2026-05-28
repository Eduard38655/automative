import { useEffect, useState } from "react";
import CarSales from "../Components/DashboardComp/CarSales";
import SideBarMenu from "../Components/OthersComp/SideBarMenu";

function DashboardPage(params) {
    const [salesOverview, setSalesOverview] = useState([]);

    useEffect(() => {

        const GetAllSales = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/v1/sales/GetAllSales`,
                    {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                const result = await response.json();

                if (result.ok) {
                    setSalesOverview(result.data);
                    
                }
            } catch (error) {
                console.log(error);
                // Handle the error here, e.g. show an error message to the user
            }
        };

        GetAllSales();

    }, []);

    return (<main>
        <SideBarMenu />
        <CarSales salesOverview={salesOverview} setSalesOverview={setSalesOverview} />
    </main>)
}

export default DashboardPage;