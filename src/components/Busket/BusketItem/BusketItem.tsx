import React from "react";
import { ProductContent } from "../../../Interfaces";
import "./BusketItem.css";
import Button from "@material-ui/core/Button";
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
      <img src={url} alt="" className="busketItem__img" />
      <div className="busketItem__title">{title}</div>
      <div className="busketItem__cost">{cost}</div>
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
  );
}

export default BusketItem;
