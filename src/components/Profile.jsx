import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const [user, setUser] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        // Obtener el usuario del sessionStorage
        const user = sessionStorage.getItem("usuario");
        if (user) {
            setUser(user);
        } else {
            alert('Usuario no Logueado')
            navigate('*')
        }
    }, []);

    return (
        <div className="flex flex-col items-center font-custom p-4 flex-grow">
            <img
                src="/LogoDDB.png"
                alt="Logo"
                className="w-32 h-auto object-cover pt-2"
            />
            <h1 className="text-4xl font-bold text-center">
                Bienvenido a Defensores del Branca {user}
            </h1>
        </div>
    );
}

export default Profile;
