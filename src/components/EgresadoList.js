import { useEffect, useState } from "react";

const ListaEgresados = () => {
    const [egresados, setEgresados] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/egresados") // Ajusta la URL si es necesario
            .then(response => response.json())
            .then(data => {
                console.log("Datos recibidos:", data);
                setEgresados(data);
            })
            .catch(error => console.error("Error al obtener los egresados:", error));
    }, []);

    return (
        <div>
            <h2>Lista de Egresados</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tipo Identificación</th>
                        <th>Número Identificación</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Celular</th>
                        <th>Dirección</th>
                        <th>Email</th>
                        <th>Fecha Nacimiento</th>
                        <th>Ciudad ID</th>
                    </tr>
                </thead>
                <tbody>
                    {egresados.map(egresado => (
                        <tr key={egresado.id}>
                            <td>{egresado.id}</td>
                            <td>{egresado.identificacion_tipo}</td>
                            <td>{egresado.identificacion_numero}</td>
                            <td>{egresado.nombre}</td>
                            <td>{egresado.apellidos}</td>
                            <td>{egresado.celular}</td>
                            <td>{egresado.direccion}</td>
                            <td>{egresado.email}</td>
                            <td>{egresado.fecha_nacimiento}</td>
                            <td>{egresado.ciudad_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaEgresados;
