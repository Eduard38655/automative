
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import styles from "../../styles/Signup.module.css";
function Signup({ SetPage }) {
    const [Sending, setSending] = useState(false)
    const [OrganizationRole, setOrganizationRole] = useState("")
    const [OrganizationPermissions, setOrganizationPermissions] = useState([]) // empty array
    const [userRole, setUserRole] = useState("")
    const [permissions, setPermissions] = useState([])
    const [roles, setRoles] = useState([])
    const navigation = useNavigate()

    useEffect(() => {
        async function GetRole_Permissions() {  // ← async aquí
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/GetRole&Permissions`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })

                const result = await res.json()
                console.log(result);

                if (!res.ok) {
                    alert(result.message || "Error al obtener roles")
                    return
                }

                setRoles(result.roles)
                setPermissions(result.permissions)

            } catch (error) {
                console.error(error)
                alert("Error del servidor")
            }
        }

        GetRole_Permissions()  // ← la llamas sin await
    }, [])


    async function handleSubmit(params) {
        if (!OrganizationRole) {
            toast.warning("Please select a role.");
            return;
        }
        if (OrganizationPermissions.length === 0) {
            toast.warning("Please select at least one permission.");
            return;
        }
        setSending(true)
        const getData = localStorage.getItem("signupData");
        if (!getData) {
            toast.error("Session expired. Please start again.");
            SetPage(1);
            return;
        }
        const data = JSON.parse(getData);

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data,
                    organizationRole: OrganizationRole
                    ,
                    OrganizationPermissions: OrganizationPermissions
                })
            });

            const result = await res.json();


            if (!res.ok) {
                toast.error(result.message || "Error al registrarse");
                return;
            }
            toast.success(result.message);
            localStorage.removeItem("signupData"); // ← limpia los datos
            navigation("/login");

        } catch (error) {
            console.error(error);
            alert("Error del servidor");
        } finally {
            setSending(false);
        }
    };

    function AddUserPermission(permission) {
        const alreadySelected = OrganizationPermissions.some(p => p.id === permission.id);

        if (alreadySelected) {
            setOrganizationPermissions(prev => prev.filter(p => p.id !== permission.id));
            return;
        }
        setOrganizationPermissions(prev => [...prev, permission]);
    }

    return (<>



        <div className={styles.aside_Role_header}>
            <button onClick={() => SetPage(1)}>
                <i className="fa-solid fa-arrow-left"></i>
            </button>
            <div >
                <h2>  Role & Permission Assignment</h2>
                <p>Select a role to configure automated system permissions.</p>
            </div>
        </div>

        <article className={styles.article_Permissions_Container}>



            <div className={styles.aside_Role_details}>

                <div className={styles.aside_Role_Container}>
                    <label htmlFor="organization">1. Select Organization Role</label>
                    <div className={styles.aside_Role_Container_details}>
                        <div>
                            {roles.map((item, index) => {
                                return (
                                    <button key={index} onClick={() => setOrganizationRole(item.id)} className={OrganizationRole === item.id ? styles.active_role : styles.inactive_role}>

                                        {item.name}
                                    </ button>
                                )
                            })}

                        </div>
                    </div>
                </div>



                <div className={styles.aside_permissions_Container}>
                    <label htmlFor="">2. Automated Permissions</label>
                    <div className={styles.aside_permissions_Container_details}>
                        <div>
                            {permissions.map((item, index) => {
                                return (
                                    <button key={index} onClick={() => AddUserPermission({ name: item.name, id: item.id })} className={OrganizationPermissions.map((item) => item.name).includes(item.name) ? styles.active_permission : styles.inactive_permission}>

                                        {item.name}
                                    </ button>
                                )
                            })}
                        </div>
                    </div>
                </div>


            </div>

            <button type="button" onClick={handleSubmit} disabled={Sending} className={styles.submit_button}>
                Submit
            </button>
        </article>

        <div className={styles.aside_Container_footer}>
            Permissions can be manually adjusted after setup by an organization owner.
        </div>







    </>)
}

export default Signup