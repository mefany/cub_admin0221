import Link from "next/link";
import { Avatar, Box, Card, Grid } from "@mui/material";
import { H3, H4 } from "components/Typography";
import ShopCard1 from "components/shop/ShopCard1";
import axios from "axios";
import { FlexRowCenter } from "components/flex-box"; // ====================================================

// ====================================================
const AvailableShops = () => {
  return (
    <Box mb={7.5}>
      <H3 mb={3}>도서 보유 매장</H3>

      {/* <Grid container spacing={4}>
        {shopList.map((item) => (
          <Grid item lg={4} md={4} sm={4} xs={12} key={item.name}>
            <Link href="/shops/53324">
              <a>
                <FlexRowCenter
                  p={3.25}
                  width="100%"
                  component={Card}
                  flexDirection="column"
                >
                  <Avatar
                    src={item.imgUrl}
                    sx={{
                      width: 48,
                      height: 48,
                    }}
                  />
                  <H4 mt={1.5} color="grey.800">
                    {item.name}
                  </H4>
                </FlexRowCenter>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid> */}

      {/* ALL SHOP LIST AREA */}
      <Grid container spacing={3}>
        {shops.map((item) => (
          <Grid item lg={3} sm={6} xs={12} key={item.shop_uid}>
            <ShopCard1
              name={item.name}
              // slug={item.slug}
              phone={'010-1111-1111'}
              address={'강동구 방이동'}
              // rating={item.rating || 5}
              coverPicture={item.shop_photo}
              profilePicture={item.shop_photo}
            />
          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

// export const getStaticProps = async () => {
//   const res2 = await axios.get(
//     "https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/shop"
//   );
//   const shops = await res2.data;

//   return {
//     props: {
//       shops,
//     },
//   };
// };
const shops = [
  {
    "shop_uid": 3,
    "shop_name": "이디야 강동",
    "zipcode": "123122",
    "phone1": "010-1234-1234",
    "phone2": null,
    "user_uid": 18,
    "status": 1,
    "shop_photo": "https://wimg.mk.co.kr/news/cms/202211/27/news-p.v1.20221126.c669bd95281b4c1084dbe67a41b28d51_P1.jpg"
  },
  {
    "shop_uid": 4,
    "shop_name": "이디야 강남",
    "zipcode": "123122",
    "phone1": "010-1234-1234",
    "phone2": null,
    "user_uid": 18,
    "status": 1,
    "shop_photo": "https://wimg.mk.co.kr/meet/neds/2022/10/image_readtop_2022_929769_16662425055203367.jpg"
  },
  {
    "shop_uid": 5,
    "shop_name": "스타벅스 강남",
    "zipcode": "123122",
    "phone1": "010-1234-1234",
    "phone2": null,
    "user_uid": 16,
    "status": 1,
    "shop_photo": "https://wimg.mk.co.kr/news/cms/202211/29/20221129_01110302000005_S00.jpg"
  },
  {
    "shop_uid": 6,
    "shop_name": "투썸 강남",
    "zipcode": "123122",
    "phone1": "010-1234-1234",
    "phone2": null,
    "user_uid": 17,
    "status": 1,
    "shop_photo": "https://wimg.mk.co.kr/meet/2021/11/image_listtop_2021_1085375_1637313406.jpg"
  }
]
export default AvailableShops;
