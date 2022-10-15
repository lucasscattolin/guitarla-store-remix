import { useLoaderData, useOutletContext } from "@remix-run/react";
import { useState } from "react";
import { getGuitarra } from "~/models/guitarras.server";

export async function loader({ params }) {
	const { guitarraUrl } = params;
	const guitarra = await getGuitarra(guitarraUrl);

	if (guitarra.data.length === 0) {
		throw new Response("", {
			status: 404,
			statusText: "Guitarra No Encontrada",
		});
	}

	return guitarra;
}

export function meta({ data }) {
	if (!data) {
		return {
			title: "GuitarLA - Guitarra No Encontrada",
			description: "GuitarLA tienda de guitarras y blogs sobre guitarras - Guitarra No Encontrada",
		};
	}

	return {
		title: `GuitarLA - ${data.data[0].attributes.nombre}`,
		description: `GuitarLA tienda de guitarras y blogs sobre guitarras - Guitarra ${data.data[0].attributes.nombre}`,
	};
}

const Guitarra = () => {
	const {agregarCarrito} = useOutletContext();
	const [cantidad, setCantidad] = useState(0);
	const guitarra = useLoaderData();
	const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (cantidad < 1) {
			alert("Debes seleccionar una cantidad de guitarras");
			return;
		}

		const guitarraSeleccionada = {
			id: guitarra.data[0].id,
			imagen: imagen.data.attributes.url,
			nombre,
			precio,
			cantidad,
		};

		agregarCarrito(guitarraSeleccionada)
	};

	return (
		<div className="guitarra">
			<img
				src={imagen.data.attributes.url}
				alt={`Imagen de la guitarra ${nombre}`}
				className="imagen"
			/>
			<div className="contenido">
				<h3>{nombre}</h3>
				<p className="texto">{descripcion}</p>
				<p className="precio">${precio}</p>

				<form onSubmit={handleSubmit} className="formulario">
					<label htmlFor="cantidad">Cantidad</label>
					<select onChange={(e) => setCantidad(parseInt(e.target.value))} id="cantidad">
						<option value="">Seleccione Cantidad</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>

					<input type="submit" value="Agregar al Carrito" />
				</form>
			</div>
		</div>
	);
};

export default Guitarra;
