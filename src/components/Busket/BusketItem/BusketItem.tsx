import React from "react";
import { ProductContent } from "../../../Interfaces";
import "./BusketItem.css";
import { Button, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { DeleteProduct } from "../../../redux/actions";
export interface DeleteClick {
  product: ProductContent;
  deleteClick: () => void;
}
function BusketItem({ product, deleteClick }: DeleteClick) {
  const { title, cost, rate, url } = product;
  return (
    <div className="busketItem">
      <div className="busketItem__left">
        <img src={url} alt="" className="busketItem__img" />
        <div className="busketItem__content">
          <div className="busketItem__title">{title}</div>
          <div className="busketItem__btn">
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

      <div className="busketItem__cost">{cost}</div>
    </div>
  );
}

export default BusketItem;
