import { Meta, Links, Outlet, Scripts, LiveReload, useCatch, Link } from "@remix-run/react";
import { useState, useEffect } from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import styles from "~/styles/index.css";

export function meta() {
	return {
		charset: "utf-8",
		title: "GuitarLA",
		viewposrt: "width=devuce-width, initial-scale=1",
	};
}

export function links() {
	return [
		{
			rel: "stylesheet",
			href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
		},
		{
			rel: "preconnect",
			href: "https://fonts.googleapis.com",
		},
		{
			rel: "preconnect",
			href: "https://fonts.gstatic.com",
			crossOrigin: "true",
		},
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
		},
		{
			rel: "stylesheet",
			href: styles,
		},
	];
}

export default function App() {

	const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null;
	const [carrito, setCarrito] = useState(carritoLS);

	useEffect(() => {
		localStorage.setItem("carrito", JSON.stringify(carrito));
	}, [carrito]);

	const agregarCarrito = (guitarra) => {
		if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
			// Iterar sobre el arreglo, e identificar el elemento duplicado
			const carritoActualizado = carrito.map((guitarraState) => {
				if (guitarraState.id === guitarra.id) {
					// Reescribir la cantidad (Usar += para sumar una nueva cantidad)
					guitarraState.cantidad = guitarra.cantidad;
				}
			});
		} else {
			// Registro nuevo, agregar al carrito
			setCarrito([...carrito, guitarra]);
		}
	};

	const actualizarCantidad = (guitarra) => {
		const carritoActualizado = carrito.map((guitarraState) => {
			if (guitarraState.id === guitarra.id) {
				guitarraState.cantidad = guitarra.cantidad;
			}
			return guitarraState;
		});

		setCarrito(carritoActualizado);
	};

	const eliminarGuitarra = (guitarra) => {
		setCarrito(carrito.filter((guitarraState) => guitarraState.id !== guitarra.id));
	};

	return (
		<Document>
			<Outlet
				context={{
					agregarCarrito,
					carrito,
					actualizarCantidad,
					eliminarGuitarra,
				}}
			/>
		</Document>
	);
}

function Document({ children }) {
	return (
		<html lang="es">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Header />
				{children}
				<Footer />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

/* Manejo de errores */

export function CatchBoundary() {
	const error = useCatch();
	return (
		<Document>
			<p className="error">
				{error.status} {error.statusText}
			</p>{" "}
			<Link to="/" className="error-enlace">
				Volver a la Página Principal
			</Link>
		</Document>
	);
}

export function ErrorBoundary(error) {
	return (
		<Document>
			<p className="error">
				{error.status} {error.statusText}
			</p>{" "}
			<Link to="/" className="error-enlace">
				Volver a la Página Principal
			</Link>
		</Document>
	);
}
