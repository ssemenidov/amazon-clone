import React from "react";
import "./Home.css";
import Grid from "@material-ui/core/Grid";
import Product from "../Product/Product";
import { ProductContent } from "../Product/ProductInterface";

const initialContent: ProductContent = {
  title:
    " 2020 Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (8th Generation)",
  cost: 629.99,
  rate: 3,
  url: "https://m.media-amazon.com/images/I/71gOkVA6-eL._AC_UL480_FMwebp_QL65_.jpg",
};

function Home() {
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
            <Grid item xs={6}>
              <Product {...initialContent}></Product>
            </Grid>
            <Grid item xs={6}>
              <Product {...initialContent}></Product>
            </Grid>
            <Grid item xs={4}>
              <Product {...initialContent}></Product>
            </Grid>
            <Grid item xs={4}>
              <Product {...initialContent}></Product>
            </Grid>
            <Grid item xs={4}>
              <Product {...initialContent}></Product>
            </Grid>
            <Grid item xs={6}>
              <Product {...initialContent}></Product>
            </Grid>
            <Grid item xs={6}>
              <Product {...initialContent}></Product>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Home;
