import React from "react";
import { ProductContent } from "../../../Interfaces";
import "./BasketItem.css";
import { Button } from "@material-ui/core";
export interface DeleteClick {
  product: ProductContent;
  deleteClick: () => void;
}
function BasketItem({ product, deleteClick }: DeleteClick) {
  const { title, cost, rate, url } = product;
  return (
    <div className="basketItem">
      <div className="basketItem__left">
        <img src={url} alt="" className="basketItem__img" />
        <div className="basketItem__content">
          <div className="basketItem__title">{title}</div>
          <div className="basketItem__btn">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                deleteClick();
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>

      <div className="basketItem__cost">{cost}</div>
    </div>
  );
}

export default BasketItem;
