import React from "react";
import { Link } from "react-router-dom";
import { ProductContainer, ProductHeading, ProductImage, ProductLink } from "./productCard.styles";

export function ProductCard({product}){
  const {id, title, imageUrl, price, discountedPrice, rating, tags, reviews, description} = product
  return(
    <ProductContainer>
      <ProductImage src={imageUrl} alt={title}/>
      <div>
      <ProductHeading>{title}</ProductHeading>
      <p>Price: {price === discountedPrice? `kr ${price}`:`kr ${discountedPrice}, save kr ${price - discountedPrice}`}</p>
      <ProductLink to={`product/${id}`}>View More</ProductLink>
      </div>

    </ProductContainer>
  )
}