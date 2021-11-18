import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

	const navigate = useNavigate();

	return (
		<div className="mainWrapper">
			<div className="box">
				<h1>Qual carrinho quer ver?</h1>
				<div className="buttons">
					<button onClick={() => { navigate("/carrinho/acima"); }} className="btnPurchase">Acima de 10 reais</button>
					<button onClick={() => { navigate("/carrinho/abaixo"); }} className="btnPurchase">Abaixo de 10 reais</button>
				</div>
			</div>
		</div>
	);
}
