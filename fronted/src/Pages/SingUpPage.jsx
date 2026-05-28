import RolesSignup from "@/Components/Signup/RolesSignup.jsx";
import Signup from "@/Components/Signup/Signup.jsx";
import { useState } from "react";
import styles from "../styles/Signup.module.css";

function SignUpPage(params) {
    const [page, SetPage] = useState(1)
    return (<main className={styles.main_Container}>

        <div className={styles.main_Container_article}>

            <div className={styles.main_Container_image}>
                <h3><strong>Step {page} from 3</strong></h3>
                <h4>Join the precision network</h4>
                <p>Streamline your dealership operations with our elite management suite.</p>
            </div>

            <div className={styles.aside_Container}>
                {page === 1 && <Signup SetPage={SetPage} />}
                {page === 2 && <RolesSignup SetPage={SetPage} />}

            </div>
        </div>

    </main>)
}


export default SignUpPage