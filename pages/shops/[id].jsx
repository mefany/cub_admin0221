import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Container, Grid, IconButton, useMediaQuery } from "@mui/material";
import FilterList from "@mui/icons-material/FilterList";
import ShopLayout1 from "components/layouts/ShopLayout1";
import Section11 from "pages-sections/books/Section11";

import ProductCardList from "components/products/ProductCard1List";
import ProductFilterCard from "components/products/ProductFilterCard";
import ShopIntroCard from "components/shop/ShopIntroCard";
import axios from "axios";
import Sidenav from "components/sidenav/Sidenav";
import api from "utils/__api__/shop"; // ============================================================

// ============================================================
const ShopDetails = () => {
  const router = useRouter();
  const [shop, setShop] = useState('')
  const [shopBooks, setShopBooks] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;

    // codes using router.query
    getShopInfo(router.query.id)
    getShopBooks(router.query.id)
  }, [router]);

  // useEffect(() => {
  //   getSearchBooks(query)
  // }, [query]);

  const getShopInfo = async (query) => {
    const res = await axios.get(
      `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/shop/${query}`
    );
    const shop = await res.data;
    console.log(shop)
    if (shop.length) {
      setShop(shop[0])
    }
  };

  const getShopBooks = async (query) => {
    const res = await axios.get(
      `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/trade?shop=${query}`
    );
    const books = await res.data;
    if (books.length) {
      setShopBooks(books)
    }
    console.log(books)
    // setRelatedBook(books);
    // setLoading(false);
  };


  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const ICON_BUTTON = (
    <IconButton
      sx={{
        float: "right",
      }}
    >
      <FilterList fontSize="small" />
    </IconButton>
  );
  return (
    <ShopLayout1>
      <Container
        sx={{
          mt: 4,
          mb: 6,
        }}
      >
        {/* SHOP INTRODUCTION AREA */}
        <ShopIntroCard
          name={shop.shop_name}
          phone={shop.phone1}
          address={shop.address_full}
          coverPicture={shop.shop_photo}
          profilePicture={shop.shop_photo}
        />

        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>

            {/* PRODUCT LIST AREA */}
            <Section11 moreItems={shopBooks} title={'매장 보유 도서'} />
          </Grid>
        </Grid>
      </Container>
    </ShopLayout1>
  );
};

// export const getStaticPaths = async () => {
//   const paths = await api.getSlugs();
//   return {
//     paths: paths,
//     //indicates that no page needs be created at build time
//     fallback: "blocking", //indicates the type of fallback
//   };
// };
// export const getStaticProps = async ({ params }) => {
//   const shop = await api.getProductsBySlug(String(params.slug));
//   return {
//     props: {
//       shop,
//     },
//   };
// };
export default ShopDetails;
