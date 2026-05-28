import styles from "../../styles/Inventory.module.css"

function HeaderComp(params) {

    return (<>
        <header className={styles.main_Container_Inventory_header}>

            <div className={styles.Div_search}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search inventory..." />
            </div>

            <div className={styles.Div_user}>


                <div className={styles.Div_user_notifications}>
                    <i className="fa-solid fa-bell"></i>
                    <i className="fa-solid fa-envelope"></i>
                    <i className="fa-regular fa-circle-question"></i>

                </div>
                <div className={styles.wall}></div>

                <div className={styles.Div_user_profile}>
                    <button>Support</button>
                    <div>
                        <img src="https://eduard38655.github.io/PersonalProyect-Main/assets/Foto_Perfile_Proyect_Main-CmJ5ytfo.jpg" alt="" />
                    </div>
                </div>
            </div>
        </header>

    </>)
}

export default HeaderComp