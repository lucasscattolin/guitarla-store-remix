import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
	return {
		title: "GuitarLA - Sobre Nosotros",
		description: "Venta de guitarras, blog de música",
	};
}

export function links() {
	return [
		{
			rel: "stylesheet",
			href: styles,
		},
		{
			rel: "preload",
			href: imagen,
			as: "image",
		},
	];
}

function Nosotros() {
	return (
		<main className="contenido nosotros">
			<h2 className="heading">Nosotros</h2>

			<div className="contenido">
				<img src={imagen} alt="Imagen sobre nosotros" />

				<div>
					<p>
						{" "}
						Elit ullamcorper dignissim cras tincidunt lobortis. Posuere morbi leo urna molestie at
						elementum eu. Nunc sed id semper risus in hendrerit gravida. In mollis nunc sed id
						semper risus in hendrerit. Adipiscing elit pellentesque habitant morbi tristique
						senectus et. Egestas tellus rutrum tellus pellentesque eu. Venenatis cras sed felis eget
						velit.
					</p>
					<p>
						{" "}
						Elit ullamcorper dignissim cras tincidunt lobortis. Posuere morbi leo urna molestie at
						elementum eu. Nunc sed id semper risus in hendrerit gravida. In mollis nunc sed id
						semper risus in hendrerit. Adipiscing elit pellentesque habitant morbi tristique
						senectus et. Egestas tellus rutrum tellus pellentesque eu. Venenatis cras sed felis eget
						velit.
					</p>
				</div>
			</div>
		</main>
	);
}

export default Nosotros;
