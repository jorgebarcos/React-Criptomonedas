import React from 'react';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';

function App() {
	return (
		<div className="container">
			<div className="row">
				<div className="one-half column">
					<img src={imagen} alt="Imagen Criptomonedas" className="logotipo" />
				</div>
				<div className="one-half column">
					<h1>Cotiza Criptomonedas al Instante</h1>

					<Formulario />
				</div>
			</div>
		</div>
	);
}

export default App;
