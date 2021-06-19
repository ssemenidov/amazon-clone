import React from "react";
import "./Home.css";
import Grid from "@material-ui/core/Grid";
import Product from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { AddProduct } from "../../redux/actions";
import { ProductContent, State } from "../../Interfaces";

function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.catalog.catalog);
  const BuyProduct = (index: number) => {
    dispatch(AddProduct(state[index]));
  };
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
          alt="img"
        />
        <div className="home__content">
          <Grid container spacing={3}>
            {state.map((item, index) => {
              return (
                <Grid key={index} item xs={index % 5 > 1 ? 4 : 6}>
                  <Product
                    product={item}
                    buyProduct={() => BuyProduct(index)}
                  ></Product>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Home;
