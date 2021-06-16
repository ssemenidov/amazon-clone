import React from "react";
import "./Product.css";
import Button from "@material-ui/core/Button";
import { ProductContent } from "./ProductInterface";
import { Star } from "@material-ui/icons";
function Product({ title, cost, rate, url }: ProductContent) {
  return (
    <div className="product">
      <div className="product__header">
        <div className="product__title">{title}</div>
        <div className="product__cost">
          $<strong>{cost}</strong>
        </div>
        <div className="product__rate">
          {Array(rate)
            .fill("")
            .map((_) => (
              <Star className="product__star"></Star>
            ))}
        </div>
      </div>
      <div className="product__content">
        <img className="product__img" src={url} alt="" />
        <div className="product__btn">
          <Button variant="contained" color="primary">
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product;