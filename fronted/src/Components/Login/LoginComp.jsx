import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import styles from "../../styles/Login.module.css";
function LoginComp(params) {
    const navagation = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {


            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }, credentials: "include",
                body: JSON.stringify({
                    email: data.email,
                    password: data.password
                }),

            })

            const result = await response.json()
            console.log(result);

            if (!result.ok) {
                toast.error(result.message)
            } else {
                toast.success(result.message)
                navagation("/home")
            }

        } catch (error) {
            console.error(error); // o mostrar error en UI
            toast.error("Login failed")
        } finally {
            setIsSubmitting(false);
        }
    };



    return (<>
        <article className={styles.aside_Container}>

            <div className={styles.aside_Container_header}>
                <div className={styles.logo_Div}>
                    <i className="fa-solid fa-car"></i>
                </div>

                <div className={styles.Logo_Text}>
                    <h3> <strong>Apex Automotive</strong></h3>
                    <small> The Precision Concierge</small>
                </div>
            </div>


            <form onSubmit={handleSubmit(onSubmit)}>


                <div className={styles.formGroup} >


                    <div className={styles.Div_Input}>
                        <label htmlFor="email">Email Address</label>
                        <div>
                            <i className="fa-solid fa-envelope"></i>

                            <input type="email" id="email" placeholder="example@gmail.com"  {...register("email", {
                                required: "Email is required.",
                                pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email format." },
                                maxLength: { value: 50, message: "Email must not exceed 50 characters." }
                            })} />

                        </div>
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>




                    <div className={styles.Div_Input}>
                        <label htmlFor="password">Password  </label>
                        <a href="#">Forgot password?</a>
                        <div>
                            <i className="fa-solid fa-key"></i>
                            <input type="password" id="password" placeholder="••••••••••••••••" {...register("password", {
                                required: "Password is required.",
                                minLength: { value: 8, message: "At least 8 characters." },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: "Must contain uppercase, lowercase, number, and special character."
                                },
                                maxLength: { value: 20, message: "Max 20 characters." }
                            })} />
                        </div>
                        {errors.password && <span>{errors.password.message}</span>}
                    </div>

                    <div className={styles.Div_CheckBox}>
                        <input type="checkbox" id="remember"  {...register("remember")} />
                        <label htmlFor="remember"> Remember me /{" "}  <Link to="/Signup">Sign up</Link></label>
                    </div>



                </div>







            </form>

            <button disabled={isSubmitting} type="submit" onClick={handleSubmit(onSubmit)}>
                {isSubmitting ? "Signing in..." : "Secure Login"}
                <i className="fa-solid fa-arrow-right-long"></i>
            </button>
            <div className={styles.aside_Container_footer_line}>

            </div>
            <div className={styles.aside_Container_footer}>
                <p><span className={styles.dot}></span> System Status: Optimal</p>


                <small>v2.4.1</small>
            </div>
        </article>

    </>)
}


export default LoginComp