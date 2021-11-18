import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cart from "./pages/Cart";
import Home from "./pages/Home";

export default function Router(){
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={ <Home/> }/> 
				<Route path="/carrinho/acima" element={ <Cart url="/data/acima-10-reais.json"/> }/> 
				<Route path="/carrinho/abaixo" element={ <Cart url="/data/abaixo-10-reais.json"/> }/> 
			</Routes>
		</BrowserRouter>
	);
}