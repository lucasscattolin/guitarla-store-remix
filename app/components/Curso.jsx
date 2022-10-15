const Curso = ({ curso }) => {
	const { contenido, imagen, titulo } = curso;

	console.log(imagen.data.attributes.url);

	return (
		<section className="curso">
			<style jsx="true">
				{`
					.curso {
						background-image: url(${imagen.data.attributes.url});
					}
				`}
			</style>
			<div className="contenedor curso-grid">
				<div className="contenido">
					<h2 className="heading">{titulo}</h2>
					<p className="texto">{contenido}</p>
				</div>
			</div>
		</section>
	);
};

export default Curso;
