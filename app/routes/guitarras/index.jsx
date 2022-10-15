import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import ListadoGuitarras from "~/components/ListadoGuitarras";

export function meta() {
	return {
		title: "GuitarLA - Tienda de Guitarras",
		description: "GuitarLA tienda de guitarras y blogs",
	};
}

export async function loader() {
	const guitarras = await getGuitarras();
	return guitarras;
}

function Tienda() {
	const guitarras = useLoaderData().data;

	return <ListadoGuitarras guitarras={guitarras} />;
}

export default Tienda;
