import React from "react";
import Button from "@material-ui/core/Button";
import "./Product.css";
type PostContent = {
  title: string;
  cost: number;
  url: string;
};
function Product({ title, cost, url }: PostContent) {
  return (
    <div className="product">
      <div className="product__header">
        <div className="product__title">{title}</div>
        <div className="product__cost">
          $<strong>{cost}</strong>
        </div>
        <div className="product__rate"></div>
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
