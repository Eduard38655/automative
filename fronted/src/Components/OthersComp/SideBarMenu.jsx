import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "../../styles/SideBar.module.css";
function SideBarMenu(params) {
    const route = useLocation();
    const { CarID } = useParams();
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (<>
        <aside className={styles.aside_Container}>



            {!isCollapsed ? (<>
                <div className={styles.aside_Container_wrapper}>
                    <div className={styles.aside}>
                        <div className={styles.aside_Container_header}>
                            <i className="fa-solid fa-car"></i>
                            <strong>Carshop</strong>
                        </div>
                        <nav>

                            <ul>
                                <li><Link className={route.pathname == "/home" ? styles.active_route : ""} to={"/home"}><i className="fa-solid fa-hands-praying"></i>Dashboard</Link></li>
                                <li><Link className={route.pathname == "/inventory" || route.pathname == `/inventory/${CarID}` ? styles.active_route : styles.active_subroute} to={"/inventory"} ><i className="fa-solid fa-warehouse"></i>Inventory</Link></li>
                                <li><Link className={route.pathname == "/crm" ? styles.active_route : ""} to={"/crm"}><i className="fa-brands fa-sellsy"></i>CRM</Link></li>
                                <li><Link className={route.pathname == "/sales&finances" ? styles.active_route : ""} to={"*sales&finances"}><i className="fa-solid fa-tags"></i>Sales & Finances  </Link>  </li>
                                <li><Link className={route.pathname == "/employees" ? styles.active_route : ""} to={"/employees"}><i className="fa-solid fa-user-tie"></i>Employes</Link></li>
                                <li><Link className={route.pathname == "/service" ? styles.active_route : ""} to={"/service"}><i className="fa-brands fa-ioxhost"></i>Service</Link></li>
                                <li><Link className={route.pathname == "/settings" ? styles.active_route : ""} to={"/settings"}><i className="fa-solid fa-screwdriver-wrench"></i>Settings</Link></li>
                            </ul>

                            <ul>
                                <li><Link> <i className="fa-solid fa-circle-question"></i>Help Center</Link></li>
                                <li><Link to={"Logout"}><i className="fa-solid fa-right-from-bracket"></i>Logout</Link></li>
                            </ul>
                        </nav>
                    </div>


                   <div className={styles.aside_btn_wrapper}>

                     <button className={styles.aside_Container_btn} onClick={toggleSidebar}>
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                   </div>

                </div>


            </>) : (<>

                <div className={styles.aside_div_Container_wrapper}>

                    <button className={styles.aside_Container_btn_Inactive} onClick={toggleSidebar}>
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                </div>

            </>)}







        </aside>




    </>)
}


export default SideBarMenu