import { Box, Grid } from "@mui/material";
import BookCard from "components/product-cards/BookCard";

import ProductCard1 from "components/product-cards/ProductCard1";
import { H2, H3 } from "components/Typography";
import { useState, useEffect } from "react";

// ===================================================
const RelatedProducts = ({ data }) => {

  return (
    <Box mb={7.5}>
      <H3 mb={3}>동일 상품</H3>
      <Grid container spacing={3}>
        {data ? data.map((item, ind) => (
          <Grid item lg={3} md={3} sm={6} xs={6} key={ind}>
            <BookCard
              hoverEffect
              shop_name={item.shop_name}
              trade_uid={item.trade_uid}
              title={item.title}
              price={item.sell_price}
              sell_price={item.sell_price}
              imgUrl={item.image}
              discount={item.discount}

            />
          </Grid>
        )) : <H2>Loading...</H2>}
      </Grid>
    </Box>
  );
};

export default RelatedProducts;
