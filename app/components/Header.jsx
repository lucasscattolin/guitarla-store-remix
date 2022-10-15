import { Link} from "@remix-run/react";
import Logo from "../../public/img/logo.svg";
import Navegacion from "./Navegacion";
const Header = () => {
	return (

		<header className="header">
			<div className="contenedor barra">
				<Link to="/" className="logo">
					<img src={Logo} alt="Imagen Logo" className="logo" />
				</Link>
				<Navegacion />
			</div>
		</header>
	);
};

export default Header;
