import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Formulario() {
	const [ criptomonedas, guardarCriptomonedas ] = useState([]);

	useEffect(() => {
		const consultarAPI = async () => {
			const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD';

			const resultado = await axios.get(url);

            // Colocar respuesta en el estate
            guardarCriptomonedas(resultado.data.Data);
		};

		consultarAPI();
	}, []);
	return (
		<form>
			<div className="row">
				<label>Elige tu Moneda</label>
				<select className="u-full-width">
					<option value="">- Elige tu Moneda -</option>
					<option value="USD">Dolar Estadounidense</option>
					<option value="ARG">Peso Argentino</option>
					<option value="GBP">Libras</option>
					<option value="EUR">Euro</option>
				</select>
			</div>

			<div className="row">
				<label>Elige tu Criptomoneda</label>
				<select className="u-full-width" />
			</div>
		</form>
	);
}
export default Formulario;
