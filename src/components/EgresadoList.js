import { useEffect, useState } from "react";
import "./style.css";
import logImg from "./img/log.png";
import registerImg from "./img/register.svg";

const ListaEgresados = () => {
    // eslint-disable-next-line no-unused-vars
    const [egresados, setEgresados] = useState([]);

    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        identificacion_tipo: "",
        identificacion_numero: "",
        nombre: "",
        apellidos: "",
        celular: "",
        direccion: "",
        email: "",
        fecha_nacimiento: "",
        contrasena: "",
        ciudad_id: ""
    });

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/egresados")
            .then(response => response.json())
            .then(data => setEgresados(data))
            .catch(error => console.error("Error al obtener los egresados:", error));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/api/egresados", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const text = await response.text();
            console.log("Respuesta del servidor:", text);

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status} - ${text}`);
            }

            alert("Registro exitoso!");

            setFormData({
                identificacion_tipo: "",
                identificacion_numero: "",
                nombre: "",
                apellidos: "",
                celular: "",
                direccion: "",
                email: "",
                fecha_nacimiento: "",
                contrasena: "",
                ciudad_id: ""
            });
        } catch (error) {
            console.error("Error al registrar egresado:", error);
            alert("Hubo un error en el registro.");
        }
    };

    return (
        <div className={`container ${isSignUp ? "sign-up-mode" : ""}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    {!isSignUp ? (
                        <form className="sign-in-form">
                            <h2 className="title">Inicio Sesión</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Usuario" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Contraseña" />
                            </div>
                            <input type="submit" value="Login" className="btn solid" />
                        </form>
                    ) : (
                        <form className="sign-up-form" onSubmit={handleSubmit}>
                            <h2 className="title">Registro</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" name="apellidos" placeholder="Apellido" value={formData.apellidos} onChange={handleChange} required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-map-marker-alt"></i>
                                <input type="number" name="ciudad_id" placeholder="Ciudad ID" value={formData.ciudad_id} onChange={handleChange} required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-map-marker-alt"></i>
                                <input type="text" name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} required />
                            </div>

                            <div className="input-field">
                                <i className="fas fa-id-card"></i>
                                <select name="identificacion_tipo" value={formData.identificacion_tipo} onChange={handleChange} required>
                                    <option value="" disabled>Tipo de Identificación</option>
                                    <option value="C.C.">C.C</option>
                                    <option value="C.E.">C.E</option>
                                </select>
                            </div>

                            <div className="input-field">
                                <i className="fas fa-id-card"></i>
                                <input type="text" name="identificacion_numero" placeholder="Identificación" value={formData.identificacion_numero} onChange={handleChange} required />
                            </div>

                            <div className="input-field">
                                <i className="fas fa-phone"></i>
                                <input type="text" name="celular" placeholder="Celular" value={formData.celular} onChange={handleChange} required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-calendar-alt"></i>
                                <input type="date" name="fecha_nacimiento" value={formData.fecha_nacimiento} onChange={handleChange} required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" name="contrasena" placeholder="Contraseña" value={formData.contrasena} onChange={handleChange} required />
                            </div>
                            <input type="submit" className="btn" value="Registrarse" />
                        </form>
                    )}
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>¿Nuevo aquí?</h3>
                        <p>Regístrate al sistema de egresados de la Universidad Mariana!</p>
                        <button className="btn transparent" onClick={() => setIsSignUp(true)}>Registro</button>
                    </div>
                    <img src={logImg} className="image" alt="Login" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>¿Ya eres uno de nosotros?</h3>
                        <p>Si ya perteneces al sistema de egresados, inicia sesión.</p>
                        <button className="btn transparent" onClick={() => setIsSignUp(false)}>Inicio Sesión</button>
                    </div>
                    <img src={registerImg} className="image" alt="Registro" />
                </div>
            </div>
        </div>
    );
};

export default ListaEgresados;
