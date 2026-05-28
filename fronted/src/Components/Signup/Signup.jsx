import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/Signup.module.css";

function Signup({ SetPage }) {
    const [Sending, setSending] = useState(false);
    const [OrganizationRole, setOrganizationRole] = useState("");
    const {
        register, handleSubmit, watch, formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        localStorage.setItem("signupData", JSON.stringify(data));
        SetPage(2);
    };

    return (
        <>


            <div className={styles.aside_Container_header}>
                <h2>Create your account</h2>
                <p>Get started with Apex Automotive management portal.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>


                <div className={styles.formGroup}>
                    <div>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" {...register("name", {
                            minLength: { value: 8, message: "Name must be at least 8 characters." },
                            required: "Name is required.",
                            pattern: { value: /^[a-zA-Z\s]+$/, message: "Solo debe contener letras." },
                            maxLength: { value: 50, message: "Name must not exceed 50 characters." }
                        })} />
                        {errors.name && <span>{errors.name.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="email">Work Email</label>
                        <input type="email" id="email" {...register("email", {
                            required: "Email is required.",
                            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email format." },
                            maxLength: { value: 50, message: "Email must not exceed 50 characters." }
                        })} />
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register("password", {
                        minLength: { value: 8, message: "At least 8 characters." },
                        required: "Password is required.",
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message: "Must contain uppercase, lowercase, number, and special character."
                        },
                        maxLength: { value: 20, message: "Max 20 characters." }
                    })} />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" {...register("confirmPassword", {
                        required: "Please confirm your password.",
                        validate: (value) => value === watch("password") || "Passwords do not match"
                    })} />
                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                </div>

                <button type="button" onClick={handleSubmit(onSubmit)} disabled={Sending}>
                    Next <i className="fa-solid fa-arrow-right"></i>
                </button>
            </form>

            <div className={styles.aside_Container_footer}>
                <p>By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                </p>
                <a href="/login">Already have an account? Sign in</a>
            </div>

        </>
    );
}

export default Signup;