import SEO from "components/SEO";
import Link from "next/link";
import ShopLayout1 from "components/layouts/ShopLayout1";
import Section1 from "pages-sections/market-1/Section1";
import Section8 from "pages-sections/market-1/Section8";
import Section11 from "pages-sections/books/Section11";
import Section13 from "pages-sections/books/Section13";
import axios from "axios";

// =================================================================
const MarketShop = (props) => {
  const mainCarouselData = [
    {
      title: "50% Off For Your First Shopping",
      imgUrl: "/assets/images/banners/main-banner.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.`,
      buttonText: "Shop Now",
      buttonLik: "#",
    },
    {
      title: "50% Off For Your First Shopping",
      imgUrl: "/assets/images/banners/main-banner.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.`,
      buttonText: "Shop Now",
      buttonLik: "#",
    },
  ];
  const id = 31;

  return (
    <ShopLayout1>
      <SEO title="CUBCUB" />
      {/* HERO SLIDER SECTION */}
      <Section1 carouselData={mainCarouselData} />

      {/* newBooks */}
      <Section11 moreItems={props.books} />

      {/* Shops */}
      <Section13 shops={props.shops} />

      {/* PROMO BANNERS */}
      <Section8 />
    </ShopLayout1>
  );
};

export const getStaticProps = async () => {
  const res = await axios.get(
    "https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/trade?date_order=asc"
  );
  const books = await res.data;

  const res2 = await axios.get(
    "https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/shop"
  );
  const shops = await res2.data;

  return {
    props: {
      books,
      shops,
    },
  };
};
export default MarketShop;
