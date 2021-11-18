/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import PropTypes from "prop-types";
import CartItem from "../components/CartItem";
import { BsArrowLeftSquareFill } from "react-icons/bs";

export default function Cart(props) {
    
	const [cartItems, setCartItems] = useState([]);
	const [total, setTotal] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {

		axios.get(props.url)
			.then(res => {

				setCartItems(res.data.items);

				let total = 0;

				cartItems.forEach(item => {

					total += item.sellingPrice;
				});

				setTotal(total);
			});

	}, []);

	return (
		<div className="mainWrapper">
			<BsArrowLeftSquareFill onClick={() => { navigate("/"); }} className="btnBack"/>
			<div className="box">
				<div className="header">
					<h2>Meu Carrinho</h2>
				</div>
				<div className="productList">
					{
						cartItems.map(item => (<CartItem key={item.uniqueId} name={item.name} image={item.imageUrl} listPrice={item.listPrice} sellingPrice={item.sellingPrice}/>))
					}
				</div>
				<div className="totalPrice">
					<div className="price">
						<h2>Total</h2>
						<h2>R$ { (total/100).toFixed(2) }</h2>
					</div>
					{
						total > 1000 ?
							<div className="freeShipping">Parabéns, sua compra tem frete grátis !</div> 
							:	null
					}
				</div>
				<div className="footer">
					<button className="btnPurchase">Finalizar Comprar</button>
				</div>
			</div>
		</div>
	);
}

Cart.propTypes = {

	url: PropTypes.string.isRequired
};
