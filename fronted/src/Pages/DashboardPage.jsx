import { useEffect, useState } from "react";
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

                        headers: {
                            "Content-Type": "application/json",
                        },
                        include: "include", // Include cookies in the request
                        credentials: "include", // Include cookies in the request
                    }
                );
                const result = await response.json();
                console.log(result, "ss");
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
        {/*<CarSales salesOverview={salesOverview} setSalesOverview={setSalesOverview} />*/}
    </main>)
}

export default DashboardPage;