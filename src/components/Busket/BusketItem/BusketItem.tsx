import React from "react";
import { ProductContent } from "../../Product/ProductInterface";
import "./BusketItem.css";
function BusketItem({ title, cost, rate, url }: ProductContent) {
  return (
    <div className="busketItem">
      <img src={url} alt="" className="busketItem__img" />
      <div className="busketItem__title">{title}</div>
      <div className="busketItem__cost">{cost}</div>
    </div>
  );
}

export default BusketItem;
