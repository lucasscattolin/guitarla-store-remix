import { Link } from "@remix-run/react";

export default function Guitarra({ guitarra }) {
	const { nombre, descripcion, precio, imagen, url } = guitarra.attributes;
	return (
		<div className="guitarra">
      <img src={imagen.data.attributes.formats.medium.url} alt={`Foto de guitarra ${nombre}`} />
			<div className="contenido">
				<h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio}</p>

        <Link className="enlace" to={`/guitarras/${url}`}>Ver Producto</Link>
			</div>
		</div>
	);
}
