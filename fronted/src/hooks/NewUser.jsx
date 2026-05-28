import { useEffect } from "react";

function NewUserAccount({ params }) {

  useEffect(() => {
    const registerUser = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        });

        const data = await res.json();
        console.log(data);

      } catch (error) {
        console.error(error);
      }
    };

    registerUser();
  }, [params]);

}

export default NewUserAccount;