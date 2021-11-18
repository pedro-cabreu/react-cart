/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

export default function CartItem(props) {

	return (
		<div className="cartItem">
			<div className="productImage">
				<img src={ props.image } alt="" />
			</div>
			<div className="productInfo">
				<div className="productName">
					{ props.name }
				</div>
				<div className="listPrice">
					R${ (props.listPrice/100).toFixed(2) }
				</div>
				<div className="sellingPrice">
					R${ (props.sellingPrice/100).toFixed(2) }
				</div>
			</div>
		</div>
	);
}

CartItem.propTypes = {

	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	listPrice: PropTypes.number.isRequired,
	sellingPrice: PropTypes.number.isRequired
};
