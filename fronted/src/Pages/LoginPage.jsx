import LoginComp from "@/Components/Login/LoginComp.jsx";
import styles from "../styles/Login.module.css";
function LoginPage(params) {

    return (<main className={styles.Login_main_Container}>
        <LoginComp />
    </main>)
}

export default LoginPage